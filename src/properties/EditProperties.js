import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function EditProperties() {

  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const {id} = useParams();

  const [formData, setFormData] = useState({
    category: '',
    title: '',
    description: '',
    image: '',
    country: '',
    address: '',
    bedrooms: '',
    bathrooms: '',
    surface: '',
    year: '',
    price: '' })


const handleUpdate = (e) => {
  e.preventDefault();
  axios.put('http://localhost:3000/property/' + id , formData)
  .then(res => {
    console.log(res);
    navigate('/properties');
  })
  .catch(err => console.log(err));
}

  useEffect(() => {
    axios.get('http://localhost:3000/property/' + id)
    .then(res => setFormData(res.data))
    .catch(err => console.log(err)); 
  }, []);


  return (
    <div className='flex justify-center items-center'>
      <div className='px-5 py-5 border-2 rounded-lg flex flex-col mx-auto gap-5 bg-slate-100'>
        <div className='text-center text-[20px] text-gray-600 bg-slate-200 rounded-md shadow-md font-bold py-2'>
          <h1>Edit Property</h1>
        </div>

        <form onSubmit={handleUpdate} className='flex flex-row flex-wrap gap-10 py-5'>
          <div className='flex flex-col'>
          <label>Category</label>
          <input value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} type='text' name='category' placeholder='category of property' />
          </div> 

          <div className='flex flex-col'>
          <label>Title</label>
          <input value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} type='text' name='title' placeholder='title of property' />
          </div>

          <div className='flex flex-col'>
          <label>Description</label>
          <input value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} type='text' name='description' placeholder='description' />
          </div>

          <div className='flex flex-col'>
          <label>State</label>
          <input value={formData.state} onChange={e => setFormData({...formData, country: e.target.value})} type='text' name='state' placeholder='state' />
          </div>

          <div className='flex flex-col'>
          <label>Address</label>
          <input value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} type='text' name='address' placeholder='address' />
          </div>

          <div className='flex flex-col'>
          <label>Bedrooms</label>
          <input value={formData.bedrooms} onChange={e => setFormData({...formData, bedrooms: e.target.value})} type='text' name='bedrooms' placeholder='bedrooms' />
          </div>

          <div className='flex flex-col'>
          <label>Bathrooms</label>
          <input value={formData.bathrooms} onChange={e => setFormData({...formData, bathrooms: e.target.value})} type='text' name='bathrooms' placeholder='bathrooms' />
          </div>

          <div className='flex flex-col'>
          <label>Surface</label>
          <input value={formData.surface} onChange={e => setFormData({...formData, surface: e.target.value})} type='text' name='surface' placeholder='surface' />
          </div>

          <div className='flex flex-col'>
          <label>Year</label>
          <input value={formData.year} onChange={e => setFormData({...formData, year: e.target.value})} type='text' name='year' placeholder='year' />
          </div>

          <div className='flex flex-col'>
          <label>Price</label>
          <input value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} type='text' name='price' placeholder='price' />
          </div>

          <div className='flex flex-col'>
          <label>Image</label>
          <input onChange={e => setFormData({...formData, image: e.target.files[0]})} type='file' name='image' />
          </div>

          <div className='flex flex-row gap-2 justify-center items-center bg-slate-200 px-10 py-5 rounded-lg'>
            <button className='px-2 py-1 rounded-md bg-green-500 text-white'>Update</button>
            <Link className='px-2 py-1 rounded-md bg-red-500 text-white' to={'/properties'}>Cancel</Link>
          </div>
        </form>

      </div>
    </div>
  )
}

export default EditProperties
