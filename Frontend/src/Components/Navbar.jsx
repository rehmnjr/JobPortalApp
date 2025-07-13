import React, { useContext, useEffect, useState } from 'react';
import Logo from '../assets/logo.png'
import { JobContext } from '../Context/JobContext';


const Navbar = () => {
const {setFlag} = useContext(JobContext);
const [mode , setMode] = useState('light');

useEffect(()=>{
 const storedMode = localStorage.getItem('mode');
  if (storedMode) {
      setMode(storedMode);
    }
},[mode])

const handleMode=()=>{
  const newMode = mode === 'light' ? 'dark' : 'light';
  setMode(newMode);
  localStorage.setItem('mode', newMode);
}

const handleCreate = ()=>{
    setFlag(true);
  }

  return (
    <div className='w-[890px] h-[80px] font-satoshi rounded-[100px] py-4' style={{boxShadow:`rgba(99, 99, 99, 0.2) 0px 2px 8px 0px`,}}>
      
     <ul className='flex items-center justify-around'>
     <li className='font-[500] cursor-pointer'>
      <a href="/"><img src={Logo} alt="Logo" /></a>
      </li>

     <li className='font-[500] cursor-pointer hover:text-violet-800'>Home</li>
     <li className='font-[500] cursor-pointer hover:text-violet-800'>Find Jobs</li>
     <li className='font-[500] cursor-pointer hover:text-violet-800'>Find Talents</li>
     <li className='font-[500] cursor-pointer hover:text-violet-800'>About Us</li>
     <li className='font-[500] cursor-pointer hover:text-violet-800'>Testimonials</li>
     <li onClick={handleMode}>{mode ==='light'? "Light Mode": "Dark Mode"}</li>
     <li><button onClick={handleCreate} className='bg-gradient-to-b from-[#A128FF] to-[#6100AD] p-3 px-4 rounded-4xl text-white cursor-pointer'>Create Jobs</button></li>
     </ul>
    </div>
  
  )
}

export default Navbar