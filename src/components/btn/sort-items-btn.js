"use client"

import React, { useState, useEffect, useRef } from 'react';

export default function SortItemsBtn({ onSelect }){
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('A-Z');
  const node = useRef();
  const buttonRef = useRef();

  const options = ['A-Z', 'Z-A', 'By price from lowest', 'By price from highest'];

  const handleSelect = (option) => {
    setSelected(option);
    onSelect(option);
    setIsOpen(false);
  };

  const handleClickOutside = (e) => {
    if (
      node.current.contains(e.target) ||
      buttonRef.current.contains(e.target)
    ) {
      return;
    }
    setIsOpen(false);
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener("mouseup", handleClickOutside);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-96 text-end">
      <button 
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected} <span>{isOpen ? '▲' : '▼'}</span>
      </button>
      <ul 
        className={`absolute right-0 z-50 bg-cart-bar rounded-xl p-2 text-end
        ${isOpen ? "block" : "hidden"}`}
        ref={node}
      >
        {options.map((option, index) => (
          <li className="cursor-pointer hover:bg-cart-bar-item" key={index} onClick={() => handleSelect(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};