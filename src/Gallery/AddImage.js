import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function AddImage() {
    const navigate = useNavigate();

    const [selectedFile, setSelectedFile] = useState({
        image: '',
        description: ''
    });

    const handleFileChange = (event) => {
        const file = event.target.files[0]
      setSelectedFile({... selectedFile, image: file});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        axios.post('http://localhost:3000/galleries', selectedFile)
          .then(response => {
            console.log(response);
            navigate('/gallery');
          })
          .catch(error => {
            console.error('Error submitting image to gallery:', error);
          });
      };

  return (
    <div className=''>
        <form onSubmit={handleSubmit} className='flex flex-col gap-5 justify-center items-center mt-60'>
            <h1 className='text-[20px] font-bold'>Add Image</h1>
            <input onChange={handleFileChange} type='file' />
            <input type='text' onChange={(e) => setSelectedFile({...selectedFile, description: e.target.value})} />

            <div className='flex flex-row gap-4 text-[18px]'>
                <button type='submit' className='py-2 px-5 bg-green-500 text-white rounded-lg'>Submit</button>
                <Link to={'/gallery'} className='py-3 px-5 bg-slate-500 text-white rounded-lg'>Back</Link>
            </div>
        </form>
    </div>
  )
}

export default AddImage
