import React, {useContext } from 'react'
import Navbar from './Components/Navbar'
import Filter from './Components/Filter'
import JobList from './Components/JobList'
import CreateJob from './Components/CreateJob'
import { JobContext } from './Context/JobContext'
const App = () => {
  const {flag} = useContext(JobContext);
  return (
    <div className='flex flex-col gap-4 bg-[#FBFBFF]'>
    {flag ? <CreateJob/> :""}
      <div className='flex items-center justify-center'>
      <Navbar/>
      </div>
      <Filter/>
      <div className='px-4 mt-4'>
      <JobList/>
      </div>
    </div>
  )
} 

export default App