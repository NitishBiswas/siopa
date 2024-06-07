import React from 'react'
import { navigatorData } from '../assets/data/navigatorData'
import { useLocation, useNavigate } from 'react-router-dom'

const SideNav = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div className={`flex flex-col gap-2`}>
            {navigatorData?.map((item, index) => {
                return (
                    <div onClick={() => navigate(item?.path)} key={index} className={`w-full p-2 text-[20px] lg:text-[24px] hover:bg-primary hover:text-white duration-1000 cursor-pointer ${location?.pathname === item?.path ? "bg-primary text-white" : ""}`}>{item?.name}</div>
                )
            })}
        </div>
    )
}

export default SideNav