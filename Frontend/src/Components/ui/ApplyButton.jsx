import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../Context/Theme'

const ApplyButton = () => {
  const [apply,setApply] = useState(false)
  const {theme} = useContext(ThemeContext);
  let Btnstyle = 'text-white py-2 px-12 rounded-[8px] w-full ';
  if(theme === 'light'){
    Btnstyle += !apply?'bg-[#00AAFF] cursor-pointer' : 'bg-gray-500 disabled';
  }else{
    Btnstyle += !apply?'bg-[#6928ff] cursor-pointer' : 'bg-gray-500 disabled';
  }

  const handleApply =()=>{
    setApply(true);
  }

  return (
    <div>
      <button onClick={handleApply} className={Btnstyle}>Apply Now</button>
    </div>
  )
}

export default ApplyButton