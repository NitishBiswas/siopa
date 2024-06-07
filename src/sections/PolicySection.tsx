import { I24Support, Refresh, SecuritySafe, Truck } from 'iconsax-react';
import React from 'react'
import PolicyCard from '../components/PolicyCard';
import ParentDiv from '../components/ParentDiv';

export const policyData = [
    {
        id: 1,
        title: "Free shipping",
        subTitle: "Around the world",
        icon: <Truck size="32" color="#292D32" />,
    },
    {
        id: 2,
        title: "90 Days Return",
        subTitle: "90 days return policy",
        icon: <Refresh size="32" color="#292D32" />,
    },
    {
        id: 3,
        title: "Secure Payments",
        subTitle: "100% Secure & Safe",
        icon: <SecuritySafe size="32" color="#292D32" />,
    },
    {
        id: 4,
        title: "24/7 support",
        subTitle: "Endless Service",
        icon: <I24Support size="32" color="#292D32" />,
    },
];

const PolicySection = () => {
    return (
        <ParentDiv>
            <div className='w-full grid grid-cols-2 lg:grid-cols-4 gap-5 justify-center'>
                {policyData?.map((item, index) => {
                    return (
                        <PolicyCard key={index} data={item} />
                    )
                })}
            </div>
        </ParentDiv>
    )
}

export default PolicySection