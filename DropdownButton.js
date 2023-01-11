import React, { useState } from 'react';
import Activity from './Activity';
const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("+");
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const selectOption = option => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <div>
      <button onClick={toggleDropdown}>{selectedOption}</button>
      {isOpen && (
        <ul>
          <li onClick={() => selectOption("+")}>
            <Activity />
          </li>
        </ul>
      )}
     
      
    </div>
  );
};

export default DropdownButton;
