import { useState, useEffect } from "react";
import InputBox from "./InputBox";
import Posts from "./Posts";
import {
  collection,
  query,
  orderBy,
  where,
  updateDoc,
  doc,
  deleteField,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { db, auth,  user} from "../firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
 
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
    deleteUser, 
} from "firebase/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EditIcon from "@material-ui/icons/Edit";

import { PencilIcon } from "@heroicons/react/solid";

import { UserCircleIcon } from "@heroicons/react/solid";
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';

function FriendCard({key_id}){

    const user = auth.currentUser;
    const [profileImage, setProfileImage] = useState("")
    const [bio, setBio] = useState();
    const [username, setUsername] = useState();
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [gender, setGender] = useState();
    const [uid, setUid] = useState();
    const [deleted, setDeleted] = useState(false)

      useEffect(async () => {
        if(user){
            const sfRef = doc(collection(db,'Users'), key_id);
            const collections = await getDoc(sfRef);
            
            const data = collections.data();
            setBio(data.bio);
            setUsername(data.username);
            setName(data.first_name + " " + data.last_name);
            setAge(data.age);
            setGender(data.gender);
            setUid(key_id);
            setProfileImage(data.profile_picture)
        }
      }, [])

    const removeFriend = () => {
      
        updateDoc(doc(db, "Friends", key_id), {
            [user.uid]:deleteField()
          });

        updateDoc(doc(db, "Friends", user.uid), {
            [key_id]:deleteField()
        });
        
        setDeleted(true)
      
    }
    if (deleted) {return false}
    return(
      
      <div className="font-sans border bg-white rounded-xl shadow-xl  max-w-xs md:max-w-md lg:max-w-md ">
         
          <div className="flex ">
          <div
            role="account-form"
            className="flex flex-shrink max-w-auto pt-6 flex-col items-center p-2  px-4 btext-grey-500 
        "
          >
            <div className="relative w-32 h-32 ">
              {profileImage ? (
                <img
                  className="rounded-full object-contain "
                  src={profileImage}
                />
              ) : (
                <UserCircleIcon
                  
                  className="text-blue-300 rounded-full object-contain h-32 w-32"
                ></UserCircleIcon>
              )}
            </div>
            <p className=" pt-3  font-semibold text-2xl text-center">{name + ", "+ age}</p>
            <p className="pb-4 pt-1 font-medium text-lg  text-center text-slate-500">{username}</p>
            <button
                type="button"
                onClick = {removeFriend}
                className=" mb-4 w-40 h-10 text-sm font-semibold text-center  text-white rounded-full block shadow-xl
                            transition ease-in-out bg-blue-600 hover:bg-blue-500 duration-400"
              >
                Remove Friend
                
              </button>
          </div>
          <div className ='border-l-4 flex  justify-between flex-grow flex-col p-2 py-2 pt-8 w-auto'>
            <p className=" font-medium text-lg ">{bio}</p>
            <div className ='text-right'> 
                {gender == "Male" ? (
                  <MaleIcon style={{ fontSize: 36 }} className = "mx-2 text-blue-400 rounded-full"></MaleIcon>
                ) : (
                  <FemaleIcon style={{ fontSize: 36 }} className = "mx-2 text-pink-400 rounded-full"></FemaleIcon>
                )
                }
              
            </div>
          </div>
        </div>
      </div> 
      
     
    )
}

export default FriendCard;