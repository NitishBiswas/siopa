import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard, { IProductCard } from '../components/ProductCard';
import { productList } from '../assets/data/productData';
import CartSection from '../sections/CartSection';
import ParentDiv from '../components/ParentDiv';
import ProductDetailsSection from '../sections/ProductDetailsSection';
import PolicySection from '../sections/PolicySection';
import InstagramPostSection from '../sections/InstagramPostSection';
import ReviewSection from '../sections/ReviewSection';
import QuestionsSection from '../sections/QuestionsSection';

const ProductDetailsScreen: React.FC = () => {
    const param = useParams<{ id: string }>();
    const [productDetails, setProductDetails] = useState<IProductCard | null>(null);

    useEffect(() => {
        setProductDetails(productList?.find(item => item?.id === Number(param?.id)) || null);
    }, [param]);

    if (!productDetails) {
        // Handle the case where productDetails is still null or undefined
        return <div>Loading...</div>;
    }

    return (
        <ParentDiv>
            <CartSection productDetails={productDetails} />
            <ProductDetailsSection productDetails={productDetails?.fullDescription} deliveryAndReturnDetails={productDetails?.deliveryAndReturnDescription} />
            <div className='mb-[40px] border-b-2 border-black text-[32px] w-fit mt-[120px]'>Related Products</div>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-x-[40px] gap-y-[60px]'>
                {productList?.slice(0, 4)?.map((item, index) => {
                    return (
                        <ProductCard data={item} key={index} />
                    )
                })}
            </div>
            <ReviewSection reviewList={productDetails?.reviews} />
            <QuestionsSection questions={productDetails?.questionList} />
            <PolicySection />
            <InstagramPostSection />
        </ParentDiv>
    );
};

export default ProductDetailsScreen;
