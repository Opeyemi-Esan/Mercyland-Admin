import React from 'react'
import '../Style/DarkMode.css';

function DarkMode() {
    const setDarkmode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark')
    }
    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light')
    }
    const toggleTheme = (e) => {
        if(e.target.checked) setDarkmode();
        else setLightMode();
    }
  return (
    <div className='darl_mode'>
      <input 
        className='dark_mode'
        type='checkbox'
        id='darkmode-toggle'
        onChange={toggleTheme}
      />
    </div>
  )
}

export default DarkMode
