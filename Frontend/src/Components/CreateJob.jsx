import React, { useContext, useState } from "react";
import { LuChevronsDown } from "react-icons/lu";
import { FiChevronsRight } from "react-icons/fi";
import { MdCancel } from "react-icons/md";
import { JobContext } from "../Context/JobContext";

const CreateJob = () => {
    
    const [formData, setFormData] = useState({
        jobTitle: "",
        companyName: "",
        location: "",
        jobType: "",
        salaryMin: "",
        salaryMax: "",
        deadline: "",
        experienceMin: "",
        experienceMax: "",
        imageUrl: "",
        description: "",
    });

    
    const { setFlag } = useContext(JobContext);

    
    const handleCancel = () => {
        setFlag(false);
    };

    
    const handleDraft = (e) => {
        e.preventDefault();
        console.log("Saving draft:", formData);
       
        setFlag(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const postData = async () => {
        try {
            const response = await fetch("https://jobportalbackend-fmvx.onrender.com/jobs", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData), 
            });

            if (!response.ok) {
               
                const errorData = await response.json();
                throw new Error(errorData.error || "Failed to create job");
            }

            const result = await response.json();
            console.log("Job created successfully:", result);
            setFlag(false);
        } catch (error) {
            console.error("Error posting job data:", error);
            
        }
    };

    const handlePublish = async (e) => {
        e.preventDefault(); 

        
        for (const [key, value] of Object.entries(formData)) {
            if (value === "" || value === null || value === undefined) {
                console.error(`Validation Error: Please fill in the '${key}' field.`);
                return;
            }
        }
        await postData();
    };

    return (
        <div className="fixed inset-0 bg-[#000000c8] flex items-center justify-center z-50 p-4">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-2xl flex flex-col gap-6 font-satoshi overflow-y-auto max-h-[90vh]">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Create New Job</h2>
                    <button onClick={handleCancel} className="text-gray-500 hover:text-gray-700">
                        <MdCancel size={30} />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="jobTitle" className="text-[20px]">Job Title</label>
                        <input
                            onChange={handleChange}
                            value={formData.jobTitle}
                            name="jobTitle"
                            type="text"
                            id="jobTitle"
                            placeholder="Ex. UI/UX Designer"
                            className="border border-[#222222] rounded-[10px] w-full h-[50px] p-2"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="companyName" className="text-[20px]">Company Name</label>
                        <input
                            onChange={handleChange}
                            value={formData.companyName}
                            name="companyName"
                            type="text"
                            id="companyName"
                            placeholder="Ex. Google"
                            className="border border-[#222222] rounded-[10px] w-full h-[50px] p-2"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="location" className="text-[20px]">Location</label>
                        <input
                            onChange={handleChange}
                            value={formData.location}
                            name="location"
                            type="text"
                            id="location"
                            placeholder="Ex. New York"
                            className="border border-[#222222] rounded-[10px] w-full h-[50px] p-2"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="jobType" className="text-[20px]">Job Type</label>
                        <select
                            onChange={handleChange}
                            value={formData.jobType}
                            name="jobType"
                            id="jobType"
                            className="border border-[#222222] rounded-[10px] w-full h-[50px] p-2"
                        >
                            <option value="" disabled hidden>Select Job Type</option>
                            <option value="Internship">Internship</option>
                            <option value="Fulltime">Fulltime</option>
                            <option value="Contract">Contract</option>
                            <option value="Part-time">Part-time</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="salary" className="text-[20px]">Salary Range (LPA)</label>
                        <div className="flex gap-4">
                            <input
                                onChange={handleChange}
                                value={formData.salaryMin}
                                name="salaryMin"
                                type="number"
                                placeholder="Min"
                                className="border border-[#222222] rounded-[10px] w-full h-[50px] p-2"
                            />
                            <input
                                onChange={handleChange}
                                value={formData.salaryMax}
                                name="salaryMax"
                                type="number"
                                placeholder="Max"
                                className="border border-[#222222] rounded-[10px] w-full h-[50px] p-2"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="deadline" className="text-[20px]">Application Deadline</label>
                        <input
                            onChange={handleChange}
                            value={formData.deadline}
                            name="deadline"
                            type="date"
                            id="deadline"
                            className="border border-[#222222] rounded-[10px] w-full h-[50px] p-2"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="experience" className="text-[20px]">Experience (Years)</label>
                        <div className="flex gap-4">
                            <input
                                onChange={handleChange}
                                value={formData.experienceMin}
                                name="experienceMin"
                                type="number"
                                placeholder="Min"
                                className="border border-[#222222] rounded-[10px] w-full h-[50px] p-2"
                            />
                            <input
                                onChange={handleChange}
                                value={formData.experienceMax}
                                name="experienceMax"
                                type="number"
                                placeholder="Max"
                                className="border border-[#222222] rounded-[10px] w-full h-[50px] p-2"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="imageUrl" className="text-[20px]">Image Url</label>
                        <input
                            onChange={handleChange}
                            value={formData.imageUrl}
                            name="imageUrl"
                            type="text"
                            id="imageUrl"
                            placeholder="Company Logo URL"
                            className="border border-[#222222] rounded-[10px] w-full h-[50px] p-2"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="description" className="text-[20px]">Description</label>
                    <textarea
                        onChange={handleChange}
                        value={formData.description}
                        name="description"
                        id="description"
                        placeholder="Please share a description to let the candidate know more about the job role"
                        className="border border-[#222222] rounded-[10px] w-full h-[170px] p-2"
                    ></textarea>
                </div>

                <div className="flex justify-between mt-4">
                    <button
                        onClick={handleDraft}
                        className="flex gap-2 items-center border border-gray-300 rounded-[5px] py-3 px-6 cursor-pointer hover:bg-gray-100 transition-colors"
                    >
                        Save Draft <LuChevronsDown />
                    </button>
                    <button
                        onClick={handlePublish}
                        className="flex gap-2 bg-[#00AAFF] text-white items-center rounded-[5px] py-3 px-6 cursor-pointer hover:bg-[#0099EE] transition-colors"
                    >
                        Publish Job <FiChevronsRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateJob;
