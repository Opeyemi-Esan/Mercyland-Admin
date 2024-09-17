import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaHouseDamage } from "react-icons/fa";

function FeaturedProp() {

  const navigate = useNavigate();

  return (
    <div className='px-5 h-[200px] shadow-lg hover:shadow-xl flex justify-center items-center gap-2'>
      <div onClick={()=>navigate('/featuredproperties')} className='flex flex-col gap-2 justify-center px-2 items-center cursor-pointer'>
        <FaHouseDamage className='text-[#b507cc] text-[50px] hover:text-[#bb53c9]' />
        <p className='text-[15px] font-bold text-gray-700 text-center'>Featured Property</p>
      </div>
    </div>
  )
}

export default FeaturedProp
