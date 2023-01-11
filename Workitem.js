import React, { useState } from 'react';

const Workitem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('+');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={toggleDropdown}>{selectedOption}</button>
      {isOpen && (
        <ul>
          <li onClick={() => selectOption('Option 1')}>Work item 1</li>
          <li onClick={() => selectOption('Option 2')}>Work item 2</li>
          <li onClick={() => selectOption('Option 3')}>Work item 3</li>
        </ul>
      )}
    </div>
  );
};

export default Workitem;
