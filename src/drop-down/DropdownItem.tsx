import React, { useContext } from 'react';
import { DropdownContext } from './DropdownContext';
import '../App.css';

interface DropdownItemProps {
  id: string;
  children: React.ReactNode;
}
const DropdownItem = ({ id, children }: DropdownItemProps) => {
  const { onSelect } = useContext(DropdownContext);
  function handleClickDropdownItem() {
    onSelect(id);
  }
  return (
    <div onClick={handleClickDropdownItem} className="dropdown-item">
      {children}
    </div>
  );
};

export default DropdownItem;
