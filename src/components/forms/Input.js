"use client"

import React from "react";

export default function Input({ children, id, type, ...props }) {
  return (
    <div className="relative w-full">
      <input type={type} id={id} name={id} {...props} />
      {React.Children.map(children, child => {
        if (React.isValidElement(child) && child.type === Input.Label) {
          // Extend props of Input.Label with id and type
          return React.cloneElement(child, { id, ...child.props });
        }
        return child;
      })}
    </div>
  );
}

Input.Label = function Label({ className, id, type, children, ...props }) {
  return <label htmlFor={id} type={type} className={className} {...props}>{children}</label>;
};
