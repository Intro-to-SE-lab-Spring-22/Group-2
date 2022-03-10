import react from "react";

function SignUp(){
        return (
            <div>
                <form id="signup-form">
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" id="signup-firstname" />
                </div>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="User name" id="signup-username"/>
                </div>
                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" id="signup-lastname"/>
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" id="signup-email"/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" id="signup-password"/>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
            </div>
        );
}

export default SignUp


