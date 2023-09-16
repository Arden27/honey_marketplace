"use client"

import React, { useState } from 'react';

export default function FilterItemsBtn({ onSelect }){
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('A-Z');

  const options = ['A-Z', 'Z-A', 'By price from lowest', 'By price from highest'];

  const handleSelect = (option) => {
    setSelected(option);
    //onSelect(option); // pass the selected option up as a prop
    setIsOpen(false);
  };

  return (
    <div className="w-30 items-end">
      <button onClick={() => setIsOpen(!isOpen)}>
        {selected} <span>{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && (
        <ul className="absolute z-50">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};