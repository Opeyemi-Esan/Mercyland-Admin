import React from 'react'
import { IoMdPhotos } from "react-icons/io";
import '../Style/HomeSlider.css';

function HomeSlider() {
  return (
    <div>
      <div className='w-[300px] h-[200px] shadow-lg hover:shadow-xl flex flex-row gap-2 justify-center items-center'>
        <div className='flex flex-col justify-center items-center w-[180px] px-2 py-1 gap-2'>
          <div className='slider'>
            <button>
            <IoMdPhotos />
            <input type='file' multiple accept='.jpeg, .jpg, .png' />
          </button>
          </div>
          
          <div className='flex flex-row gap-1'>
            <button className='px-2 py-1 bg-green-500 rounded-lg text-white text-[12px] font-bold'>Upload</button>
            <button className='px-2 py-1 bg-red-500 rounded-lg text-white text-[12px] font-bold'>Delete</button>
          </div>
          <p>For Desktop View</p>
        </div>


        <div className='flex flex-col justify-center items-center w-[180px] px-2 py-1 gap-2'>
          <div className='slider'>
            <button>
            <IoMdPhotos />
            <input type='file' multiple accept='.jpeg, .jpg, .png' />
          </button>
          </div>
          
          <div className='flex flex-row gap-1'>
            <button className='px-2 py-1 bg-green-500 rounded-lg text-white text-[12px] font-bold'>Upload</button>
            <button className='px-2 py-1 bg-red-500 rounded-lg text-white text-[12px] font-bold'>Delete</button>
          </div>
          <p>For Mobile View</p>
        </div>
      </div>
      
    </div>
  )
}

export default HomeSlider
