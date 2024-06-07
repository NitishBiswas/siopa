import React from 'react'
import { instagramPostData } from '../assets/data/instagramPostData'
import InstagramPostCard from '../components/InstagramPostCard'
import ParentDiv from '../components/ParentDiv'

const InstagramPostSection = () => {
    return (
        <ParentDiv childClassName='!mt-[120px]'>
            <div className='mb-[40px] border-b-2 border-black text-[32px] w-fit'>Instagram Posts</div>
            <div className='flex flex-wrap gap-[40px] justify-center sm:justify-between'>
                {instagramPostData?.map((item, index) => {
                    return (
                        <InstagramPostCard key={index} data={item} />
                    )
                })}
            </div>
        </ParentDiv>
    )
}

export default InstagramPostSection