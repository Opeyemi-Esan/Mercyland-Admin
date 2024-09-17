import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../Style/Sidebar.css';
import { FaBars, FaUser, FaHome, FaBlogger } from 'react-icons/fa';
import { MdDashboard, MdOutlineHomeWork, MdContactSupport } from "react-icons/md";
import { GrGallery } from "react-icons/gr";

function Sidebar () {

const menuBar = [
  {
    icon: <MdDashboard/>,
    name: 'Dashboard',
    path: '/dashboard'
  },
  {
    icon: <FaHome/>,
    name: 'Home',
    path: '/home'
  },{
    icon: <FaUser/>,
    name: 'About',
    path: '/about'
  },{
    icon: <MdOutlineHomeWork/>,
    name: 'Properties',
    path: '/properties'
  },{
    icon: <GrGallery/>,
    name: 'Gallery',
    path: '/gallery'
  },{
    icon: <MdContactSupport/>,
    name: 'Contact',
    path: '/contact'
  },{
    icon: <FaBlogger/>,
    name: 'Blog',
    path: '/blog'
  },
]

  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='flex'>
      
      <div className='container'>
        <div style={{width: isOpen ? '240px' : '80px'}} className='nav min-h-screen bg-green-500  text-white w-60 py-5 border-r-4 border-gray-700'>
          <div className='bar px-[15px] py-2 flex justify-center'>
            <FaBars onClick={toggle} className=' text-[25px] cursor-pointer' />
          </div>
          
          
            {menuBar.map((items, index) => {
              return(
              <div className='flex flex-col'>
                <NavLink className={isOpen ? 'normal' : 'toggle'} activeClassName='active' to={items.path} id={index}>
                  <div className='text-[25px]'>{items.icon}</div>
                  <h1 style={{display: isOpen ? 'block' : 'none'}}>{items.name}</h1>
                </NavLink>
              </div>
              )
              
            })}
              
        </div>

        <main className='w-[100%] pl-[20px] py-[30px]'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Sidebar
