import React from 'react'
import { navigatorData, rights } from '../assets/data/navigatorData'
import { useNavigate } from 'react-router-dom'
import ParentDiv from '../components/ParentDiv';

const FooterSection = () => {
  const navigate = useNavigate();

  return (
    <ParentDiv parentClassName='bg-[#292D32] !mt-[60px] !h-full' childClassName='!h-full !my-[26px] flex flex-col lg:!flex-row justify-between !items-center gap-y-[40px]'>
      <div className='flex flex-wrap w-fit gap-x-[40px] justify-between'>
        {navigatorData?.map((item, index) => {
          return (
            <div onClick={() => navigate(item?.path)} key={index} className='text-white text-[14px] cursor-pointer hover:text-primary'>{item?.name}</div>
          )
        })}
      </div>
      <div className='text-white text-[14px]'>{rights}</div>
    </ParentDiv>
  )
}

export default FooterSection