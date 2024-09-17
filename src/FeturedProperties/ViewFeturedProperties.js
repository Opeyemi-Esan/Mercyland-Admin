import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BiBed, BiBath, BiArea } from 'react-icons/bi';
import {TiTimes} from 'react-icons/ti';
import { TiArrowBackOutline } from "react-icons/ti";

function ViewFeturedProperties() {
const [data, setData] = useState([]);
  
const navigate = useNavigate();

const {id} = useParams();
  
useEffect(() => {
  axios.get('http://localhost:3000/property/' + id)
  .then(res => setData(res.data))
  .catch(err => console.log(err)); 
}, []);

  return (
    <div className='py-10'>
      <div className='bg-slate-100 py-10 px-10 mx-auto rounded-md shadow-md'>
        <div className='flex justify-between px-10'>
          <h1 className='font-bold text-[30px] text-gray-700 mb-10 text-center'>{data.title}</h1>
        </div>
        <div className='flex flex-row gap-10 items-center justify-center'>
          <div className='w-[1000px] shadow-lg rounded-bl-[50px]'>
            <img className='w-[100%] rounded-tr-[50px] rounded-bl-[50px]' src={data.image}  alt={data.image} />
          </div>

          <div className='flex flex-col gap-5'>
            <h1 className='text-[25px] font-bold text-gray-700'>{data.country}</h1>
            <p className=' border-b-[4px]'><span className='text-[18px] text-gray-700 font-semibold'>Description:</span> {data.description}</p>
            <p className=' border-b-[4px]'><span className='text-[18px] text-gray-700 font-semibold'>Address:</span> {data.address}</p>
            <p className=' border-b-[4px]'><span className='text-[18px] text-gray-700 font-semibold'>Type of Property:</span> {data.type}</p>
            <p className='text-[20px] font-bold text-gray-700 border-b-[4px]'><span>Price:</span> {data.price}</p>
            
            <div className='flex flex-row gap-5 border-b-[4px]'>
              <div className='flex flex-row gap-2'>
                <BiBed />
                <p>{data.bedrooms}</p>
              </div>
              <div className='flex flex-row gap-2'>
                <BiBath />
                <p>{data.bathrooms}</p>
              </div>
              <div className='flex flex-row gap-2'>
                <BiArea />
                <p>{data.surface}</p>
              </div>
            </div>

            <div className='flex flex-row gap-2'>
              <Link to={'/featuredproperties'} className='px-4 py-2 rounded-md bg-red-500 text-white font-bold'>Back</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewFeturedProperties
