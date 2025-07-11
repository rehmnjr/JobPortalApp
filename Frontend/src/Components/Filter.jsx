import React, { useContext, useState, useEffect, useCallback } from "react";
import { IoIosSearch } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import CustomSlider from "./ui/CustomSlider";
import { FilterContext } from "../Context/FilterContext";

const Filter = () => {
  const [salary, setSalary] = useState(1);
  const { setFilterData } = useContext(FilterContext);

  function debounce(func, delay) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }

  const debounceSalary = useCallback(
  debounce(async(type,val) => {
    const filtered = await fetchData(val, type);
    setFilterData(filtered);
  }, 300),
  []
);

const handleSalary = (type,val)=>{
  console.log(type);
  debounceSalary(type,val)
}

  const debouncedSearch = useCallback(
    debounce(async (value, type) => {
      const filtered = await fetchData(value, type);
      setFilterData(filtered);
    }, 300),
    []
  );

  const handleChange = (e) => {
    debouncedSearch(e.target.value, e.target.name);
  };

  async function fetchData(target, type) {
    try {
      const res = await fetch(
        "https://jobportalbackend-fmvx.onrender.com/jobs"
      );
      if (!res.ok) {
        throw new Error(`Filter Fetch error! status: ${res.status}`);
      }
      const data = await res.json();
      if(type === 'salaryMax'){
        const filteredData = data.filter((item) => {
        if(item[type] <= target){
          return item;
        }
      });
      console.log(filteredData);
      return filteredData;
      }
      else{
      const filteredData = data.filter((item) => {
        return item[type].toLowerCase().includes(target.toLowerCase());
      });
      return filteredData;
    }
    } catch (error) {
      console.error("Filter catch error fetching data:", error);
    }
  }

  const getChangeVal = async (e) => {
    let target = e.target.value;
    let type = e.target.name;
    let filteredData = await fetchData(target, type);
    setFilterData(filteredData);
  };

  return (
    <div className="flex w-screen items-center justify-evenly shadow-md p-4">
      {/* Search by job title */}
      <div className="flex items-center gap-3 max-w-fit">
        <IoIosSearch size={22} />
        <input
          type="text"
          name="jobTitle"
          onChange={handleChange}
          placeholder="Search By Job Title, Role"
          className="px-4 py-2 max-w-fit outline-none focus:outline-none focus:ring-0 focus:border-transparent"
        />
      </div>

      <div className="bg-gray-300 w-[1px] h-[30px]"></div>

      {/* Preferred Location */}
      <div className="flex items-center gap-3 max-w-fit">
        <CiLocationOn size={22} />
        <div className="w-full max-w-md">
          <select
            onChange={getChangeVal}
            placeholder="Preferred location"
            name="location"
            className="outline-none focus:outline-none focus:ring-0 focus:border-transparent"
          >
            <option defaultValue="" disabled hidden selected>
              Preffered location
            </option>
            <option value="Bangalore">Bangalore</option>
            <option value="Delhi">Delhi</option>
            <option value="Hyderabad">Hyderabad</option>

            <option value="Noida">Noida</option>
            <option value="Gurgaon">Gurgaon</option>
            <option value="Gurugram">Gurugram</option>
            <option value="Chennai">Chennai</option>

            <option value="Kolkata">Kolkata</option>
            <option value="Kerala">Kerala</option>
            <option value="Remote">Remote</option>

            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
            <option value="punjab">punjab</option>
          </select>
        </div>
      </div>

      <div className="bg-gray-300 w-[1px] h-[40px]"></div>

      {/* Job Type */}
      <div className="flex items-center gap-3 max-w-fit">
        <GoPerson size={22} />
        <select
          onChange={getChangeVal}
          name="jobType"
          className="px-4 py-2 min-w-fit text-black w-[209px] outline-none focus:outline-none focus:ring-0 focus:border-transparent"
        >
          <option value="" disabled hidden selected>
            Job Type
          </option>
          <option value="Internship">Internship</option>
          <option value="Fulltime">Fulltime</option>
          <option value="Contract">Contract</option>
          <option value="Part Time">Part Time</option>
        </select>
      </div>

      <div className="bg-gray-300 w-[1px] h-[30px]"></div>

      {/* Salary Range and Autocomplete */}
      <div className="flex flex-col items-start gap-3 max-w-fit">
        <span className="font-light flex flex-col ">
          <p>Salary Per Month {`₹ ${1} LPA - ₹ ${salary} LPA`}</p>
          <CustomSlider value={salary} onChange={(type,val) => {
              setSalary(val);
              handleSalary(type,val)
          }} />
        </span>
      </div>
    </div>
  );
};

export default Filter;
