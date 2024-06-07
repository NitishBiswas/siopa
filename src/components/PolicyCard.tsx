import React, { ReactElement } from 'react'

export interface IPolicy {
    id: number;
    title: string;
    subTitle: string;
    icon: ReactElement;
}

const PolicyCard = ({ data }: { data: IPolicy }) => {
    return (
        <div className='flex gap-4 items-center'>
            {data?.icon}
            <div>
                <div className='text-[14px] sm:text-[18px] font-[500]'>{data?.title}</div>
                <div className='text-[10px] sm:text-[14px]'>{data?.subTitle}</div>
            </div>
        </div>
    )
}

export default PolicyCard