import React, { useState } from 'react'
import { checkoutCartList } from '../assets/data/productData';
import CheckBox from '../components/CheckBox';

const ShippingDetails = () => {
    const [checkedValue, setCheckedValue] = useState('');
    const [agree, setAgree] = useState(false);
    const bankInfo = "Make your payment directly into our bank account. Please use your Order ID as the payment reference.";
    const warning = "Your personal data will be used to process your order, support your experience throughout this wabsite, and for other purposes.";
    const discount = 10;
    const vat = 5;
    const shippingCost = 50;

    const calculateTotalPrice = () => {
        let totalPrice = 0;

        checkoutCartList?.forEach(item => {
            totalPrice += item.price * item?.quantity;
        });

        return totalPrice;
    };
    return (
        <div className='w-full border-[1px] p-[20px] h-fit'>
            <div className='mb-[20px]'>Your Order</div>
            <div className='w-full'>
                {checkoutCartList?.map((item, index) => {
                    return (
                        <div key={index} className={`w-full flex justify-between items-center gap-[9px] border-b-[1px] pb-[10px] pt-[10px] ${index === 0 ? "border-t-[1px]" : ""}`}>
                            <img src={item?.image} alt={item?.name} className='w-[44px] h-[44px] object-cover' />
                            <div className='text-[#0B0D17] w-full overflow-hidden'>
                                {item?.name}
                            </div>
                            <div className='flex w-full justify-between gap-[9px]'>
                                <div>x</div>
                                <div>{item?.quantity}</div>
                                <div>=</div>
                                <div>$ {item?.quantity * item.price}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='w-full mt-[40px]'>
                <div className='my-[16px] flex justify-between items-center text-[14px] text-[#0B0D17]'>
                    <div>SUBTOTAL</div>
                    <div>$ {calculateTotalPrice()}</div>
                </div>
                <div className='bg-[#EBEBEB] p-[10px] text-[14px] text-[#0B0D17] flex flex-col gap-[10px]'>
                    <div>Shipping Details</div>
                    <div className='flex justify-between items-center'>
                        <div>Shipping Cost</div>
                        <div>$ {shippingCost}</div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div>Vat</div>
                        <div>$ {vat}</div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div>Discount</div>
                        <div>$ {discount}</div>
                    </div>
                </div>
                <div className='flex justify-between items-center mt-[20px] font-semibold border-t-[1px] pt-[5px]'>
                    <div>Total</div>
                    <div>$ {(calculateTotalPrice() + shippingCost + vat - discount).toFixed(2)}</div>
                </div>
                <div className='mt-[20px] flex flex-col gap-[20px]'>
                    <CheckBox title='Direct bank transfer' value={checkedValue === 'bank' ? 'bank' : ''} setValue={() => {
                        if (checkedValue === 'bank') {
                            setCheckedValue("");
                        } else {
                            setCheckedValue('bank');
                        }
                    }} />
                    <div className='text-[14px] text-justify text-[#7E7F7C] px-[26px]'>
                        {bankInfo}
                    </div>
                    <CheckBox title='Cash on delivery' value={checkedValue === 'cash_on' ? 'cash_on' : ''} setValue={() => {
                        if (checkedValue === 'cash_on') {
                            setCheckedValue("");
                        } else {
                            setCheckedValue('cash_on');
                        }
                    }} />
                    <div className='text-[#C31A12] text-[12px] text-justify bg-[#EBEBEB] p-[10px] mt-[10px]'>
                        {warning}
                    </div>
                    <CheckBox title='I HAVE READ AND AGREE TO THE WEBSITE TERMS AND CONDITIONS.' value={agree ? 'agree' : ''} setValue={() => {
                        if (agree) {
                            setAgree(false);
                        } else {
                            setAgree(true);
                        }
                    }} />
                </div>
                <div onClick={() => {}} className='cursor-pointer h-[48px] w-full flex justify-center items-center text-white bg-[#0B0D17] hover:bg-[#0B0D17]/80 mt-[20px]'>Place Order</div>
            </div>
        </div>
    )
}

export default ShippingDetails