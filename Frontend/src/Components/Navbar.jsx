import React, { useContext } from 'react';
import Logo from '../assets/logo.png'
import { JobContext } from '../Context/JobContext';
import { MdDarkMode } from "react-icons/md";
import { BsBrightnessHighFill } from "react-icons/bs";
import { ThemeContext } from '../Context/Theme';


const Navbar = () => {

const {setFlag} = useContext(JobContext);
const {theme, setTheme} = useContext(ThemeContext);

const handleMode=()=>{
  const newTheme = theme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
  localStorage.setItem('theme', newTheme);
}

const handleCreate = ()=>{
    setFlag(true);
  }

  return (
    <div className={`w-[890px] h-[80px] font-satoshi rounded-[100px] py-4 bg-[#ffffff31] ${theme === 'light'?'':'text-white'}`} style={{boxShadow:`rgba(99, 99, 99, 0.2) 0px 2px 8px 0px`,}}>
      
     <ul className='flex items-center justify-around'>
     <li className='font-[500] cursor-pointer'>
      <a href="/"><img src={Logo} alt="Logo" /></a>
      </li>

     <li className='font-[500] cursor-pointer hover:text-violet-800'>Home</li>
     <li className='font-[500] cursor-pointer hover:text-violet-800'>Find Jobs</li>
     <li className='font-[500] cursor-pointer hover:text-violet-800'>Find Talents</li>
     <li className='font-[500] cursor-pointer hover:text-violet-800'>About Us</li>
     <li className='font-[500] cursor-pointer hover:text-violet-800'>Testimonials</li>
     <li onClick={handleMode}><div className='flex justify-center items-center p-2 rounded-4xl bg-[#24003f]'>{theme ==='light'? <MdDarkMode size={25} color='#ffffff'/> : <BsBrightnessHighFill size={25} color='#ffffff'/>}</div></li>
     <li><button onClick={handleCreate} className='bg-gradient-to-b from-[#A128FF] to-[#6100AD] p-3 px-4 rounded-4xl text-white cursor-pointer'>Create Jobs</button></li>
     </ul>
    </div>
  )
}

export default Navbar