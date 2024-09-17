import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import '../Style/LoginSignUp.css';
import axios from 'axios';
import useAuth from '../hooks/useAuth';
//import DarkMode from '../Components/DarkMode';

function Login() {

    const {setAuth} = useAuth();

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: '',
    });
    const [loginErrors, setLoginErrors] = useState({});

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginForm({ ...loginForm, [name]: value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const LoginNewErrors = {};
        if (!loginForm.email) {
            LoginNewErrors.email = 'Email is required';
        }
        if (!loginForm.password) {
            LoginNewErrors.password = 'Password is required';
        }
        setLoginErrors(LoginNewErrors);

        if (Object.keys(LoginNewErrors).length === 0) {
            
               navigate('/home');
              };



            //navigate('/admin/dashboard');
           //axios.post('http://localhost:3000/user', loginForm)
           //    .then(response => {
           //        if (response.data === 'success') {
           //            // Redirect to /dashboard
           //            navigate('/dashboard');
           //        } else {
           //            console.log('Invalid login details');
           //        }
           //    })
           //    .catch(error => {
           //        console.error(error);
           //    });
        
    
    };

    const PasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='login mx-auto py-[100px] flex flex-row gap-20 justify-center items-center h-[100vh] px-[200px]'>
            <div className='login mx-auto py-[100px] transition-all'>
                <form onSubmit={onSubmit} className='flex flex-col gap-5 justify-center items-center border-2 border-slate-700 py-10 px-20 rounded-2xl shadow-1 bg-slate-300'>
                    <h1 className='font-bold text-[25px] text-slate-700'>Login</h1>

                    <div>
                        <input name='email' value={loginForm.email} onChange={handleLoginChange} className='py-2 px-5 rounded-lg outline-none' type='email' placeholder='Email' />
                        {loginErrors.email && <p className='text-[12px] text-red-600 mb-0'>{loginErrors.email}</p>}
                    </div>

                    <div>
                        <div className='py-2 px-5 rounded-lg lg:w-[300px] flex flex-row gap-4  bg-white justify-between items-center outline-none'>
                            <input name='password' value={loginForm.password} onChange={handleLoginChange} className='outline-none' type={showPassword ? 'text' : 'password'} placeholder='Password' />
                            <FaEye onClick={PasswordVisibility} className='cursor-pointer' />

                        </div>
                        {loginErrors.password && <p className='text-[12px] text-red-600 mb-0'>{loginErrors.password}</p>}
                    </div>

                    <button type='submit' className='py-2 px-5 bg-slate-700 active:bg-green-700 hover:bg-slate-600 rounded-lg text-white max-w-[100px]'>Login</button>
                    <p>Forgot password<span className='cursor-pointer text-blue-700 ml-2 italic'>Click here</span></p>
                </form>
            </div>
        </div>
    );
}

export default Login;