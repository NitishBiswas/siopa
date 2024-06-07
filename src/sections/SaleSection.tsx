import React, { useState } from 'react';
import { sofaSaleData } from '../assets/data/sofaSaleData';
import ParentDiv from '../components/ParentDiv';

const SaleSection = () => {
    const [activeImage, setActiveImage] = useState<number | null>(null);

    return (
        <ParentDiv parentClassName='bg-[#292D32] mt-[120px]' childClassName='w-full h-full mb-[50px]'>
            <div className='w-fit mb-[40px] border-b-2 border-white text-[32px] text-white'>SIOPA SALE</div>
            <div className="flex gap-x-[40px] justify-between">
                {
                    sofaSaleData?.map((item, index) => {
                        return (
                            <div onMouseEnter={() => setActiveImage(index)} onMouseLeave={() => setActiveImage(null)} className={`h-[400px] relative ${activeImage === null ? "w-[33%]" : activeImage === index ? "w-[70%]" : "w-[15%]"} duration-1000 transition-all`} key={index}>
                                <img src={item?.image} alt={item?.name} className='object-cover w-full h-full' />
                                <div className={`${activeImage !== index ? "opacity-0" : "opacity-100"} duration-1000 transition-all h-[50px] w-[50px] md:h-[80px] md:w-[80px] xl:h-[140px] xl:w-[140px] rounded-full absolute top-5 right-5 bg-white flex flex-col justify-center items-center text-[16px] lg:text-[20px] xl:text-[32px] text-center font-bold`}>
                                    <div>UP</div>
                                    <div>{item?.saleDiscount}</div>
                                </div>
                                <div className={`marquee-container bg-black/20 backdrop-blur-sm p-1 ${activeImage !== index ? "opacity-0" : "opacity-100"} duration-1000 transition-all absolute bottom-5 flex flex-col justify-center items-center text-[16px] w-full text-white`}>
                                    <div onClick={() => {}} className='marquee-text underline cursor-pointer text-center'>Save up to {item?.saleDiscount} on complete {item?.name} sets with combo deal.</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </ParentDiv>
    );
};

export default SaleSection;
