import React, { createContext, useState } from 'react';

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {

  const [filterData, setFilterData] = useState(null);

  return (
    <FilterContext.Provider value={{ filterData, setFilterData}}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
export {FilterContext}