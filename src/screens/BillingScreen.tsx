import React, { useState } from 'react'
import ParentDiv from '../components/ParentDiv'
import InstagramPostSection from '../sections/InstagramPostSection'
import { productList } from '../assets/data/productData'
import ProductCard from '../components/ProductCard'
import BillingDetails from '../sections/BillingDetails'
import ShippingDetails from '../sections/ShippingDetails'

const BillingScreen = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [countryName, setCountryName] = useState("");
    const [address, setAddress] = useState("");
    const [cityName, setCityName] = useState("");
    const [districtName, setDistrictName] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    return (
        <ParentDiv>
            <div className='w-full flex flex-col md:flex-row gap-[40px]'>
                <BillingDetails
                    address={address}
                    cityName={cityName}
                    companyName={companyName}
                    countryName={countryName}
                    districtName={districtName}
                    email={email}
                    firstName={firstName}
                    lastName={lastName}
                    phone={phone}
                    setAddress={setAddress}
                    setCityName={setCityName}
                    setCompanyName={setCompanyName}
                    setCountryName={setCountryName}
                    setDistrictName={setDistrictName}
                    setEmail={setEmail}
                    setFirstName={setFirstName}
                    setLastName={setLastName}
                    setPhone={setPhone}
                    setZipCode={setZipCode}
                    zipCode={zipCode}
                />
                <ShippingDetails />
            </div>
            <div className='mb-[40px] border-b-2 border-black text-[32px] w-fit mt-[120px]'>Related Products</div>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-x-[40px] gap-y-[60px]'>
                {productList?.slice(0, 4)?.map((item, index) => {
                    return (
                        <ProductCard data={item} key={index} />
                    )
                })}
            </div>
            <InstagramPostSection />
        </ParentDiv>
    )
}

export default BillingScreen