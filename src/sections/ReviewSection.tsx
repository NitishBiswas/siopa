import React, { useState } from 'react'
import ParentDiv from '../components/ParentDiv'
import { Review } from '../components/ProductCard';
import ReviewCard from '../components/ReviewCard';

const ReviewSection = ({ reviewList }: { reviewList: Review[] }) => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [rating, setRating] = useState<"1 Star" | "2 Stars" | "3 Stars" | "4 Stars" | "5 Stars">("5 Stars");
    const [review, setReview] = useState("");

    return (
        <ParentDiv childClassName='flex flex-col lg:flex-row !mt-[120px] !items-start'>
            <div className='w-full lg:w-[30%] border-b-[1px] pb-[40px] lg:border-b-0 lg:pb-0 lg:border-r-[1px] lg:pr-[40px]'>
                <div className='text-[32px] text-[#0B0D17]'>Your Review</div>
                <div className='text-[#7E7F7C] mt-[30px] mb-[60px]'>About mordern hanging bronze light</div>
                <div className='flex flex-col gap-[60px]'>
                    <input
                        className='border-b focus:border-primary outline-none p-2'
                        type='text'
                        placeholder='Your full name'
                        onChange={e => setFullName(e.target.value)}
                        value={fullName}
                    />
                    <input
                        className='border-b focus:border-primary outline-none p-2'
                        type='email'
                        placeholder='Your email'
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                    <select className='border-b focus:border-primary outline-none p-2 bg-transparent' onChange={e => setRating(e.target.value as typeof rating)} value={rating}>
                        <option value='1 Star'>1 Star</option>
                        <option value='2 Star'>2 Stars</option>
                        <option value='3 Star'>3 Stars</option>
                        <option value='4 Star'>4 Stars</option>
                        <option value='5 Star'>5 Stars</option>
                    </select>
                    <textarea onChange={e => setReview(e.target.value)} value={review} className='border-b focus:border-primary outline-none p-2' rows={4} placeholder='This product is ...'></textarea>

                    <div className='bg-[#0B0D17] hover:bg-[#0B0D17]/80 transition-all text-white cursor-pointer flex justify-center items-center h-[48px]'>Submit</div>
                </div>
            </div>
            <div className='w-full h-full lg:w-[70%] pt-[40px] lg:pt-0 lg:pl-[40px] flex flex-col gap-[30px] overflow-y-auto'>
                {reviewList?.map((item, index) => {
                    return (
                        <ReviewCard data={item} key={index} />
                    )
                })}
            </div>
        </ParentDiv>
    )
}

export default ReviewSection