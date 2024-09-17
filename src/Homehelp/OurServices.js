import React from 'react'
import SchoolIcon from '@mui/icons-material/School';
import BalanceIcon from '@mui/icons-material/Balance';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import '../Style/Ourservices.css';
import { useNavigate } from 'react-router-dom';

function OurServices() {

  const navigate = useNavigate();

  return (
    <div className='w-[300px] h-[200px] shadow-lg hover:shadow-xl flex flex-row gap-1 justify-center items-center px-2'>
      <div onClick={()=>navigate('/realestateform')} className='icon flex flex-col px-2 justify-center items-center cursor-pointer'>
        <CorporateFareIcon className='text-green-500 hover:text-[#71d890]' />
        <h1 className='font-bold text-[15px] text-gray-700 text-center'>Real Estate</h1>
      </div>

      <div onClick={()=>navigate('/educationform')} className='icon flex flex-col px-2 justify-center items-center cursor-pointer'>
        <SchoolIcon className='text-green-500 hover:text-[#71d890]' />
        <h1 className='font-bold text-[15px] text-gray-700 text-center'>Education Consult</h1>
      </div>

      <div onClick={()=>navigate('/legalconsultform')} className='icon flex flex-col px-2 justify-center items-center cursor-pointer'>
        <BalanceIcon className='text-green-500 hover:text-[#71d890]' />
        <h1 className='font-bold text-[15px] text-gray-700 text-center'>Legal Consult</h1>
      </div>
    </div>
  )
}

export default OurServices
