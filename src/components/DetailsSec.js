import React, { useState } from 'react'
import useViewsRead from '../utils/useViewsRead';

const DetailsSec = ({ videoData }) => {
    const like = useViewsRead(videoData?.statistics?.likeCount)// the viewsread hook (custom made) helps to reduce the length of number by adding K, M, B
    return (
        <div className='grid grid-cols-12  py-3 text-lg'>
            <div className='col-span-5 flex flex-wrap justify-start '>
                <div className='font-bold p-2 mr-2 overflow-hidden max-w-[130px] '>{videoData?.snippet?.channelTitle}</div>
                <div><button className='p-2 px-6 bg-black text-white rounded-full hover:bg-gray-900  hover:cursor-pointer'>Subscribe</button></div>
            </div>
            <div className='col-span-7 flex flex-wrap justify-end mb-auto'>
                <div className='p-2  border-r-2 bg-gray-100 rounded-l-full hover:bg-gray-200 hover:cursor-pointer font-semibold px-6 '>Like {like}</div>
                <div className='p-2 bg-gray-100 rounded-r-full hover:bg-gray-200 hover:cursor-pointer px-6 '>dislike</div>
                <button className='p-2 hover:cursor-pointer hover:bg-gray-200  rounded-full bg-gray-100 px-6  ml-2 mr-0' >Share</button>
            </div>

        </div>
    )
}

export default DetailsSec