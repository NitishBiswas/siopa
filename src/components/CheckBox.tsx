import React from 'react';

interface CheckBoxProps {
    title: string;
    value: string;
    setValue: () => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({ title, value, setValue }) => {
    return (
        <div onClick={setValue} className="flex w-fit items-center gap-[10px] cursor-pointer">
            <div className={`border rounded-md h-[20px] w-[20px] ${value !== "" ? "bg-primary" : "bg-transparent"} duration-1000 flex items-center justify-center`}>
                {value !== "" && <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                    ></path>
                </svg>}
            </div>
            <div className='text-[#0B0D17] w-[calc(100%-20px)]'>{title}</div>
        </div>
    );
};

export default CheckBox;
