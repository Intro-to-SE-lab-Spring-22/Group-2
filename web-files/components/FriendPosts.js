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
  docs,
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
import FriendPost_med from "./FriendPost_med";


 function FriendPosts() {

    const user = auth.currentUser;

    const [Array1, setArray] = useState([])

    useEffect(async () => {
        if(user){
            const sfRef = doc(collection(db,'Friends'), user.uid);
            const collections = await getDoc(sfRef);
            const data = collections.data();
            const tempArray = []
            if (data != null) {
            Object.keys(data).forEach((usertags) => {
                
                tempArray.push( {
                    key_id:usertags
                  })
            })
            
              setArray(tempArray)
            }
        }
      }, [])
 
      
  return (
    <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl flex-grow  pb-44 pt-6 mr-4
    xl:mr-40 overflow-y-auto">
    {
        
      Array1?.map((item) => 
      <FriendPost_med key_id = {item.key_id} friends = {Array1}/>
 )
     }
  </div>
  )
 
}

export default FriendPosts;