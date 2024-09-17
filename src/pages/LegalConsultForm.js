import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function LegalConsultForm() {

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
            <h1 className=' mb-2 text-[30px] font-bold text-gray-700'>Legal Consult</h1>
            <div>
              <button onClick={()=>navigate('/home')} className='w-[100px] bg-green-500 text-[20px] font-bold text-white rounded-lg py-1  hover:bg-green-400 active:bg-green-800'>Back</button>
            </div>
            
          </div>
          
          
            <div className='flex flex-col mb-5'>
              <label>Upoad Flyer</label>
              <input type='file' onchange={handleChange} name='flyer' accept='.jpg, .jpeg, .png'/>
            </div>
          
          <div className='flex justify-start'>
            <button className='w-[200px] bg-green-500 text-[20px] font-bold text-white rounded-lg py-2 hover:bg-green-400 active:bg-green-800'>Submit</button>
          </div>
      </form>
    </div>
  )
}

export default LegalConsultForm
