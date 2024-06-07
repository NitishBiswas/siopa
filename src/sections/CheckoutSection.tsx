import React, { useEffect, useState } from 'react'
import { addedCartList } from '../assets/data/productData'
import { Add, Minus, Trash } from 'iconsax-react'
import { useNavigate } from 'react-router-dom';

interface IProductQuantity {
    productId: number;
    quantity: number;
}

const CheckoutSection = () => {
    const [productQuantities, setProductQuantities] = useState<IProductQuantity[]>([]);
    const navigate = useNavigate();

    const discount = 10;
    const vat = 5;
    const shippingCost = 50;

    useEffect(() => {
        const initialQuantities = addedCartList?.map(item => ({ productId: item.id, quantity: 1 })) || [];
        setProductQuantities(initialQuantities);
    }, [addedCartList]);

    const handleQuantityChange = (productId: number, newQuantity: number) => {
        setProductQuantities(prevQuantities => {
            const updatedQuantities = [...prevQuantities];
            const index = updatedQuantities.findIndex(item => item.productId === productId);

            if (index !== -1) {
                updatedQuantities[index].quantity = newQuantity > 0 ? newQuantity : 1;
            }

            return updatedQuantities;
        });
    };

    const calculateTotalPrice = () => {
        let totalPrice = 0;

        addedCartList?.forEach(item => {
            const product = productQuantities.find(p => p.productId === item.id);
            const quantity = product ? product.quantity : 1;
            totalPrice += item.price * quantity;
        });

        return totalPrice;
    };

    return (
        <div className='w-full flex flex-col lg:flex-row gap-[40px]'>
            <div className='w-full lg:w-[70%] flex flex-col'>
                {addedCartList?.map((item, index) => {
                    const productId = item.id;
                    const product = productQuantities.find(p => p.productId === productId);
                    const quantity = product ? product.quantity : 1;

                    return (
                        <div key={index} className={`w-full flex flex-col gap-[20px] sm:flex-row border-b-[1px]  pb-[10px] pt-[10px] ${index === 0 ? "border-t-[1px]" : ""}`}>
                            <div className='flex w-full sm:w-[50%] gap-[9px]'>
                                <img src={item?.image} alt={item?.name} className='w-[100px] h-[100px] object-cover' />
                                <div className='text-[#0B0D17] text-[20px] w-[calc(100%-100px)] overflow-hidden'>
                                    {item?.name}
                                </div>
                            </div>
                            <div className='flex w-full sm:w-[50%] items-center justify-between'>
                                <div className="mt-[14px] h-[60px] w-[200px] border  flex justify-between gap-[40px] p-[18px] items-center">
                                    <div onClick={() => {
                                        if (quantity > 1) {
                                            handleQuantityChange(productId, quantity - 1);
                                        }
                                    }} className={`text-[#7E7F7C] hover:text-primary ${quantity > 1 ? "cursor-pointer" : "cursor-not-allowed"}`}>
                                        <Minus size="24" />
                                    </div>
                                    <div className="text-[#0B0D17] text-[20px] select-none">
                                        {quantity}
                                    </div>
                                    <div className="text-[#7E7F7C] hover:text-primary cursor-pointer" onClick={() => handleQuantityChange(productId, quantity + 1)} >
                                        <Add size="24" />
                                    </div>
                                </div>
                                <div className='text-[#7E7F7C]'>$ {item?.price * quantity}</div>
                                <div onClick={() => {}} className='w-fit text-[#7E7F7C] hover:text-red-500 cursor-pointer transition-all'>
                                    <Trash size="20" />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='w-full lg:w-[30%] border-[1px]  p-[20px]'>
                <div className='text-[#0B0D17] text-[20px]'>Cart Details</div>
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
                    <div className='flex justify-between items-center mt-[40px] font-semibold'>
                        <div>Total</div>
                        <div>$ {(calculateTotalPrice() + shippingCost + vat - discount).toFixed(2)}</div>
                    </div>
                </div>
                <div onClick={() => navigate('/checkout/billing')} className='cursor-pointer h-[48px] w-full flex justify-center items-center text-white bg-[#0B0D17] hover:bg-[#0B0D17]/80 mt-[20px]'>Proceed To Checkout</div>
            </div>
        </div>
    )
}

export default CheckoutSection;