import React, { useState, useRef, useContext } from 'react';
import useOutsideClick from '@/hooks/useOutsideClick';

// Context to provide selected value and handleSelect function to children
const DropdownContext = React.createContext();

export default function DropdownMenu({ children, onSelect }) {
  const node = useRef();
  const buttonRef = useRef();

  // Get default button label from DropdownMenu.Button child if exists
  const defaultButtonLabel = React.Children.toArray(children).find(child => child.type === DropdownMenu.Button)?.props.children;

  // Get default option label from DropdownMenu.Option with default prop or first DropdownMenu.Option child
  const defaultOptionLabel = React.Children.toArray(children).find(child => child.type === DropdownMenu.Option && child.props.default)?.props.children 
    || React.Children.toArray(children).find(child => child.type === DropdownMenu.Option)?.props.children;

  // Set initial selected value based on defaultButtonLabel or defaultOptionLabel
  const [selected, setSelected] = useState(defaultButtonLabel || defaultOptionLabel);

  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value) => {
    setSelected(value);
    onSelect(value);
    setIsOpen(false);
  };

  const handleOutsideClick = () => {
    setIsOpen(false);
  };

  useOutsideClick([buttonRef, node], handleOutsideClick);

  return (
    <DropdownContext.Provider value={{ selected, handleSelect }}>
      <div className="relative text-end cursor-pointer">
        <div ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
          {selected} <span>{isOpen ? "▲" : "▼"}</span>
        </div>
        <ul
          className={`absolute right-0 z-50 rounded-[2rem] bg-bar p-2 text-end
          ${isOpen ? "block" : "hidden"}`}
          ref={node}
        >
          {React.Children.map(children, (child, index) =>
            child.type === DropdownMenu.Option && React.cloneElement(child, { key: index })
          )}
        </ul>
      </div>
    </DropdownContext.Provider>
  );
}

// Sub-component to render a custom default button label
DropdownMenu.Button = function DropdownButton({ children }) {
  return <>{children}</>;
};

// Sub-component to render selectable options
DropdownMenu.Option = function DropdownOption({ children }) {
  const { handleSelect } = useContext(DropdownContext);

  return (
    <li onClick={() => handleSelect(children)} className="cursor-pointer hover:bg-bg3">
      {children}
    </li>
  );
};
