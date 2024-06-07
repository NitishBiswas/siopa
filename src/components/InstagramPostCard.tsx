import { Instagram } from 'iconsax-react';
import React from 'react'

export interface InstagramPost {
    id: number;
    image: string;
    postUrl: string;
}

const InstagramPostCard = ({ data }: { data: InstagramPost }) => {
    return (
        <div className='h-[168px] w-[168px] group relative product-card'>
            <img src={data?.image} alt={"postImage" + data?.id} className='h-full w-full object-cover' />
            <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center cursor-pointer bg-black/30 opacity-0 group-hover:opacity-100 duration-1000'>
                <Instagram size="32" color="#FFFFFF" className='wish-item' />
            </div>
        </div>
    )
}

export default InstagramPostCard