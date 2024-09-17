import React from 'react'
import { TbBuildingEstate } from "react-icons/tb";
import { GiFarmTractor } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';

function OurEstate() {

  const navigate = useNavigate();

  return (
    <div className='w-[300px] h-[200px] shadow-lg hover:shadow-xl flex justify-center items-center gap-5'>
      <div onClick={()=>navigate('/delightestate')} className='flex flex-col gap-2 justify-center px-2 items-center cursor-pointer'>
        <TbBuildingEstate className='text-green-500 text-[50px] hover:text-[#71d890]' />
        <p className='text-[15px] font-bold text-gray-700 text-center'>Delight Estate</p>
      </div>

      <div onClick={()=>navigate('/farmestate')} className='flex flex-col gap-2 justify-center px-2 items-center cursor-pointer'>
        <GiFarmTractor className='text-green-500 text-[50px] hover:text-[#71d890]' />
        <p className='text-[15px] font-bold text-gray-700 text-center'>Farm Estate</p>
      </div>
    </div>
  )
}

export default OurEstate
