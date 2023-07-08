"use client"

import React, { useState, useEffect } from 'react';
//import './styles.css';  // Import styles

import Menu from './menu';

export default function BurgerMenu(){
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      {!isOpen && <button /*className="burgerButton"*/onClick={toggleMenu}>Menu</button>}
      {isOpen && <Menu isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
};