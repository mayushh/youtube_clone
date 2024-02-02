import React from 'react'
import useViewsRead from '../utils/useViewsRead'

const RelatedVideoCard = ({data}) => {
     const views = useViewsRead(data.statistics?.viewCount)
  return (
    <div className='flex'>
        <div className='flex'>
                    <img src={data.snippet?.thumbnails?.maxres?.url} alt="" className='rounded-lg sideCard  max-h-24' />
                </div>
                <div className='mx-2'>
                    <p className='font-semibold text-md max-h-12 overflow-hidden '>{data.snippet?.title}</p>
                    <p className='text-sm text-gray-800 my-1'>{data.snippet?.channelTitle}</p>
                    <p className='text-sm text-gray-800'>{views} views</p>
                </div>
    </div>
  )
}

export default RelatedVideoCard