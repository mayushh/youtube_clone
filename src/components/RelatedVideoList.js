import React from 'react'
import { useGetAllVideoCardData } from '../utils/useGetAllVideoCardData'

import VideoCard from './VideoCard'


const RelatedVideoList = () => {
   
    const videoData = useGetAllVideoCardData()
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

