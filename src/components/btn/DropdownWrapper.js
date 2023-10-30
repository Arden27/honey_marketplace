import React, { useState, useRef } from 'react';
import useOutsideClick from '@/hooks/useOutsideClick';

export default function DropdownWrapper({ onSelect, children }) {
  const [isOpen, setIsOpen] = useState(false);
  // React.Children.toArray used to handle both single and multiple elemnts of children
  const [selected, setSelected] = useState(React.Children.toArray(children)[0].props.children);
  const node = useRef();
  const buttonRef = useRef();

  const handleSelect = (child) => {
    setSelected(child.props.children);
    onSelect(child.props.children);
    setIsOpen(false);
  };

  const handleOutsideClick = () => {
    setIsOpen(false);
  };

  useOutsideClick([buttonRef, node], handleOutsideClick);

  return (
    <div className="relative w-96 text-end">
      <button ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
        {selected} <span>{isOpen ? "▲" : "▼"}</span>
      </button>
      <ul
        className={`absolute right-0 z-50 rounded-[2rem] bg-bar p-2 text-end
        ${isOpen ? "block" : "hidden"}`}
        ref={node}
      >
        {React.Children.map(children, (child, index) => 
          React.cloneElement(child, {
            onClick: () => handleSelect(child),
            key: index
          })
        )}
      </ul>
    </div>
  );
}
