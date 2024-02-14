import React from 'react'
import { Comments } from '../Constants/Constant'
const Comment = ({data}) => {
    const {name, comment, reply} = data
    return (
        <div className='p-2 m-1 bg-gray-300'>
            name:{name} <br />
            comment:{comment};
        </div>
    )
}
const CommentList = () => {
  return (
    <div>
    {Comments.map((items,i)=> <Comment key={i} data = {items}/>)}
   
    </div>
  )
}

export default CommentList