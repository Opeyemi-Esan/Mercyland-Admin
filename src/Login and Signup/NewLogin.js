import React, { useState, useEffect } from 'react';  
import { Link, useNavigate } from 'react-router-dom';  
import '../Style/LoginSignUp.css';  
import axios from 'axios';

function Login() {  
    const navigate = useNavigate();  
    const [email, setEmail] = useState('');  
    const [password, setPassword] = useState('');  
    const [errorMessage, setErrorMessage] = useState('');
    
    useEffect(() => {
        axios.get('https://localhost:7014/api/Users/GetUsers')
        .then(res => console.log(res))
        .catch(err => console.log(err)); 
      }, []);

    const onSubmit = async (e) => {  
        e.preventDefault();  
        console.log(email, password);  

        let item = { email, password };  

        try {  
            let response = await fetch("http://localhost:7014/api/Users/Login", {  
                method: 'POST',  
                headers: {  
                    "Content-Type": "application/json",  
                    "Accept": 'application/json'  
                },  
                body: JSON.stringify(item)  
            });  

            if (!response.ok) {  
                throw new Error(`HTTP error! Status: ${response.status}`);  
            }  

            let result = await response.json();  
            console.log(result);  
            // Reset fields upon successful login  
            setEmail('');  
            setPassword('');  
            navigate('/dashboard');  

        } catch (error) {  
            console.error('Fetch error:', error);  
            setErrorMessage('Login failed. Please check your credentials.');  
        }  
    };  

    return (  
        <div className='login mx-auto py-[100px] flex flex-row gap-20 justify-center items-center h-[100vh] px-[200px]'>  
            <div className='login mx-auto py-[100px] transition-all'>  
                <form onSubmit={onSubmit} className='flex flex-col gap-5 justify-center items-center border-2 border-slate-700 py-10 px-20 rounded-2xl shadow-1 bg-slate-300'>  
                    <h1 className='font-bold text-[25px] text-slate-700'>Login</h1>  

                    {errorMessage && <p className="text-red-500">{errorMessage}</p>}  

                    <div>  
                        <input name='email' onChange={(e) => setEmail(e.target.value)} className='py-2 px-5 rounded-lg outline-none' type='email' placeholder='Email' />  
                    </div>  

                    <div>  
                        <div className='py-2 px-5 rounded-lg lg:w-[300px] flex flex-row gap-4  bg-white justify-between items-center outline-none'>  
                            <input name='password' onChange={(e) => setPassword(e.target.value)} className='outline-none' type='password' placeholder='Password' />  
                        </div>  
                    </div>  

                    <button type='submit' className='py-2 px-5 bg-slate-700 active:bg-green-700 hover:bg-slate-600 rounded-lg text-white max-w-[100px]' disabled={!email || !password}>  
                        Login  
                    </button>  
                    <p>Forgot password<span className='cursor-pointer text-blue-700 ml-2 italic'>Click here</span></p>  
                </form>  
            </div>   
        </div>  
    );  
}  

export default Login;