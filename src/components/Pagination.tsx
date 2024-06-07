import { ArrowLeft2, ArrowRight2 } from 'iconsax-react'
import React from 'react'

interface IPagination {
    totalPage: number;
    selectedPage: number;
    setSelectedPage: (page: number) => void;
}

const Pagination = ({ totalPage, selectedPage, setSelectedPage }: IPagination) => {
    const getPageList = () => {
        const pageList: (number | string)[] = [];
        const maxVisiblePages = 4;

        if (totalPage <= maxVisiblePages) {
            for (let i = 1; i <= totalPage; i++) {
                pageList.push(i);
            }
        } else {
            if (selectedPage <= maxVisiblePages - 2) {
                for (let i = 1; i <= maxVisiblePages - 1; i++) {
                    pageList.push(i);
                }
                pageList.push('...');
                pageList.push(totalPage);
            } else if (selectedPage >= totalPage - 1) {
                pageList.push(1);
                pageList.push('...');
                for (let i = totalPage - maxVisiblePages + 2; i <= totalPage; i++) {
                    pageList.push(i);
                }
            } else {
                pageList.push(1);
                pageList.push('...');
                for (let i = selectedPage - 1; i <= selectedPage + 1; i++) {
                    pageList.push(i);
                }
                pageList.push('...');
                pageList.push(totalPage);
            }
        }

        return pageList;
    };

    return (
        <div className='w-fit h-[32px] border border-[#5F5F5F] flex justify-between items-center px-[8px] gap-[8px]'>
            <div onClick={() => {
                if (selectedPage !== 1) {
                    setSelectedPage(selectedPage - 1);
                }
            }} className={`${selectedPage === 1 ? "cursor-not-allowed  text-[#cccccc]" : "cursor-pointer text-[#5F5F5F] hover:text-primary"}`}>
                <ArrowLeft2 size="16" />
            </div>
            <div className='flex'>
                {getPageList().map((item, index) => {
                    return (
                        <div key={index} onClick={() => {
                            if (typeof item === 'number') {
                                setSelectedPage(item);
                            }
                        }} className={`h-[24px] w-[24px] flex justify-center items-center text-[14px] select-none ${selectedPage === item ? "bg-primary text-white" : "bg-transparent text-[#5F5F5F]"} ${typeof item === 'string' ? "cursor-none" : "cursor-pointer hover:text-primary"}`}>
                            {item}
                        </div>
                    );
                })}
            </div>
            <div onClick={() => {
                if (selectedPage !== totalPage) {
                    setSelectedPage(selectedPage + 1);
                }
            }} className={`${selectedPage === totalPage ? "cursor-not-allowed  text-[#cccccc]" : "cursor-pointer text-[#5F5F5F] hover:text-primary"}`}>
                <ArrowRight2 size="16" />
            </div>
        </div>
    );
}

export default Pagination;
