import React from 'react';
import { CATEGORY_IMAGE_DATA } from '../assets/data/categoryData';
import ParentDiv from '../components/ParentDiv';

const CategorySection = () => {
    return (
        <ParentDiv childClassName='flex flex-col'>
            <div className='mb-[40px] border-b-2 border-black text-[32px] w-fit'>Product Category</div>
            <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-[40px]'>
                {CATEGORY_IMAGE_DATA?.map((data, index) => {
                    return (

                        <div
                            key={index}
                            onClick={() => {}}
                            style={{
                                backgroundImage: `url(${data?.image})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                            }}
                            className='h-[420px] w-full group'
                        >
                            <div className='h-full w-full bg-transparent cursor-pointer hover:bg-black/30 duration-1000 category-item flex justify-center items-center'>
                                <div className='text-white text-[32px] md:text-[40px] text-center w-full animation-text'>
                                    {data?.content}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </ParentDiv>
    );
};

export default CategorySection;
