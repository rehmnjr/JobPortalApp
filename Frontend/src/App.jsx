import React, { useContext } from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import JobList from "./Components/JobList";
import CreateJob from "./Components/CreateJob";
import { JobContext } from "./Context/JobContext";
import { ThemeContext } from "./Context/Theme";
const App = () => {
  const { flag } = useContext(JobContext);
  const {theme} = useContext(ThemeContext);

  return (
    <div className={`flex flex-col gap-4 ${theme === 'light' ? 'bg-white ': 'bg-[#20002a]'}`}>
      {flag ? <CreateJob /> : ""}
      <div className="flex items-center justify-center">
        <Navbar />
      </div>
      <Filter />
      <div className="px-4 mt-4">
        <JobList />
      </div>
    </div>
  );
};

export default App;
