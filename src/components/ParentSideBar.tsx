import { CloseCircle } from 'iconsax-react';
import React, { ReactNode, useEffect, useRef } from 'react';

interface IParentSideBarProps {
    children: ReactNode;
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

const ParentSideBar: React.FC<IParentSideBarProps> = ({ children, className = "", isOpen, onClose }) => {
    const sidebarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    return (
        <div
            ref={sidebarRef}
            className={`border-l-[2px] border-primary/30 p-[40px] h-[100vh] fixed top-0 right-0 bg-white z-[1000] transition-transform duration-1000 ease-in-out transform w-full sm:w-[500px] ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
            <div onClick={onClose} className='w-fit mb-[40px] text-[#7E7F7C] hover:text-red-500 cursor-pointer transition-all'>
                <CloseCircle size="24" />
            </div>
            {children}
        </div>
    );
};

export default ParentSideBar;
