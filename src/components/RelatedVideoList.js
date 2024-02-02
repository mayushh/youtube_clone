import React, { useState, useEffect } from 'react'
import { useGetAllVideoCardData } from '../utils/useGetAllVideoCardData'
import useViewsRead from '../utils/useViewsRead'
import RelatedVideoCard from './RelatedVideoCard'


const RelatedVideoList = () => {

    const videoData = useGetAllVideoCardData()
    
    return (
        <>
            <div className=' mt-[-5%]'>

             {videoData.map((items, i) => {

                    return <div key={i} className='flex wrap mb-3 '>

                    <RelatedVideoCard data={items}/>
                    </div>
                })}

              

               

            </div>
        </>
    )
}

export default RelatedVideoList

