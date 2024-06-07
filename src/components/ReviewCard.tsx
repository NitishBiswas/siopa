import React from 'react'
import { Review } from './ProductCard'
import { Rating } from '@smastrom/react-rating'
import moment from 'moment'
import { ProfileCircle } from 'iconsax-react'

const ReviewCard = ({ data }: { data: Review }) => {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <div className='flex gap-[14px]'>
                    <div>
                        {data?.reviewerImage ? <img src={data?.reviewerImage} alt={data?.reviewerName} className='h-[44px] w-[44px] rounded-full overflow-hidden' /> : <ProfileCircle size="44" color="#D9AF8B" />}
                    </div>
                    <div>
                        <div className='text-[#0B0D17]'>{data?.reviewerName}</div>
                        <div className='text-[#7E7F7C]'>{moment(data?.date).format('LL')}</div>
                    </div>
                </div>
                <div>
                    <Rating
                        style={{ maxWidth: 100 }}
                        value={data?.reviewerRating}
                        readOnly={true}
                    />
                </div>
            </div>
            <div className='text-justify text-[#7E7F7C] mt-[24px]'>{data?.review}</div>
        </div>
    )
}

export default ReviewCard