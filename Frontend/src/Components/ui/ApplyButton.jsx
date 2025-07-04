import React, { useState } from 'react'

const ApplyButton = () => {
  const [apply,setApply] = useState(false)
  const handleApply =()=>{
    setApply(true);
  }

  return (
    <div>
      <button onClick={handleApply} className={
        !apply ? `bg-[#00AAFF] text-white py-2 px-12 rounded-[8px] w-full cursor-pointer` : `bg-gray-500  text-white py-2 px-12 rounded-[8px] w-full disabled:`}>Apply Now</button>
    </div>
  )
}

export default ApplyButton