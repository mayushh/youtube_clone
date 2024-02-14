import React from 'react'
const Comment = ({ data }) => {
  const { name, comment } = data
  return (
    <div className='flex'>
      <div className='  w-24 pr-3 p-2 pt-0  m-1 bg-gray-50 mr-0'>
        <div className='rounded-full overflow-hidden'>
          <img className='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS785biEGWYfQ3kCbvts_QRuNPn7IJpvovN4A&usqp=CAU" alt="" />

        </div>
      </div>
      <div className='ml-0 p-2 m-1 bg-gray-50'>
        <div className='font-semibold' >@{name}</div>
        <div className=''>{comment}</div>
      </div>
    </div>

  )
}
const CommentList = ({ k }) => {
  return (
    <div>
      {
        k.map((item, i) => (
          <div key={i}>
            <Comment data={item} />
            {item.reply && (
              <div className='ml-8 border border-l-black'>
                <CommentList k={item.reply} />
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default CommentList