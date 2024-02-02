import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../Constants/Constant';
import VideoCard from './VideoCard';
import ButtonList from './ButtonList';

const VideoContainer = () => {

  const [videoData, setVideodata] = useState([]);  
  const getVideos = async () => {
    try {
      const response = await fetch(YOUTUBE_VIDEO_API);
      const data = await response.json();
      
      // setTitle(data.items[0].snippet.title);
      setVideodata(data.items);
      console.log(data.items); // Log the received data
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);
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
// channelTitle={items?.snippet?.channelTitle} viewCount = {items.statistics.viewCount}  title={items?.snippet?.title} img={items?.snippet?.thumbnails?.maxres?.url}