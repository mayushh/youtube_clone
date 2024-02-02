import React from 'react'
import VideoCard from './VideoCard';
import ButtonList from './ButtonList';
import { useGetAllVideoCardData } from '../utils/useGetAllVideoCardData';

const VideoContainer = () => {

  const videoData = useGetAllVideoCardData()
  if(videoData.length===0) return;
  return (
    <div>
    <div className="mb-5"> <ButtonList /></div>
   
    <div className='flex flex-wrap justify-center '>
    
   {videoData.map((items,i)=>{
      
      return <div key={i} > <VideoCard videoInfo = {items}/></div>
    })}
      
    </div>
    </div>
  )
}

export default VideoContainer;
