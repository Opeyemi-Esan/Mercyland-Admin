import React from 'react'
import Logo from '../assets/MERCYLAND_logo.png';
import { Link, Outlet } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineCameraAlt } from "react-icons/md";
import '../Style/Header.css';

function Header() {
  return (
    <div className=''>
      <div className='bg-green-500 text-white shadow-lg '>
        <div className='mr-[50px] ml-[10px] flex flex-row justify-between items-center h-[50px]'>
          <div className='w-[150px]'>
            <Link to={'/'}><img className='w-[100%]' src={Logo} /></Link>
          </div>

          <div>
            <h1 className='text-[16px] font-bold'>MERCYLAND GROUP ADMIN PANEL</h1>
          </div>

          <div className='user flex flex-col items-center'>
            <button>
              <FaRegUserCircle />
              <input type='file' />
            </button>
          </div>
        </div>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
    
  )
}

export default Header
