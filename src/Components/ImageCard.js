import React from 'react'

function ImageCard({image}) {

  const tags=image.tags.split(',')

  return (
    // <div>
       <div className="max-w-sm rounded overflow-hidden shadow-lg max-h-96" >
    <img src={image.webformatURL} className="w-full"/>
    
   <div className="px-6 py-4">
    <div className="fond-bold text-purple-600 text-xl mb-2">
    Photo by {image.user}
    </div>
    <ul>
      <li>
        <strong>Views: </strong>
       {image.views}
      </li>
      <li>
        <strong>Downlaods: </strong>
       {image.downlads}
      </li>
      <li>
        <strong>Likes: </strong>
        {image.likes}
      </li>
    </ul>
   </div>
   <div className="px-6 py-4 ">
  <>
   {tags.map((tag, index)=>{
   return <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
      #{tag}
    </span>
   })}</>
   </div>
   </div>
  // </div> 
  )
}

export default ImageCard
