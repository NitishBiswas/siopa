import { ArrowDown2, ArrowUp2 } from 'iconsax-react';
import React, { useState } from 'react';

interface ICustomDropdown {
    options: string[];
    selectedFilterValue: string;
    setSelectedFilterValue: (value: string) => void;
}

const CustomDropdown = ({ options, selectedFilterValue, setSelectedFilterValue }: ICustomDropdown) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleOptionClick = (option: string) => {
        setSelectedFilterValue(option);
        setDropdownOpen(false);
    };

    return (
        <div>
            <div onClick={() => setDropdownOpen(!dropdownOpen)} className='bg-white border rounded w-[200px] px-3 py-1 flex items-center justify-between cursor-pointer text-[14px] relative'>
                <div className='text-[#5f5f5f] font-[600]'><span className='font-normal'>Category : </span> {selectedFilterValue}</div>
                {!dropdownOpen ? <ArrowDown2 size="20" color="#D9AF8B" /> : <ArrowUp2 size="20" color="#D9AF8B" />}
                {dropdownOpen && <div className={`absolute top-10 right-0 bg-[#EBEBEB] w-[200px] p-2 z-[101] flex flex-col gap-2 rounded`}>
                    {options.map((option, index) => {
                        return (
                            <div key={index} onClick={() => handleOptionClick(option)} className={`hover:bg-white text-[#5f5f5f] px-2 py-1 rounded ${option === selectedFilterValue ? "bg-white" : "bg-[#EBEBEB]"}`}>{option}</div>
                        )
                    })}
                </div>}
            </div>
        </div>
    );
};

export default CustomDropdown;
