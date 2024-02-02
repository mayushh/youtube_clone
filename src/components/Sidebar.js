import React from 'react'

const Sidebar = () => {

  return (
    <div className='min-w-60 p-5 px-10 shadow-md '>
    <ul className='m-1 text-xl'>
      <li>Home</li>
      <li>Live</li>
      <li>Videos</li>
      
    </ul>
    <h1 className='font-bold  text-xl'>Your Likes</h1>
    
    <ul className='m-2  text-lg '>
      <li>Music</li>
      <li>Sports</li>
      <li>Gamming</li>
      <li>Movies</li>
    </ul>
    <h1 className='font-bold  text-xl'>Subscriptions</h1>
    
    <ul className='m-2 text-lg'>
      <li>Music</li>
      <li>Sports</li>
      <li>Gamming</li>
      <li>Movies</li>
    </ul>
    </div>
  )
}

export default Sidebar