import React, { useState } from "react";
import HeroSlider, { Slide, Overlay } from "hero-slider";
import ParentDiv from "../components/ParentDiv";

interface IHeroSection {
    sliderData: {
        image: string;
        content: string;
    }[];
}

const HeroSection = ({ sliderData }: IHeroSection) => {
    const [sliderNumber, setSliderNumber] = useState(1);

    return (
        <HeroSlider
            autoplay
            height={"80vh"}
            manager={{
                isMobile: true,
            }}
            controller={{
                slidingDelay: 0,
                slidingDuration: 3000,
                initialSlide: 1,
                onSliding(activeSlide, prevSlide) {
                    setSliderNumber(activeSlide);
                },
            }}
            accessibility={{
                shouldDisplayButtons: false,
            }}
            style={{
                backgroundColor: "rgba(0, 0, 0, 0.33)",
                position: "relative",
            }}
        >
            {sliderData?.map((item, index) => {
                return (
                    <Slide
                        key={index}
                        background={{
                            backgroundImageSrc: item?.image,
                        }}
                    />
                );
            })}
            <Overlay>
                <div
                    className="bg-black/30 flex h-full w-full justify-center items-center"
                >
                    <div className="text-white text-[30px] lg:text-[40px] px-20 lg:px-0 text-center w-full lg:w-[680px]">{sliderData[sliderNumber - 1]?.content}</div>
                </div>
            </Overlay>
            <Overlay>
                <ParentDiv parentClassName="absolute bottom-[30px]" childClassName="flex !flex-row gap-[5px] lg:gap-[15px]">
                    {sliderData?.map((item, index) => (
                        <div
                            key={index}
                            className={`rounded-full h-[40px] w-[40px] flex items-center justify-center border border-dotted ${sliderNumber === index + 1 ? "border-black border-[2px]" : "border-black border-0"}`}
                        >
                            <div
                                className={`h-[10px] w-[10px] rotate-45 ${index + 1 === sliderNumber ? "animated-element bg-black" : "bg-white"}`}
                            />
                        </div>
                    ))}
                </ParentDiv>
            </Overlay>
        </HeroSlider>
    );
};

export default HeroSection;
