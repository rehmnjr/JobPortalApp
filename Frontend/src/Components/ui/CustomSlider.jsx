import React, { useEffect, useRef } from 'react';
import './style/Slider.css'; 

const CustomSlider = ({ value, onChange }) => {
  const sliderRef = useRef();

  useEffect(() => {
    const percent = (value / 90) * 100;
    if (sliderRef.current) {
      sliderRef.current.style.setProperty('--range-progress', `${percent}%`);
    }
  }, [value]);

  return (
    <div className="slidecontainer">
      <input type="range" name="salaryMax" ref={sliderRef} min="1" max="90" step="1" value={value} onChange={(e) => onChange(e.target.name,Number(e.target.value))} className="slider"
      />
    </div>
  );
};

export default CustomSlider;

