import Button from "@/components/Button";
import ChevronUp from "../../public/icons/chevron-up.svg";
import ChevronDown from "../../public/icons/chevron-down.svg";

import React, { useState, useRef, useContext } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";

// Context to provide selected value and handleSelect function to children
const DropdownContext = React.createContext();

export default function DropdownMenu({ children, onSelect }) {
  const node = useRef();
  const buttonRef = useRef();

  // Get default button label from DropdownMenu.Button child if exists
  const defaultButtonLabel = React.Children.toArray(children).find(
    (child) => child.type === DropdownMenu.Button,
  )?.props.children;

  // Get default option label from DropdownMenu.Option with default prop or first DropdownMenu.Option child
  const defaultOptionLabel =
    React.Children.toArray(children).find(
      (child) => child.type === DropdownMenu.Option && child.props.default,
    )?.props.children ||
    React.Children.toArray(children).find(
      (child) => child.type === DropdownMenu.Option,
    )?.props.children;

  // Set initial selected value based on defaultButtonLabel or defaultOptionLabel
  const [selected, setSelected] = useState(
    defaultButtonLabel || defaultOptionLabel,
  );

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
      <div className="relative z-40 cursor-pointer text-end">
        <Button
          className={`whitespace-nowrap hover:text-bg2  ${
            isOpen ? "  bg-text text-bar hover:!text-bar" : ""
          }`}
          type="sm"
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
        >
          {selected}
          <span className="ml-3xs">
            {isOpen ? <ChevronUp /> : <ChevronDown />}
          </span>
        </Button>
        <ul
          className={` borer-2 absolute -right-2xs z-50 mt-3xs  whitespace-nowrap rounded-[2rem] bg-bar p-3xs text-end font-btn text-sm shadow transition duration-[1000] ease-in-out
          ${
            isOpen
              ? ".slide-out-left block duration-[1000] ease-in-out"
              : ".slide-out-left hidden transition-colors duration-[1000] ease-in-out"
          }`}
          ref={node}
        >
          {React.Children.map(
            children,
            (child, index) =>
              child.type === DropdownMenu.Option &&
              React.cloneElement(child, { key: index }),
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
    <li
      onClick={() => handleSelect(children)}
      className="m-3xs"
    >
      <Button
        className="!hover:bg-inherit w-full !justify-end border-transparent hover:bg-none hover:text-bar "
        type="sm"
      >
        {children}
      </Button>
    </li>
  );
};
