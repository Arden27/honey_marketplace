import React, { useState, useRef, useContext, useEffect } from 'react';
import Button from '@/components/Button';
import ChevronUp from '../../public/icons/chevron-up.svg';
import ChevronDown from '../../public/icons/chevron-down.svg';
import useOutsideClick from '@/hooks/useOutsideClick';

// Context to provide selected value and handleSelect function to children
const DropdownContext = React.createContext();

export default function DropdownMenu({ children, onSelect }) {
  const node = useRef();
  const buttonRef = useRef();

  const [selected, setSelected] = useState('');
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

  // useEffect to set the default value
  useEffect(() => {
    const buttonChild = React.Children.toArray(children).find(
      (child) => child.type === DropdownMenu.Button,
    );

    if(buttonChild){
      setSelected(buttonChild.props.children)
    } else {
      const listChild = React.Children.toArray(children).find(
        (child) => child.type === DropdownMenu.List,
      );
  
      if (listChild) {
        const defaultItem = React.Children.toArray(listChild.props.children).find(
          (child) => child.props.isDefault,
        );
  
        if (defaultItem) {
          setSelected(defaultItem.props.children);
        }
      }
    }
    
  }, []);

  return (
    <DropdownContext.Provider value={{ selected, handleSelect }}>
      <div className="relative z-40 cursor-pointer text-end" ref={node}>
        <Button
          className={`whitespace-nowrap hover:text-bg2 ${isOpen ? 'bg-text !text-bg2' : ''}`}
          format="sm"
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
        >
          {selected}
          <span className="ml-3xs">
            {isOpen ? <ChevronUp /> : <ChevronDown />}
          </span>
        </Button>
        {isOpen && React.Children.map(children, (child) => {
          if (child.type === DropdownMenu.List) {
            return React.cloneElement(child);
          }
          return child;
        })}
      </div>
    </DropdownContext.Provider>
  );
}

DropdownMenu.List = function DropdownList({ className, children }) {
  const { handleSelect } = useContext(DropdownContext);

  return (
    <ul className={className}>
      {React.Children.map(children, (child, index) => {
        if (child.type === DropdownMenu.Item) {
          return React.cloneElement(child, { key: index, onSelect: handleSelect });
        }
        return child;
      })}
    </ul>
  );
};

// Sub-component to render selectable Items
DropdownMenu.Item = function DropdownItem({ children, onSelect, className, isDefault }) {
  return (
    <li onClick={() => onSelect(children)}>
      <Button
        className={className}
        format="sm"
      >
        {children}
      </Button>
    </li>
  );
};

// Sub-component to render a custom default button label
DropdownMenu.Button = function DropdownButton({ children }) {
  return <></>;
};
