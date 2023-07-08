//"use client"

import React from 'react';
//import './styles.css';  // Import styles

export default function Menu({ isOpen, setIsOpen }) {

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="menu">
      <button /*className="burgerButton"*/ onClick={toggleMenu}>Close Menu</button>
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  );
};