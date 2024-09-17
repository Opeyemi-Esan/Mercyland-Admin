import React, { useState, useEffect } from 'react';  
import { Link, useNavigate } from 'react-router-dom';  
import '../Style/LoginSignUp.css';  
import axios from 'axios';
import { FaHouseDamage } from "react-icons/fa";

function ApiTest () {
const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://localhost:7014/api/Users/GetUsers')
    .then(res => console.log(res))
    .catch(err => console.log(err)); 
  }, []);

  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {  
    const { name, value } = e.target;  
    setForm(prevForm => ({ ...prevForm, [name]: value }));  
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try{
      const response = await axios.post('https://localhost:7014/api/Users/Login', {
        email: form.email, 
        password: form.password
      });
      console.log('Login Successful', response.data);
    } catch (err) {
      console.error('Login Failed', err);
    }
  } 
  
  return (
    <div className='px-5 h-[200px] shadow-lg hover:shadow-xl flex justify-center items-center gap-2'>
      <div onClick={()=>navigate('/apitest')} className='flex flex-col gap-2 justify-center px-2 items-center cursor-pointer'>
       <form onSubmit={handleSubmit}>
        <input 
        type='email'
        name = 'email'
        value = {form.email}
        placeholder='email' 
        onChange={handleChange} 
        required />
        <input 
        type='password' 
        name = 'password'
        value = {form.password}
        placeholder='password' 
        onChange={handleChange} 
        required />
        <button type='submit'>Login</button>
       </form>
      </div>
    </div>
  )
}
export default ApiTest;