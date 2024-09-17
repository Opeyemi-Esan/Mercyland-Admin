import React, { useContext, useEffect, useRef, useState } from 'react';  
import AuthContext from '../contex/AuthProvider';  
import axios from '../api/axios';  
import '../Style/LoginSignUp.css';  
import { useNavigate } from 'react-router-dom';

const LOGIN_URL = 'https://localhost:7014/api/Users/Login';  

const LoginSignUp = () => {  
    const { setAuth } = useContext(AuthContext);  
    const userRef = useRef();  
    const errRef = useRef();  

    const navigate = useNavigate();

    const [form, setForm] = useState({  
        email: '',  
        password: ''  
    });  

    useEffect(() => {  
        userRef.current.focus();  
    }, []);  

   

    const handleChange = (e) => {  
        const { name, value } = e.target;  
        setForm((prevForm) => ({ ...prevForm, [name]: value }));  
    };  

    const handleSubmit = async (e) => {  
        e.preventDefault();  

          try{
            const response = await axios.post('https://localhost:7014/api/Users/Login', {
              email: form.email, 
              password: form.password
            });
            if(form.password != response.data.password && form.email != response.data.email){
              console.log('Enter valid credentials')  
            } else{
                navigate('/dashboard');
              console.log('Login Successful', response.data);
            };
          } catch (err) {
            console.error('Login Failed', err);
          }
    };  

    return (  
        <section className='login mx-auto py-[100px] flex flex-row gap-20 justify-center items-center h-[100vh] px-[200px]'>  
            <form onSubmit={handleSubmit} className='flex flex-col gap-5 justify-center items-center border-2 border-slate-700 py-10 px-20 rounded-2xl shadow-1 bg-slate-300'>  
                <h1 className='font-bold text-[25px] text-slate-700'>Sign In</h1>  
                  
                
                <div className='flex flex-col'>  
                    <label htmlFor='email' className=' font-bold'>Email:</label>  
                    <input   
                        type='text'  
                        id='email'  
                        ref={userRef}  
                        autoComplete='off'  
                        onChange={handleChange}  
                        name='email'  
                        value={form.email}  
                        required  
                        className='py-2 px-5 rounded-lg outline-none'  
                    />  
                </div>  
                
                <div className='flex flex-col'>  
                    <label htmlFor='password' className=' font-bold'>Password:</label>  
                    <input   
                        type='password'  
                        id='password'  
                        onChange={handleChange}  
                        name='password'  
                        value={form.password}  
                        required  
                        className='py-2 px-5 rounded-lg'  
                    />  
                </div>  
                
                <button type="submit" className='py-2 px-5 bg-slate-700 active:bg-green-700 hover:bg-slate-600 rounded-lg text-white max-w-[100px]'>Sign In</button>  
                
       
            </form>  
        </section>  
    );  
};  

export default LoginSignUp;