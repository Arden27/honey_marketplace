"use client"

import React, { useState, useRef } from 'react';
import useOutsideClick from '@/hooks/useOutsideClick';

export default function SelectButton({ options, onSelect }){
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  const node = useRef();
  const buttonRef = useRef();

  const handleSelect = (option) => {
    setSelected(option);
    onSelect(option);
    setIsOpen(false);
  };

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  useOutsideClick([buttonRef, node], handleClickOutside);
  
  return (
    <div className="">
      <button ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
        {selected} <span>{isOpen ? "▲" : "▼"}</span>
      </button>
      <ul
        className={`absolute z-50 rounded-[2rem] bg-bar p-2
        ${isOpen ? "block" : "hidden"}`}
        ref={node}
      >
        {options.map((option, index) => (
          <li
            className="cursor-pointer hover:bg-bg3"
            key={index}
            onClick={() => handleSelect(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};