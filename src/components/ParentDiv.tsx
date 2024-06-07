import React, { ReactNode } from 'react';

interface ParentDivProps {
    children: ReactNode;
    parentClassName?: string;
    childClassName?: string;
}

const ParentDiv: React.FC<ParentDivProps> = ({ children, parentClassName = "", childClassName = "" }) => {
    return (
        <div className={`${parentClassName} flex w-full justify-center`}>
            <div className={`${childClassName} w-full flex flex-col items-center mt-[60px] h-full px-[12px] md:px-0 md:w-[678px] lg:w-[930px] xl:w-[1208px]`}>
                {children}
            </div>
        </div>
    );
};

export default ParentDiv;
