import React from 'react'
import { useParams } from 'react-router'

const Player = () => {
    const {PlayerId}= useParams()
    const movieUrl=`https://vidsrc.xyz/embed/movie/${PlayerId}`;
     
  return  <div>
    <iframe 
    className="w-full h-screen"
    allow='autoplay; encrypted-media; gyroscope; picture-in-picture' 
    allowFullScreen
    src={movieUrl}>
        
    </iframe>
  </div>
  
}

export default Player;