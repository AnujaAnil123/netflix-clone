import React from 'react'
import { signInWithPopup } from "firebase/auth"
import { Button } from '@mui/material'
import {auth,googleAuth} from '../fireBase/setup'
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Signin() {
const navigate = useNavigate()
const googleSignin =async ()=> {
  try {
   await signInWithPopup(auth,googleAuth)

   setTimeout(()=>{
    auth.currentUser?.emailVerified && navigate("/")
   },2000)
  
   toast.success("signed in successfully",{
    theme:"dark"
   })

  } catch (error) {
    console.error(error)
  }
 
}
 console.log(auth)
  return (
    <div style={{backgroundColor:"black",height:"100vh",padding:"20px"}}>
    L<ToastContainer autoClose={2000}/>
    <img style={{
    display:"flex",
    width:"80px"}} alt="Netflix Logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' /> 
    
      <div style={{position:"fixed",left:"35%",top:"35%"}}>
    <Button onClick={googleSignin} variant="contained" color='error'>SignIn with Google</Button>
   <br/>
   <div>
   <h2 style={{color:"white"}}>Let's start to explore movies from here...</h2>
    </div>
    </div>
    </div>
    
  )
}

export default Signin