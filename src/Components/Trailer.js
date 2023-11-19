import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'

import Modal from 'react-modal';

import Youtube from "react-youtube"
   
const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      
      function Trailer({location,movieId}) {
        const [trailerView,setTrailerView] = useState([])
                const showTrailer = ()=>{
                    fetch(`https://api.themoviedb.org/3/movie/${movieId ? movieId : location?.state?.movie?.id}/videos?api_key=573837a7b81a7b4a084fcee93af63c39&language=en-US`)
                    .then(res => res.json())
                    .then(json => setTrailerView(json.results))
        }
      useEffect(()=>{
        showTrailer()
      })

       
        const [modalIsOpen, setIsOpen] = React.useState(false);
      
        function openModal() {
          setIsOpen(true);
        }
      
        
      
        function closeModal() {
          setIsOpen(false);
        }
    return (
        <div>
          <Button variant='contained' sx={{color:"black",bgcolor:"white"}} onClick={openModal}>Play Trailer</Button>
          <Modal
            isOpen={modalIsOpen}
            
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            
            {trailerView && trailerView.length > 0 && <Youtube videoId={trailerView[0]?.key} />}
           
          
          </Modal>
        </div>
      );
}

export default Trailer