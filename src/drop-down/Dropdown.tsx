import { useEffect, useRef, useState } from 'react';
import DropdownButton from './DropdownButton';
import DropdownItem from './DropdownItem';
import { DropdownContext } from './DropdownContext';
import '../App.css';
const Dropdown = () => {
  const [selectedItem, setSelectedItem] = useState<string>('선택하세요');
  const [isOpen, setIsOpen] = useState(false);
  const onSelect = (id: string) => {
    setSelectedItem(id);
    setIsOpen(false);
  };

  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  const dropdownValue = { selectedItem, setSelectedItem, onSelect, toggleOpen };
  return (
    <DropdownContext.Provider value={dropdownValue}>
      <div className="dropdown-container" ref={dropdownRef}>
        <DropdownButton>{selectedItem}</DropdownButton>
        {isOpen && (
          <div className="dropdown-list">
            <DropdownItem id="1">1</DropdownItem>
            <DropdownItem id="2">2</DropdownItem>
            <DropdownItem id="3">3</DropdownItem>
          </div>
        )}
      </div>
    </DropdownContext.Provider>
  );
};

export default Dropdown;
