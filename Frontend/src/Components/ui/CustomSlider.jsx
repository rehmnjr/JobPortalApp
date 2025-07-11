import React, { useEffect, useRef } from 'react';
import './style/Slider.css'; 

const CustomSlider = ({ value, onChange }) => {
  const sliderRef = useRef();

  useEffect(() => {
    const percent = (value / 2000) * 100;
    if (sliderRef.current) {
      sliderRef.current.style.setProperty('--range-progress', `${percent}%`);
    }
  }, [value]);

  return (
    <div className="slidecontainer">
      <input type="range" ref={sliderRef} min="0" max="2000" step="1" value={value} onChange={(e) => onChange(Number(e.target.value))} className="slider"
      />
    </div>
  );
};

export default CustomSlider;

