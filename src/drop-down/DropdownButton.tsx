import React, { useContext } from 'react';
import { DropdownContext } from './DropdownContext';

const DropdownButton = ({ children }: { children: React.ReactNode }) => {
  const { toggleOpen } = useContext(DropdownContext);
  return <div onClick={() => toggleOpen()}>{children}</div>;
};

export default DropdownButton;
