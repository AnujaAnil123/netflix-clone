

import { Button } from '@mui/material';
import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../fireBase/setup';
import {signOut} from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Trailer from './Trailer';
function Navbar() {
 const logout = async()=>{
   try{
  await signOut(auth)
  toast.success("Loggedout successfully",{
    theme:"dark"
  })
  
   }catch(error){
   console.error(error)
   }
 }
  const navigate = useNavigate()
  const [movies, setMovies] = useState([]);

    const getMovie = () => {
        try {
          fetch('https://api.themoviedb.org/3/discover/movie?api_key=573837a7b81a7b4a084fcee93af63c39')
                .then(res => res.json())
                .then(json => setMovies(json.results));
        } catch (error) {
            console.log(error);
        }
    };
    const signinClick=()=>{
      console.log('Button clicked');
      navigate('/Signin')
    }

    useEffect(() => {
        getMovie();
    }, []);
    console.log(auth.currentUser?.email)
  return (
    <div style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)) ,url(https://image.tmdb.org/t/p/original${movies[5]?.poster_path})`,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"600px",width:"100%"}}>
    <ToastContainer autoClose={2000} />
    <div style={{display:"flex", justifyContent:'space-between',padding:"20px"}}>
    <img style={{
    left:"20px",
    width:"80px"}} alt="Netflix Logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' /> 
    <div>
    {auth.currentUser?.emailVerified ? <Button onClick={logout} variant='contained' color='error' sx={{ height: "40px",marginLeft:"10px"}}>LogOut</Button>

:<Button onClick={signinClick} variant='contained' color='error' sx={{ height: "40px"}}>
  Sign In 
</Button>}
</div>
    </div>
    <div style={{padding:"20px"}}>
      <h1 style={{color:"#F1F1F1",fontSize:"70px",fontFamily:"initial",display:"flex",fontWeight:"normal"}}>{movies[5]?.original_title}</h1>
   <h3 style={{color:"#F1F1F1"}}>{movies[5]?.overview}</h3>
    
   <Trailer movieId={movies[5]?.id} />
    </div>
    </div>
  )
}

export default Navbar