import React from 'react'
import Button from './Button.js'
const ButtonList = () => {
  const ButtonList = ["All","BodyBuilding","Mobile","Anime","news","cooking","Music","Live"];
  return (
    <div className='flex  '>
    {
      ButtonList.map((name,i)=>{
        return <Button key={i} name={name}/>
      })
    }
    
    </div>
  )
}

export default ButtonList