import React, { useState } from 'react'
import ParentDiv from '../components/ParentDiv'
import { Question } from '../components/ProductCard'
import { ArrowDown2, ArrowUp2 } from 'iconsax-react';

const QuestionsSection = ({ questions }: { questions: Question[] }) => {
    const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

    return (
        <ParentDiv childClassName='!mt-[120px]'>
            <div className='text-[#0B0D17] text-[32px]'>Frequent Question Answers</div>
            <div className='text-[#7E7F7C] mt-[30px]'>Solve All Your Problem About Our Product</div>
            <div className='mt-[72px] w-full'>
                {questions?.map((item, index) => {
                    return (
                        <div key={index} className={`w-full border-t-[1px] border-t-[#7E7F7C] py-[24px] ${index + 1 === questions?.length ? "border-b-[1px] border-b-[#7E7F7C]" : ""}`}>
                            <div onClick={() => {
                                if (activeQuestion !== index) {
                                    setActiveQuestion(index)
                                } else {
                                    setActiveQuestion(null);
                                }
                            }} className='pl-[20px] md:pl-[100px] cursor-pointer text-[20px] text-[#0B0D17] font-semibold flex justify-between items-center'>
                                <div>{index + 1}. {item?.question}</div>
                                {activeQuestion === index ? <ArrowUp2 size="20" color="#0B0D17" /> : <ArrowDown2 size="20" color="#0B0D17" />}
                            </div>
                            <div className={`pl-[20px] md:pl-[100px] text-justify text-[#7E7F7C] mt-[20px] ${activeQuestion === index ? "flex" : "hidden"} transition-all`}>{item?.answer}</div>
                        </div>
                    )
                })}
            </div>
        </ParentDiv>
    )
}

export default QuestionsSection