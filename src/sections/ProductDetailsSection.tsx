import React, { useState } from 'react';
import ParentDiv from '../components/ParentDiv';
import { fitsAndFeatures } from '../assets/data/productData';

interface IProductDetailsSection {
    productDetails: string;
    deliveryAndReturnDetails: string;
}

const ProductDetailsSection: React.FC<IProductDetailsSection> = ({ productDetails, deliveryAndReturnDetails }) => {
    const [activeTab, setActiveTab] = useState<'product' | 'delivery'>('product');

    return (
        <ParentDiv childClassName='!mt-[120px]'>
            <div className='text-[#0B0D17] text-[16px] sm:text-[24px] md:text-[32px] flex justify-center items-center gap-x-[24px]'>
                <div
                    className={`tab ${activeTab === 'product' ? 'active' : ''}`}
                    onClick={() => setActiveTab('product')}
                >
                    Product Details
                </div>
                <div
                    className={`tab ${activeTab === 'delivery' ? 'active' : ''}`}
                    onClick={() => setActiveTab('delivery')}
                >
                    Delivery and return
                </div>
            </div>
            <div className='mt-[60px] flex flex-col md:flex-row justify-between h-fit'>
                <div className='w-full text-justify border-b-[1px] pb-[40px] md:border-b-0 md:pb-0 md:border-r-[1px] md:pr-[40px]'>
                    <div className='mb-[30px] text-[20px] text-[#0B0D17] font-semibold'>Description</div>
                    <div>{activeTab === 'product' ? productDetails : deliveryAndReturnDetails}</div>
                </div>
                <div className='w-full text-justify pt-[40px] md:pt-0 md:pl-[40px]'>
                    <div className='mb-[30px] text-[20px] text-[#0B0D17] font-semibold'>Fits and Features</div>
                    <div>
                        {fitsAndFeatures?.map((item, index) => {
                            return (
                                <div key={index}>{index + 1}. {item}</div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </ParentDiv>
    );
};

export default ProductDetailsSection;
