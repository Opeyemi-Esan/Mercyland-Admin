import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Style/LoginSignUp.css'
import axios from 'axios';

function SignUp() {
  const navigate = useNavigate();

    const [form, setForm] = useState({
        userName: '',
        email: '',
        password: '',
        reEnterPassword: '',
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value,});
    };

    const handleClick = (e) => {
        e.preventDefault();
        const newError = {};
        if (!form.userName) {
            newError.userName = 'Name required';
        }
        if (!form.email) {
            newError.email = 'Email required';
        }
        if (!form.password) {
            newError.password = 'Password required';
        }
        if (form.password !== form.reEnterPassword) {
            newError.reEnterPassword = 'Password do not match'
        }

        axios.post('http://localhost:3000/property', form)
        .then(res => {
          console.log(res);
          navigate('/login');
        })
        .catch(err => console.log(err));


        setErrors(newError);

        if(Object.keys(newError).length=== 0) {
            console.log(form);
        }
    }


  return (
    <div className='login mx-auto py-[80px] backGround flex flex-row gap-20 justify-between items-center h-[100vh] px-[200px]'>
      <form onSubmit={handleClick} className='flex flex-col gap-5 justify-center items-center border-2 border-slate-700 py-10 px-10 rounded-2xl shadow-1 bg-slate-300'>
        <h1 className='font-bold text-[25px] text-slate-700'>Sign Up</h1>
        
        <div>
          <input name='userName' value={form.userName} onChange={handleChange} className='py-2 px-5 rounded-lg outline-none lg:w-[300px]' type='text' placeholder='Name' />
          {errors.userName && <p className='text-[12px] text-red-600'>{errors.userName}</p>}  
        </div>
        
        <div>
          <input name='email' value={form.email} onChange={handleChange} className='py-2 px-5 rounded-lg outline-none lg:w-[300px]' type='email' placeholder='Email' />
          {errors.email && <p className='text-[12px] text-red-600'>{errors.email}</p>}  
        </div>
        
        <div>
          <input name='password' value={form.password} onChange={handleChange} className='py-2 px-5 rounded-lg outline-none lg:w-[300px]' type='password' placeholder='Password' /> 
          {errors.password && <p className='text-[12px] text-red-600'>{errors.password}</p>} 
        </div>
        
        <div>
          <input name='reEnterPassword' value={form.reEnterPassword} onChange={handleChange} className='py-2 px-5 rounded-lg outline-none lg:w-[300px]' type='password' placeholder='Confirm password' />
          {errors.reEnterPassword && <p className='text-[12px] text-red-600'>{errors.reEnterPassword}</p>}  
        </div>
        
        <button type='submit' className='py-2 px-5 bg-slate-700 rounded-lg text-white max-w-[100px] hover:bg-slate-600 active:bg-green-700'>Sign Up</button>
        <p>Already registered?<span className='text-blue-500 italic ml-2'><Link to='/login'>Login</Link></span></p>
      </form>
      
      
      
    </div>
  )
}

export default SignUp
