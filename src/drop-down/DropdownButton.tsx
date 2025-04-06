import React, { useContext } from 'react';
import { DropdownContext } from './DropdownContext';
import '../App.css';

const DropdownButton = ({ children }: { children: React.ReactNode }) => {
  const { toggleOpen } = useContext(DropdownContext);
  return (
    <div className="dropdown-button" onClick={() => toggleOpen()}>
      {children}
    </div>
  );
};

export default DropdownButton;
