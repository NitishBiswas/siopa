import React, { useEffect } from 'react'
import ParentDiv from '../components/ParentDiv';
import PAGE_NOT_FOUND from '../assets/images/404.png';

const NotFoundScreen = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <ParentDiv parentClassName='!h-[calc(100vh-221px)]'>
            <div className='h-[calc(100%-120px)] w-full flex justify-center items-center'>
                <img src={PAGE_NOT_FOUND} className='h-full w-full md:h-[50%] md:w-[50%] object-contain' />
            </div>
        </ParentDiv>
    )
}

export default NotFoundScreen