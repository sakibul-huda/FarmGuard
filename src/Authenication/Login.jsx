import { FaGoogle } from "react-icons/fa";
import auth from "./Firebase/firebase.config";
 import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Login = () => {

    const googleProvider=new GoogleAuthProvider();

   const handleLogin=()=>{
    
    signInWithPopup(auth, googleProvider)
  .then((result) => {
    alert('login success');
  }).catch((error) => {
    alert('failed')
    // ...
  });
   }




    return (
        <div>
            <FaGoogle className="mt-40 ml-40 text-3xl border  text-blue-950 cursor-pointer"
            onClick={handleLogin}/>
        </div>
    );
};

export default Login;