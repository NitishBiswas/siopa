import React, { useState } from "react";
import MagnifyImage from "../components/MagnifyImage";
import ImageSlider from "../components/ImageSlider";
import { IProductCard } from "../components/ProductCard";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Add, Minus } from "iconsax-react";

const CartSection = ({ productDetails }: { productDetails: IProductCard }) => {
    const [largeImage, setLargeImage] = useState(productDetails?.images[0]);
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-[40px]">
            <div className="flex flex-col gap-[40px]">
                <div className="h-[560px] w-full overflow-hidden">
                    <MagnifyImage
                        imageUrl={largeImage || ""}
                        isWishlisted={productDetails?.isWishlisted}
                    />
                </div>
                <div className="w-full">
                    <ImageSlider
                        images={productDetails?.images}
                        setLargeImage={setLargeImage}
                    />
                </div>
            </div>
            <div className="mt-[33px]">
                <div className="flex gap-[12px]">
                    <Rating
                        style={{ maxWidth: 100 }}
                        value={productDetails?.totalRating}
                        readOnly={true}
                    /><Rating
                        style={{ maxWidth: 100 }}
                        value={productDetails?.totalRating}
                        readOnly={true}
                    />
                    <div className="text-[#0B0D17]">
                        {productDetails?.totalRating} / 5.0{" "}
                        <span className="text-[#7E7F7C]">({productDetails?.totalReviews} reviews)</span>
                    </div>
                </div>
                <div className="text-[32px] text-[#0B0D17] mt-[8px]">{productDetails?.name}</div>
                <div className="text-[20px] text-[#0B0D17] mt-[20px]">$ {productDetails?.price}</div>
                <div className="text-[16px] text-[#7E7F7C] mt-[24px] text-justify">{productDetails?.fullDescription}</div>

                <div className="text-[#0B0D17] text-[20px] mt-[16px]">Quantity</div>
                <div className="mt-[14px] h-[60px] w-[200px] border  flex justify-between gap-[40px] p-[18px] items-center">
                    <div onClick={() => {
                        if (quantity > 1) {
                            setQuantity(quantity - 1);
                        }
                    }} className={`text-[#7E7F7C] hover:text-primary ${quantity > 1 ? "cursor-pointer" : "cursor-not-allowed"}`}>
                        <Minus size="24" />
                    </div>
                    <div className="text-[#0B0D17] text-[20px] select-none">
                        {quantity}
                    </div>
                    <div className="text-[#7E7F7C] hover:text-primary cursor-pointer" onClick={() => setQuantity(quantity + 1)} >
                        <Add size="24" />
                    </div>
                </div>
                <div onClick={() => {}} className="bg-[#0B0D17] text-white w-[170px] h-[60px] flex justify-center items-center cursor-pointer hover:bg-[#0B0D17]/80 transition-all mt-[30px]">Add to Cart</div>

            </div>
        </div>
    );
};

export default CartSection;
