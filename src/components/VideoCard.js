import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import useViewsRead from "../utils/useViewsRead";

const VideoCard = ({videoInfo}) => {
    const {snippet,statistics,id} = videoInfo;
    const {thumbnails,channelTitle,title} = snippet;
    const {viewCount} = statistics;
    const views = useViewsRead(viewCount);

     return (
        
        <>   <Link to={"/watch?v="+id} >
            <div className="video-card h-80 mr-3" >
                <div><img className="rounded-lg w-full min-h-40" src={thumbnails.maxres?.url} alt="" /></div>
                <div className="text-md font-semibold max-h-14 py-1 overflow-hidden"><p>{title}</p></div>              
                <div className="text-base text-gray-600"><p>{channelTitle}</p></div>
                <div className="text-base text-gray-600"><p>{views}</p></div>
            </div>
            </Link>
           
        </>
    )
}
export default VideoCard;
 {/* <div className="flex flex-wrap justify-start video-card px-2">
                <div><img className=" rounded-lg  min-h-44" src= alt="thumbnail" /></div>
                <div className="text-md font-semibold">{title}</div>              
                <div className="text-base text-gray-600"><p>{channelTitle}</p></div>
                <div className="text-base text-gray-600"><p>{views}</p></div>
            </div> */}