import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../Constants/Constant'
import { googleApi } from '../Constants/Constant'
import { useSelector } from 'react-redux'
import VideoCard from './VideoCard'


const RelatedVideoList = () => {
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
    return (
        <>
            <div className='flex flex-wrap justify-center'>

                {videoData.map((items, i) => {

                    return <div key={i} > <VideoCard videoInfo={items} /></div>
                })}

            </div>
        </>
    )
}

export default RelatedVideoList

