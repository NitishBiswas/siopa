import React, { useEffect } from 'react'
import HeroSection from '../sections/HeroSection'
import { SLIDER_IMAGE_DATA } from '../assets/data/sliderData'
import CategorySection from '../sections/CategorySection'
import { productList } from '../assets/data/productData'
import ProductCard from '../components/ProductCard'
import SaleSection from '../sections/SaleSection'
import PolicySection from '../sections/PolicySection'
import InstagramPostSection from '../sections/InstagramPostSection'
import { useNavigate } from 'react-router-dom'
import ParentDiv from '../components/ParentDiv'

const HomeScreen = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <HeroSection sliderData={SLIDER_IMAGE_DATA} />
            <CategorySection />
            <ParentDiv childClassName='!mt-[120px] flex flex-col'>
                <div className='mb-[40px] border-b-2 border-black text-[32px] w-fit'>Our Products</div>
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-x-[40px] gap-y-[60px]'>
                    {productList?.slice(0, 8)?.map((item, index) => {
                        return (
                            <ProductCard data={item} key={index} />
                        )
                    })}
                </div>
                <div onClick={() => navigate('/products')} className='w-[190px] h-[70px] bg-black text-white mt-[60px] cursor-pointer hover:bg-black/70 duration-1000 text-[18px] flex justify-center items-center'>View More</div>
            </ParentDiv>
            <SaleSection />
            <PolicySection />
            <InstagramPostSection />
        </>
    )
}

export default HomeScreen