import { Heart } from "iconsax-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ParentSideBar from "./ParentSideBar";
import AddedCartList from "./AddedCartList";

export interface IProductCard {
    id: number;
    name: string;
    category: string;
    price: number;
    images: string[];
    shortDescription: string;
    fullDescription: string;
    deliveryAndReturnDescription: string;
    totalRating: number;
    totalRatingCount: number;
    totalSold: number;
    totalWatched: number;
    isWishlisted: boolean;
    stockStatus: string;
    totalReviews: number;
    reviews: Review[];
    questionList: Question[];
}

export interface Review {
    reviewerId: number;
    reviewerName: string;
    reviewerImage: string;
    review: string;
    reviewerRating: number;
    date: Date;
}

export interface Question {
    id: number;
    question: string;
    answer: string;
}

const ProductCard = ({
    data
}: { data: IProductCard }) => {
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return <div className="">
        <div className="h-[360px] relative group" style={{
            backgroundImage: `url(${data?.images[0]})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }}>
            <div className={`text-[10px] w-fit absolute top-3 left-3 px-3 py-1 ${data?.stockStatus === "SELL" ? "bg-black text-white" : "bg-white"}`}>{data?.stockStatus}</div>
            <div className="w-full h-full bg-transparent group-hover:bg-black/30 duration-1000 relative product-card">
                <div className="absolute w-full bottom-5 flex justify-center add-cart">
                    <div onClick={() => setSidebarOpen(true)} className="bg-white w-fit p-3 cursor-pointer hover:scale-105 duration-1000">Add to Cart</div>
                </div>
                <div onClick={() => {}} className="absolute top-5 right-5 bg-white w-[40px] h-[40px] rounded-full flex justify-center items-center cursor-pointer wish-item">
                    {data?.isWishlisted ? <Heart size="20" color="#FF8A65" variant="Bold" /> : <Heart size="20" color="#FF8A65" />}
                </div>
            </div>
        </div>
        <div>
            <div onClick={() => navigate(`/product-details/${data?.id}`)} className="text-[20px] mt-5 cursor-pointer hover:underline hover:text-primary duration-500 transition-all">{data?.name}</div>
            <div className="text-[14px] mt-2">$ {data?.price}</div>
        </div>
        <ParentSideBar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)}>
            <AddedCartList />
        </ParentSideBar>
    </div>;
};

export default ProductCard;
