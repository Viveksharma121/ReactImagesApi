import React,{useState} from 'react'

function Imagesearch({searching}) {
    const [search,setsearch]=useState('');
// console.log(search);
const searchcontent=(e)=>{
    e.preventDefault();
    searching(search);
}
  return (
    
      <form onSubmit={searchcontent} className="bg-white p-6 rounded-md">
  <label className="block text-gray-700 font-medium mb-2">Search</label>
  <div className="relative rounded-md shadow-sm">
    <input onChange={(e)=>setsearch(e.target.value)} id="search" type="search" className="form-input py-2 px-3 block w-full leading-5 rounded-md transition duration-150 ease-in-out bg-gray-50 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:bg-white focus:border-gray-600 focus:shadow-outline-blue" placeholder="Enter your search query"/>
    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
      <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="none" stroke="currentColor">
        <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
      </svg>
    </div>
  </div>
</form>

 
  )
}

export default Imagesearch
