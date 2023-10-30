"use client"

import React, { useState, useRef } from 'react';
import useOutsideClick from '@/hooks/useOutsideClick';

export default function SortItemsBtn({ options, onSelect }){
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  const node = useRef();
  const buttonRef = useRef();

  const handleSelect = (option) => {
    setSelected(option);
    onSelect(option);
    setIsOpen(false);
  };

  const handleOutsideClick = () => {
    setIsOpen(false);
  };

  useOutsideClick([buttonRef, node], handleOutsideClick);

  return (
    <div className="relative text-end">
      <button ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
        {selected} <span>{isOpen ? "▲" : "▼"}</span>
      </button>
      <ul
        className={`absolute right-0  rounded-[2rem] bg-bar p-2 text-end
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