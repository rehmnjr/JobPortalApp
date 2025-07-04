import React, { createContext, useState, useEffect } from 'react';

export const JobContext = createContext();


export const JobProvider = ({ children }) => {
  const [flag, setFlag] = useState(() => {
    const saved = localStorage.getItem('showCreateJob');
    return saved === 'true';
  });

  useEffect(() => {
    localStorage.setItem('showCreateJob', flag);
  }, [flag]);

  return (
    <JobContext.Provider value={{ flag, setFlag }}>
      {children}
    </JobContext.Provider>
  );
};
export default JobProvider