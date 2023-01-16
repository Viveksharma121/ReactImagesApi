import React from 'react';
import { useState, useEffect } from "react";
import ImageCard from "./Components/ImageCard";
import Imagesearch from './Imagesearch';
function App() {
  const [images,setImages]=useState([]);
  const [loading, setLoading]=useState(true);
  const [term, setTerm]=useState('');
  useEffect(()=>{

    fetch(`https://pixabay.com/api/?key=32677830-137b3defbdef2dbf9a70d82e9&q=${term}&image_type=photo&pretty=true`)
    .then(res=>res.json())
    .then((data)=>{
      setImages(data.hits)
      setLoading(false)
    })
    .catch(err=>console.log(err))
  },[term]);
    return (
    <div className="App">
  
    <div className="container mx-auto">
    <Imagesearch searching={(text)=>setTerm((text))} />
    {loading ? <h1 className='text-6xl text-center mx-auto'>Loading</h1>:
      <div className="grid grid-cols-3 gap-4">
      {!loading && images.length===0 && <h1 className='text-5xl text-center mx-auto mt-32'>No image found</h1>}
      {images.map((image) => { return <ImageCard key={image.id} image={image}/> })}
      </div>}
    </div>
 
    {/* </div> */}
     </div> 
  );
}

export default App;
