import { useState } from 'react';
import DropdownButton from './DropdownButton';
import DropdownItem from './DropdownItem';
import { DropdownContext } from './DropdownContext';

const Dropdown = () => {
  const [selectedItem, setSelectedItem] = useState<string>('선택하세요');
  const [isOpen, setIsOpen] = useState(false);
  const onSelect = (id: string) => {
    setSelectedItem(id);
    setIsOpen(false);
  };

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  const dropdownValue = { selectedItem, setSelectedItem, onSelect, toggleOpen };
  return (
    <DropdownContext.Provider value={dropdownValue}>
      <DropdownButton>{selectedItem}</DropdownButton>
      {isOpen && (
        <>
          <DropdownItem id="1">1</DropdownItem>
          <DropdownItem id="2">2</DropdownItem>
          <DropdownItem id="3">3</DropdownItem>
        </>
      )}
    </DropdownContext.Provider>
  );
};

export default Dropdown;
