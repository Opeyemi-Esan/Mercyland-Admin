import React, { useState } from 'react'
import '../Style/RealEstateForm.css';
import { useNavigate } from 'react-router-dom';

function RealEstateForm() {

  const navigate = useNavigate();

  const [form, setForm] = useState();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm((prev) => {
      return {...prev, [name]: value}
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  }

  return (
    <div className=''>
      
      <form onSubmit={onSubmit} className=''>
          <div className='flex flex-row justify-between items-center'>
            <h1 className=' mb-2 text-[30px] font-bold text-gray-700'>Real Estate</h1>
            <div>
              <button onClick={()=>navigate('/home')} className='w-[100px] bg-green-500 text-[20px] font-bold text-white rounded-lg py-1  hover:bg-green-400 active:bg-green-800'>Back</button>
            </div>
            
          </div>
          
          <div className='flex flex-row gap-5'>
            <div className='flex flex-col'>
              <label>Price</label>
              <input onchange={handleChange} name='price' className='mb-[15px]' type='text' placeholder='Price'  />
            </div>
            <div className='flex flex-col'>
              <label>Upoad Flyer</label>
              <input type='file' onchange={handleChange} name='flyer' accept='.jpg, .jpeg, .png'/>
            </div>
          </div>
          
          
          <h3>Payment Plan</h3>

          <div className='flex flex-row flex-wrap gap-5'>
            <div className='flex flex-col'>
              <label>Outright Payment</label>
              <input onchange={handleChange} name='Outright Payment' type='text' placeholder='input texts' />
            </div>
            <div className='flex flex-col'>
              <label>Monthly Payment for 12 months</label>
              <input onchange={handleChange} name='Monthly Payment for 12 months' type='text' placeholder='input texts' />
            </div>
            <div className='flex flex-col'>
              <label>Monthly Payment for 24 months</label>
              <input onchange={handleChange} name='Outright Payment' type='text' placeholder='input texts' />
            </div>
            <div className='flex flex-col'>
              <label>Monthly Payment for 54 months</label>
              <input onchange={handleChange} name='Outright Payment' type='text' placeholder='input texts' />
            </div>
            <div className='flex flex-col'>
              <label>Monthly Payment for 8 months</label>
              <input onchange={handleChange} name='Outright Payment' type='text' placeholder='input texts' />
            </div>
            <div className='flex flex-col'>
              <label>Monthly Payment for 45 months</label>
              <input onchange={handleChange} name='Outright Payment' className='mb-[15px]' type='text' placeholder='input texts' />
            </div>
          </div>
          
          <h3>Terms and Conditions Apply</h3>
          <div className='flex flex-row flex-wrap gap-5 mb-5'>
            <div className='flex flex-col'>
              <label>Deeds of Assignment</label>
              <input onchange={handleChange} name='Outright Payment' type='text' placeholder='input texts' />
            </div>
            <div className='flex flex-col'>
              <label>Survey Fees</label>
              <input onchange={handleChange} name='Outright Payment' type='text' placeholder='input texts' />
            </div>
            <div className='flex flex-col'>
              <label>Survey in Business Name</label>
              <input onchange={handleChange} name='Outright Payment' type='text' placeholder='input texts' />
            </div>
            <div className='flex flex-col'>
              <label>Development Fees</label>
              <input onchange={handleChange} name='Outright Payment'  type='text' placeholder='input texts' />
            </div>
            <div className='flex flex-col'>
              <label>Inpection Number</label>
            <input onchange={handleChange} name='Outright Payment' type='number' placeholder='input number' />
            </div>
          </div>
          
          <div className='flex justify-end'>
            <button className='w-[200px] bg-green-500 text-[20px] font-bold text-white rounded-lg py-2 ml-[300px] hover:bg-green-400 active:bg-green-800'>Submit</button>
          </div>
          
      </form>

      
    </div>
  )
}

export default RealEstateForm
