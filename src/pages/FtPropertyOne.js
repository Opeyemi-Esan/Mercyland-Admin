import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FtPropertyOne() {

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
      <form className='flex flex-col gap-5'>
        <div className='flex flex-row justify-between items-center'>
          <h1 className=' mb-2 text-[30px] font-bold text-gray-700'>Featured Property 1</h1>
          <div>
            <button onClick={()=>navigate('/home')} className='w-[100px] bg-green-500 text-[20px] font-bold text-white rounded-lg py-1  hover:bg-green-400 active:bg-green-800'>Back</button>
          </div>
        </div>

        <div className='flex flex-row flex-wrap gap-5'>
          <div className='flex flex-col'>
            <label>Upoad Flyer</label>
            <input type='file' onchange={handleChange} name='flyer' accept='.jpg, .jpeg, .png'/>
          </div>

          <div className='flex flex-col'>
            <label>Title</label>
            <input type='text' onchange={handleChange} name='title'/>
          </div>

          <div className='flex flex-col'>
            <label>Description</label>
            <input type='text' onchange={handleChange} name='description'/>
          </div>

          <div className='flex flex-col'>
            <label>Detail Title</label>
            <input type='text' onchange={handleChange} name='detail_title'/>
          </div>

          <div className='flex flex-col'>
            <label>Detail Description</label>
            <input type='text' onchange={handleChange} name='detail_description'/>
          </div>

          <div className='flex flex-col'>
            <label>Bedroom</label>
            <input type='number' onchange={handleChange} name='bedroom'/>
          </div>

          <div className='flex flex-col'>
            <label>Bathroom</label>
            <input type='number' onchange={handleChange} name='bathroom'/>
          </div>

          <div className='flex flex-col'>
            <label>Area View</label>
            <input type='text' onchange={handleChange} name='area_view'/>
          </div>
        </div>
        

        <div className='flex justify-start'>
            <button className='w-[200px] bg-green-500 text-[20px] font-bold text-white rounded-lg py-2 hover:bg-green-400 active:bg-green-800'>Submit</button>
          </div>
      </form>
    </div>
  )
}

export default FtPropertyOne
