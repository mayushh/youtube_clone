import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom'
import {  closeMenu } from '../utils/appSlice';
import ReactPlayer from 'react-player';
import ButtonList from './ButtonList';
import VideoCard from './VideoCard';
const WatchPage = () => {
  const [searchParams] = useSearchParams()
  const videoId = searchParams.get('v');
  const Dispatch = useDispatch()
  const videoInfo = useSelector(store => store.app.onClickedVideoCardDetail)
  const {snippet,statistics} = videoInfo[0];
  const {channelTitle,title} = snippet;
  const {viewCount} = statistics;
  useEffect(() => {
  
    Dispatch(closeMenu());
  }, [])
  return (
    <div className='flex justify-center'>
    <div className='mt-6 ml-14 pr-0 player'>
      <div className=' rounded-2xl overflow-hidden player'>
        <ReactPlayer playing={true} controls={true} height={"380px"} width={"680px"} url={"https://www.youtube.com/watch?v=" + videoId} />
      </div>
      <div className=''>
        <p className='font-bold text-xl'>{title}</p>
        <p>{viewCount} views</p>
        <p>{channelTitle}</p>
      </div>
    </div>
    <div className='sideList mt-6  ml-3 px-2'>
      <div className=' rounded-2xl overflow-hidden'>
        <div className='overflow-x-scroll  mx-1  scroll-container '>
          <ButtonList/>
        </div>
        <div className=' m-1 p-1 px-2'>
         <VideoCard videoInfo={videoInfo[0]}></VideoCard>
        </div>
      </div>
    </div>
    </div>
  )
}

export default WatchPage