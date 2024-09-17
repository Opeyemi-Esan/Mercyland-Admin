import React, { useState } from 'react';  
    import { Link, useNavigate } from 'react-router-dom';  
    import axios from 'axios';  

    function AddProperties() {  
        const navigate = useNavigate();  

        const [formData, setFormData] = useState({  
            category: '',  
            title: '',  
            description: '',  
            image: null,  
            country: '',  
            address: '',  
            bedrooms: '',  
            bathrooms: '',  
            surface: '',  
            year: '',  
            price: '',  
        });  

        const handleImageChange = (e) => {  
            const file = e.target.files[0];  
            setFormData({ ...formData, image: file });  
        };  

        const handleSubmit = (e) => {  
            e.preventDefault();  

            const formDataToSend = new FormData();  
            for (const key in formData) {  
                formDataToSend.append(key, formData[key]);  
            }  

            axios.post('http://localhost:81/api/Property/add-property', formDataToSend)  
                .then(res => {  
                    console.log(res);  
                    navigate('/properties');  
                })  
                .catch(err => console.log(err));  
        };  

        return (  
            <div className='flex justify-center items-center'>  
                <div className='px-5 py-5 border-2 rounded-lg flex flex-col mx-auto gap-5 bg-slate-100'>  
                    <div className='text-center text-[20px] text-gray-600 bg-slate-200 rounded-md shadow-md font-bold py-2'>  
                        <h1>Add Property</h1>  
                    </div>  

                    <form onSubmit={handleSubmit} className='flex flex-row flex-wrap gap-10 py-5'>  
                        <div className='flex flex-col'>  
                            <label>Category</label>  
                            <input onChange={e => setFormData({ ...formData, category: e.target.value })} type='text' name='category' placeholder='category of property' />  
                        </div>  

                        <div className='flex flex-col'>  
                            <label>Title</label>  
                            <input onChange={e => setFormData({ ...formData, title: e.target.value })} type='text' name='title' placeholder='title of property' />  
                        </div>  

                        <div className='flex flex-col'>  
                            <label>Description</label>  
                            <input onChange={e => setFormData({ ...formData, description: e.target.value })} type='text' name='description' placeholder='description' />  
                        </div>  

                        <div className='flex flex-col'>  
                            <label>Country</label>  
                            <input onChange={e => setFormData({ ...formData, country: e.target.value })} type='text' name='country' placeholder='country' />  
                        </div>  

                        <div className='flex flex-col'>  
                            <label>Address</label>  
                            <input onChange={e => setFormData({ ...formData, address: e.target.value })} type='text' name='address' placeholder='address' />  
                        </div>  

                        <div className='flex flex-col'>  
                            <label>Bedrooms</label>  
                            <input onChange={e => setFormData({ ...formData, bedrooms: e.target.value })} type='text' name='bedrooms' placeholder='bedrooms' />  
                        </div>  

                        <div className='flex flex-col'>  
                            <label>Bathrooms</label>  
                            <input onChange={e => setFormData({ ...formData, bathrooms: e.target.value })} type='text' name='bathrooms' placeholder='bathrooms' />  
                        </div>  

                        <div className='flex flex-col'>  
                            <label>Surface</label>  
                            <input onChange={e => setFormData({ ...formData, surface: e.target.value })} type='text' name='surface' placeholder='surface' />  
                        </div>  

                        <div className='flex flex-col'>  
                            <label>Year</label>  
                            <input onChange={e => setFormData({ ...formData, year: e.target.value })} type='text' name='year' placeholder='year' />  
                        </div>  

                        <div className='flex flex-col'>  
                            <label>Price</label>  
                            <input onChange={e => setFormData({ ...formData, price: e.target.value })} type='text' name='price' placeholder='price' />  
                        </div>  

                        <div className='flex flex-col'>  
                            <label>Image</label>  
                            <input onChange={handleImageChange} type='file' name='image' />  
                        </div>  

                        <div className='flex flex-row gap-2 justify-center items-center bg-slate-200 px-10 py-5 rounded-lg'>  
                            <button className='px-2 py-1 rounded-md bg-green-500 text-white'>Submit</button>  
                            <Link className='px-2 py-1 rounded-md bg-red-500 text-white' to={'/properties'}>Cancel</Link>  
                        </div>  
                    </form>  
                </div>  
            </div>  
        );  
    }  

    export default AddProperties;  
