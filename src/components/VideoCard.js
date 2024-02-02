import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const VideoCard = ({videoInfo}) => {
    const {snippet,statistics,id} = videoInfo;
    const {thumbnails,channelTitle,title} = snippet;
    const {viewCount} = statistics;
    const [views,setViews] = useState(0);
    
    const viewSetting = ()=>{
        if (viewCount >= 1e9) {
            setViews((viewCount/1e9).toFixed(1) + 'B');
       }
       else if (viewCount >= 1e6) {
          setViews((viewCount/1000000).toFixed(1) + 'M');
       }
       else if (viewCount/1000) {
           setViews((viewCount/1000).toFixed(0) + 'k');
       }
       else{
           setViews(viewCount);
       }
    }
    useEffect(() => {
      viewSetting()
    }, [])
  
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