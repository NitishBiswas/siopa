import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface IImageSlider {
    images: string[];
    setLargeImage: (image: string) => void;
}

const ImageSlider = ({ images, setLargeImage }: IImageSlider) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        focusOnSelect: false,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 0
                }
            }
        ]
    };
    return (
        <div>
            <Slider {...settings}>
                {images?.map((item, index) => {
                    return (
                        <div onMouseEnter={() => setLargeImage(item)} key={index} className='h-[168px] w-[168px] overflow-hidden px-[20px]'>
                            <img src={item} key={index} className={`h-full w-full overflow-hidden object-cover border hover:border-black`} />
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default ImageSlider