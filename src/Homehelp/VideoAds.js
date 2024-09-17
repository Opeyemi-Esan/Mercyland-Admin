import React from 'react'
import { FaPhotoVideo } from "react-icons/fa";

function VideoAds() {
  return (
    <div className='w-[300px] h-[200px] shadow-lg hover:shadow-xl flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center w-[180px] px-2 py-1 gap-2'>
        <div className='slider'>
          <button>
          <FaPhotoVideo />
          <input type='file' id='video_ads' accept='.mp4'/>
        </button>
        </div>
        
        <div className='flex flex-row gap-1'>
          <button className='px-2 py-1 bg-green-500 rounded-lg text-white text-[12px] font-bold'>Upload</button>
          <button className='px-2 py-1 bg-red-500 rounded-lg text-white text-[12px] font-bold'>Delete</button>
        </div>
        <p>Video Ads</p>
      </div>
    </div>
  )
}

export default VideoAds
