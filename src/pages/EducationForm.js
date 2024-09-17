import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/RealEstateForm.css';

function EducationForm() {

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
    <div>
      <form onSubmit={onSubmit} className=''>
          <div className='flex flex-row justify-between items-center'>
            <h1 className=' mb-2 text-[30px] font-bold text-gray-700'>Education Consult</h1>
            <div>
              <button onClick={()=>navigate('/home')} className='w-[100px] bg-green-500 text-[20px] font-bold text-white rounded-lg py-1  hover:bg-green-400 active:bg-green-800'>Back</button>
            </div>
            
          </div>
          
          <div className='flex flex-col gap-5'>
            <div className='flex flex-col'>
              <label>Upoad Flyer</label>
              <input type='file' onchange={handleChange} name='flyer' accept='.jpg, .jpeg, .png'/>
            </div>
            <div className='flex flex-col'>
              <label>General Admission</label>
              <textarea onchange={handleChange} name='price' className='mb-[15px]' type='text' placeholder='Price'  />
            </div>
            
          </div>
          
          <div className='flex justify-end'>
            <button className='w-[200px] bg-green-500 text-[20px] font-bold text-white rounded-lg py-2 ml-[300px] hover:bg-green-400 active:bg-green-800'>Submit</button>
          </div>
      </form>
    </div>
  )
}

export default EducationForm
