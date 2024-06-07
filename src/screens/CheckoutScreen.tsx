import React from 'react'
import ParentDiv from '../components/ParentDiv'
import { productList } from '../assets/data/productData'
import ProductCard from '../components/ProductCard'
import InstagramPostSection from '../sections/InstagramPostSection'
import CheckoutSection from '../sections/CheckoutSection'

const CheckoutScreen = () => {
    return (
        <ParentDiv>
            <CheckoutSection />
            <div className='mb-[40px] border-b-2 border-black text-[32px] w-fit mt-[120px]'>Related Products</div>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-x-[40px] gap-y-[60px]'>
                {productList?.slice(0, 4)?.map((item, index) => {
                    return (
                        <ProductCard data={item} key={index} />
                    )
                })}
            </div>
            <InstagramPostSection />
        </ParentDiv>
    )
}

export default CheckoutScreen