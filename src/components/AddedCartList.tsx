import React from 'react'
import { addedCartList } from '../assets/data/productData'
import { Trash } from 'iconsax-react'
import { useNavigate } from 'react-router-dom'

const AddedCartList = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='flex flex-col gap-[20px] h-[70vh] overflow-y-auto custom-scrollbar'>
                {addedCartList?.map((item, index) => {
                    return (
                        <div key={index} className='flex justify-between items-center px-0 sm:px-[20px] w-full'>
                            <div className='flex gap-[9px] w-[90%]'>
                                <img src={item?.image} alt={item?.name} className='w-[64px] h-[68px] object-cover' />
                                <div className='w-[calc(100%-64px)] overflow-hidden'>
                                    <div className='w-[calc(100%-64px)] truncate'>{item?.name}</div>
                                    <div className='w-[calc(100%-64px)]'>{item?.price}</div>
                                </div>
                            </div>
                            <div onClick={() => {}} className='w-fit text-[#7E7F7C] hover:text-red-500 cursor-pointer transition-all'>
                                <Trash size="20" />
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='mt-[40px] h-[1px] w-full bg-[#7E7F7C]' />
            <div className='flex justify-end w-full'>
                <div onClick={() => navigate('/checkout')} className='text-white text-[20px] cursor-pointer bg-[#0B0D17] hover:bg-[#0B0D17]/80 h-[60px] w-[170px] flex items-center justify-center mt-[20px]'>
                    Checkout
                </div>
            </div>
        </>
    )
}

export default AddedCartList