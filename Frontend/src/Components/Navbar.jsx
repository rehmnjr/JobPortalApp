import React, { useContext } from 'react';
import Logo from '../assets/logo.png'
import { JobContext } from '../Context/JobContext';
const Navbar = () => {
const {setFlag} = useContext(JobContext);


const handleCreate = ()=>{
    setFlag(true);
  }

  return (
    <div className='w-[890px] h-[80px] font-satoshi rounded-[100px] py-4' style={{boxShadow:`rgba(99, 99, 99, 0.2) 0px 2px 8px 0px`,}}>
      
     <ul className='flex items-center justify-around'>
     <li className='font-[500]'><img src={Logo} alt="" /></li>
     <li className='font-[500]'>Home</li>
     <li className='font-[500]'>Find Jobs</li>
     <li className='font-[500]'>Find Talents</li>
     <li className='font-[500]'>About Us</li>
     <li className='font-[500]'>Testimonials</li>
     <li><button onClick={handleCreate} className='bg-gradient-to-b from-[#A128FF] to-[#6100AD] p-3 px-4 rounded-4xl text-white'>Create Jobs</button></li>
     </ul>
    </div>
  
  )
}

export default Navbar