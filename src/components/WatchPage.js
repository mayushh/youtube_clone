import React from 'react'
import { useSearchParams } from 'react-router-dom'
import ReactPlayer from 'react-player';
import ButtonList from './ButtonList';
import RelatedVideoList from './RelatedVideoList';
import useGetVideoData from '../utils/useGetVideoData';
import useViewsRead from '../utils/useViewsRead';
import CommentList from './CommentList';
const WatchPage = () => {
  const [searchParams] = useSearchParams()
  const videoId = searchParams.get('v');
  const videoData = useGetVideoData(videoId);
  const views = useViewsRead(videoData?.statistics?.viewCount)
  return (
    <div className='flex justify-center'>
    <div className='mt-6 ml-10 pr-0 player'>
      <div className=' rounded-2xl overflow-hidden player'>
        <ReactPlayer playing={true} controls={true} height={"380px"} width={"680px"} url={"https://www.youtube.com/watch?v=" + videoId} />
      </div>
      
      <div className=''>
        <p className='font-bold text-xl mt-2'>{videoData?.snippet?.title}</p>
        <p>{views} views</p>
        <p>{videoData?.snippet?.channelTitle}</p>
      </div>
      <div>
        <CommentList></CommentList>
      </div>
    </div>
    <div className='sideList mt-3  ml-1 px-2'>
      <div className=' rounded-2xl overflow-hidden'>
        <div className='overflow-x-scroll  px-5  scroll-container '>
          <ButtonList/>
        </div>
        <div className=' m-1 p-1 px-2'>
        <RelatedVideoList />
        </div>
      </div>
    </div>
    </div>
  )
}

export default WatchPage