import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Gallery() {

  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/galleries')
    .then(res => setImageData(res.data))
    .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm('Are you sure you want to delete this property?');
    if(confirm) {
      axios.delete('http://localhost:3000/galleries/' + id)
      .then(res => {
        window.location.reload();
      }) .catch(err => console.log(err));
    }
  }

  return (
    <div className=''>
      <div>
        <h1 className='text-[30px] mb-10'>Gallery</h1>
        <Link to={'/addimage/:id'} className='px-10 py-5 bg-slate-100 shadow-md text-[20px] flex flex-row justify-between font-bold mb-10 cursor-pointer'>
          <h1>Add Image</h1>
          <p>+</p>
        </Link>
      </div>

      <div className='flex flex-row flex-wrap gap-10'>
      {imageData.map((image) =>  {
        return(
          <div className='max-w-[300px] relative shadow-lg'>
            <img key={image.id} src={image.galImage} alt={image.title} />
            <p className=''>{image.description}</p>
            <p onClick={(e) => handleDelete(image.id)} className='absolute top-2 right-2 opacity-0 hover:opacity-100 text-[25px] text-red-500 cursor-pointer font-bold'>X</p>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default Gallery
