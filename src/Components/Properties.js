import React, {useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';



function Properties() {

  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:81/api/Property/get-all-properties')
    .then(res => setData(res.data))
    .catch(err => console.log(err)); 
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm('Are you sure you want to delete this property?');
    if(confirm) {
      axios.delete('http://localhost:81/api/Property/delete-property/' + id)
      .then(res => {
        window.location.reload();
      }) .catch(err => console.log(err));
    }
  }

  return (
    <div className=''>
      <div>
        <h1 className='text-[25px] font-bold'>Property Page</h1>
      </div>

      <Link to={'/addproperties'} className='mt-5 flex flex-row justify-between items-center text-green-500 px-10 py-3 shadow-lg bg-slate-100'>
        <h1 className='text-[18px] font-bold'>Add Property</h1>
        <p className='text-[25px] font-bold'>+</p>
      </Link>

      <div className='py-10 flex flex-row flex-wrap gap-10'>
        {data.map((d, i) => {
         return (
          <div className='flex flex-col gap-5 w-[300px] mx-auto bg-slate-100 py-5 px-5 rounded-tl-1xl' key={i}>
              <div className='w-[250px] mx-auto'>
                <img className='w-[100%] rounded-tl-lg rounded-tr-lg' src={d.image} alt='image' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h1 className='font-bold text-[20px]'>{d.title}</h1>
                <p>{d.address}</p>
              </div>

              <div className='flex flex-row gap-2 px-10 py-3 bg-slate-200 items-center justify-center rounded-lg'>
                <Link className='px-2 py-1 bg-slate-500 text-white rounded-lg' to={`/viewproperties/${d.propertyId}`}>View</Link>
                <Link className='px-2 py-1 bg-green-500 text-white rounded-lg' to={`/editproperties/${d.propertyId}`}>Edit</Link>
                <button onClick={ e => handleDelete(d.propertyId) } className='px-2 py-1 bg-red-500 text-white rounded-lg'>Delete</button>
              </div>
          </div>
         )
        })}
      </div>

    </div>
  )
}

export default Properties
