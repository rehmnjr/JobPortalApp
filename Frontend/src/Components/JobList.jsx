import React, { useContext, useEffect, useState } from 'react';
import ApplyBtn from './ui/ApplyButton';
import { BsPersonPlus } from "react-icons/bs";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { RxLayers } from "react-icons/rx";
import { FilterContext } from '../Context/FilterContext';
import { ThemeContext } from '../Context/Theme';

const JobList = () => {
  const [jobs, setJobs] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);
  const {filterData} = useContext(FilterContext);
  const {theme} = useContext(ThemeContext);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
  
        const response = await fetch('https://jobportalbackend-fmvx.onrender.com/jobs'); 
        if (!response.ok) {
         
          const errorText = await response.text();
          throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorText}`);
        }
        const data = await response.json();
        setJobs(data);
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError(`Failed to load jobs. Please try again later. Details: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    if(!filterData){
        fetchJobs();
      }else{
        setJobs(filterData)
      }

  }, [filterData]); 

  
  const timeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);

    let interval = seconds / 31536000;
    if (interval > 1) {
      return Math.floor(interval) + "y ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + "mo ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + "d ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + "h ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + "m ago";
    }
    return Math.floor(seconds) + "s ago";
  };

  if (loading) {
    return <div className="text-center py-8">Loading jobs...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  if (jobs.length === 0) {
    return <div className="text-center py-8">No jobs found !</div>;
  }


  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 font-satoshi'>
      {jobs.map((job) => (
        <div key={job._id} className={`w-full max-w-sm rounded-2xl p-4 flex flex-col justify-between ${theme === 'light'?'':'border border-white'}`} style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px' }}>
          <div className='flex justify-between items-center mb-4'>
            <div className={`p-2 rounded-2xl flex items-center justify-center ${theme === 'light'?'':'bg-white'}`} style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' , width:'80px', height:'80px'}}>
              <img src={job.imageUrl} alt={`${job.companyName} Logo`} width={50} height={50} className="object-contain"/>
            </div>
            <div className={`bg-[#B0D9FF] rounded-[6px] px-2 py-1.5 text-[12px] max-h-fit ${theme === 'light'?'':'text-black'}`}>
              {timeAgo(job.createdTime)}
            </div>
          </div>

          <div className='flex flex-col gap-3 flex-grow'>
            <p className={`font-bold text-lg ${theme === 'light'?'':'text-white'}`}>{job.jobTitle}</p>
            <p className={`text-gray-600 text-sm ${theme === 'light'?'':'text-pink-200'}`}>{job.companyName} - {job.location}</p>
            <ul className={`flex flex-wrap gap-x-4 gap-y-2 text-[#555555] text-sm ${theme === 'light'?'':'text-[#989898]'}`}>
              <li className='flex items-center gap-1'>
                <BsPersonPlus size={16} />
                <span>{job.experienceMin}-{job.experienceMax} yrs Exp</span>
              </li>
              <li className='flex items-center gap-1'>
                <HiMiniBuildingOffice2 size={16} />
                <span>{job.jobType}</span>
              </li>
              <li className='flex items-center gap-1'>
                <RxLayers size={16} />
                <span>₹{job.salaryMin}-{job.salaryMax} LPA</span>
              </li>
            </ul>
            <p className={`text-[14px] text-[#555555] mt-2 line-clamp-3 ${theme === 'light'?'':'text-[#989898]'}`}>{job.description}</p>
          </div>

          <div className='mt-4'>
            <ApplyBtn />
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobList;
