import React, { useEffect, useState } from 'react'
import { googleApi } from '../Constants/Constant'
const useGetVideoData = (videoId) => {
    const [info, setInfo] = useState([]) 
    const fetchData =async ()=>{
        try {
           const res = await fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id='+videoId+'&maxResults=10&key='+googleApi);
           if (!res.ok) {
               throw new Error(`Error: ${res.status} - ${res.statusText}`);
           }
           const data = await res.json();
           setInfo(data?.items[0]);
       } catch (error) {
           console.error("Error fetching related videos:", error.message);

       }    }
       useEffect(()=>{
        fetchData()
       },[])
       
       return info;

}

export default useGetVideoData