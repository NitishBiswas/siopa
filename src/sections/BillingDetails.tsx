import React, { useState } from 'react'

interface IBillingInput {
    firstName: string;
    setFirstName: (value: string) => void;
    lastName: string;
    setLastName: (value: string) => void;
    companyName: string;
    setCompanyName: (value: string) => void;
    countryName: string;
    setCountryName: (value: string) => void;
    address: string;
    setAddress: (value: string) => void;
    cityName: string;
    setCityName: (value: string) => void;
    districtName: string;
    setDistrictName: (value: string) => void;
    zipCode: string;
    setZipCode: (value: string) => void;
    phone: string;
    setPhone: (value: string) => void;
    email: string;
    setEmail: (value: string) => void;
}

const BillingDetails = ({
    address, cityName, companyName, countryName, districtName, email, firstName, lastName, phone, setAddress, setCityName, setCompanyName, setCountryName, setDistrictName, setEmail, setFirstName, setLastName, setPhone, setZipCode, zipCode
}: IBillingInput) => {
    return (
        <div className='text-[#0B0D17] flex flex-col gap-[40px] w-full'>
            <div className='text-[20px]'>Billing Details</div>
            <input
                className='border-b focus:border-primary outline-none p-2'
                type='text'
                placeholder='First Name'
                onChange={e => setFirstName(e.target.value)}
                value={firstName}
            />
            <input
                className='border-b focus:border-primary outline-none p-2'
                type='text'
                placeholder='Last Name'
                onChange={e => setLastName(e.target.value)}
                value={lastName}
            />
            <input
                className='border-b focus:border-primary outline-none p-2'
                type='text'
                placeholder='Company Name (optional)'
                onChange={e => setCompanyName(e.target.value)}
                value={companyName}
            />
            <input
                className='border-b focus:border-primary outline-none p-2'
                type='text'
                placeholder='Country / Region'
                onChange={e => setCountryName(e.target.value)}
                value={countryName}
            />
            <input
                className='border-b focus:border-primary outline-none p-2'
                type='text'
                placeholder='Street Address'
                onChange={e => setAddress(e.target.value)}
                value={address}
            />
            <input
                className='border-b focus:border-primary outline-none p-2'
                type='text'
                placeholder='Town / City'
                onChange={e => setCityName(e.target.value)}
                value={cityName}
            />
            <input
                className='border-b focus:border-primary outline-none p-2'
                type='text'
                placeholder='District'
                onChange={e => setDistrictName(e.target.value)}
                value={districtName}
            />
            <input
                className='border-b focus:border-primary outline-none p-2'
                type='text'
                placeholder='Postal Code, ZIP Code'
                onChange={e => setZipCode(e.target.value)}
                value={zipCode}
            />
            <input
                className='border-b focus:border-primary outline-none p-2'
                type='text'
                placeholder='Phone Number'
                onChange={e => setPhone(e.target.value)}
                value={phone}
            />
            <input
                className='border-b focus:border-primary outline-none p-2'
                type='text'
                placeholder='Email Address'
                onChange={e => setEmail(e.target.value)}
                value={email}
            />
        </div>
    )
}

export default BillingDetails