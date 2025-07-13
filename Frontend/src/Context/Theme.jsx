import React,{createContext, useEffect, useState} from 'react';
 
const ThemeContext = createContext();

const ThemeProvider = ({children})=>{

    const [theme,setTheme] = useState('light');

    useEffect(()=>{
        const getTheme = localStorage.getItem('theme');
        if(getTheme){
          setTheme(getTheme);
        }
    },[theme]);

    return(
          <ThemeContext.Provider value={{theme,setTheme}}>
              {children}
          </ThemeContext.Provider>
    );
 };
 
export {ThemeContext};
export default ThemeProvider;