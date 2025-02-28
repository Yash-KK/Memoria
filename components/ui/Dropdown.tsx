"use client";
import React, { useState } from "react";
import Label from "./Label";

type DropdownProps = {
  label: string;
  options: string[];
  onSelect: (option: string) => void;
};

const Dropdown: React.FC<DropdownProps> = ({ label, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Label
        text={`${label} *`}
        textSize="sm"
        fontWeight="medium"
        className="text-white"
      />
      <div
        className="border text-sm rounded-lg text-white w-full p-2.5 bg-gray-700 border-gray-600 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption || "Select an option"}
      </div>
      {isOpen && (
        <div className="absolute z-10 bg-gray-800 border border-gray-600 rounded-lg mt-1 w-full">
          {options.map((option) => (
            <div
              key={option}
              className="p-2 hover:bg-gray-600 cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
