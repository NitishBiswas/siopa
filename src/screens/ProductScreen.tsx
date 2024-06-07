import React, { useEffect, useState } from 'react'
import PolicySection from '../sections/PolicySection'
import InstagramPostSection from '../sections/InstagramPostSection'
import { productList } from '../assets/data/productData'
import ProductCard from '../components/ProductCard'
import CustomDropdown from '../components/CustomDropdown'
import Pagination from '../components/Pagination'
import ParentDiv from '../components/ParentDiv'

const ProductScreen = () => {
    const [productData, setProductData] = useState(productList);
    const [selectedFilterValue, setSelectedFilterValue] = useState("All");
    const [selectedPage, setSelectedPage] = useState(1);
    const [totalPage, setTotalPage] = useState(10);
    const totalProducts = 120;
    const dropdownOptions = ['All', 'Indoor', 'Outdoor'];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <ParentDiv>
                <div className='mb-[60px] w-full h-[44px] bg-[#EBEBEB] flex flex-col sm:flex-row justify-between items-center gap-5 px-[14px]'>
                    <div className='text-[#5f5f5f] text-[14px]'>There Are {totalProducts} Products.</div>
                    <div>
                        <CustomDropdown options={dropdownOptions} selectedFilterValue={selectedFilterValue} setSelectedFilterValue={setSelectedFilterValue} />
                    </div>
                </div>
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-x-[40px] gap-y-[60px]'>
                    {productData?.map((item, index) => {
                        return (
                            <ProductCard data={item} key={index} />
                        )
                    })}
                </div>
                <div className='w-full flex justify-center mt-[40px]'>
                    <Pagination totalPage={totalPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                </div>
            </ParentDiv>
            <PolicySection />
            <InstagramPostSection />
        </div>
    )
}

export default ProductScreen