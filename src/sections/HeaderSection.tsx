import React, { useState, useEffect, useCallback } from 'react';
import { Bag2, CloseCircle, HambergerMenu, SearchNormal1 } from 'iconsax-react';
import LOGO from '../assets/images/logo.svg';
import { useNavigate } from 'react-router-dom';
import { IProductCard } from '../components/ProductCard';
import { productList } from '../assets/data/productData';
import _ from 'lodash';
import ParentDiv from '../components/ParentDiv';
import ParentSideBar from '../components/ParentSideBar';
import SideNav from '../components/SideNav';
import AddedCartList from '../components/AddedCartList';

const HeaderSection = () => {
    const [searchBarOpen, setSearchBarOpen] = useState(false);
    const navigate = useNavigate();
    const [searchProduct, setSearchProduct] = useState<IProductCard[]>([]);
    const [searchText, setSearchText] = useState("");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [cartListOpen, setCartListOpen] = useState(false);
    const totalCart = 2;

    const filterProductByName = () => {
        if (searchText) {
            const filteredProducts = productList.filter((product) =>
                product?.name?.toLowerCase().includes(searchText?.toLowerCase())
            );
            setSearchProduct(filteredProducts);
        } else {
            setSearchProduct([]);
        }
    };

    const toggleSearchBar = () => {
        setSearchBarOpen(!searchBarOpen);
    };

    const handleSearchValue = (value: string) => {
        setSearchText(value);
    };

    const debounceFn = useCallback(_.debounce(handleSearchValue, 100), []);

    useEffect(() => {
        filterProductByName();
    }, [searchText]);


    return (
        <ParentDiv parentClassName='!h-[88px]' childClassName='!flex-row !mt-0'>
            <div
                className={`search-bar top-[90px] sm:top-[24px] z-[100] w-[300px] h-[40px] border-[1px] border-[#D9AF8B] rounded-[4px] flex flex-row gap-2 ${searchBarOpen ? 'open' : 'closed'}`}
            >
                <input
                    type="text"
                    value={searchText}
                    onChange={(e) => debounceFn(e.target.value)}
                    placeholder="Search..."
                    className='h-full w-full focus:border-none focus:outline-none placeholder-[#292D3299]'
                />
                <CloseCircle onClick={toggleSearchBar} size="16" color="#292D3299" className='cursor-pointer' />
                {searchProduct.length === 0 ? (
                    searchText.length === 0 ? null : (
                        <div className='w-full h-[40px] flex justify-center items-center text-red-400 left-0 bg-white absolute top-[54px] sm:top-[50px] z-[100]'>
                            Product not found!
                        </div>
                    )
                ) : (
                    <div
                        className={`w-full ${searchProduct.length > 3 ? 'h-[400px] overflow-y-auto custom-scrollbar' : 'h-auto'
                            } left-0 bg-white absolute top-[54px] sm:top-[50px] z-[100] p-2`}
                    >
                        {searchProduct.map((product, index) => (
                            <div key={index} className={`w-full flex gap-2 overflow-hidden cursor-pointer ${index + 1 < searchProduct.length ? "pb-2 mb-2 border-b" : ""}`}>
                                <div className='h-[100px] w-[100px] bg-red-200 overflow-hidden'>
                                    <img src={product?.images[0]} alt={product?.name} className='h-full w-full object-cover' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <div className='truncate w-[160px] font-[500]'>{product.name}</div>
                                    <div className='text-[14px]'>{product.price}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className='flex items-center justify-between w-full'>
                <img
                    onClick={() => navigate('/')}
                    src={LOGO}
                    alt='logo'
                    className='h-[21px] w-[91px] cursor-pointer'
                />
                <div className='flex items-center h-[32px] w-[130px] justify-between'>
                    <SearchNormal1
                        onClick={() => {
                            if (!searchBarOpen) toggleSearchBar();
                        }}
                        size='20'
                        className={`${searchBarOpen ? 'text-[#9b9b9b] disabled' : 'text-[#0B0D17] cursor-pointer'}`}
                    />
                    <div onClick={() => setCartListOpen(true)} className='text-[#0B0D17] hover:text-primary duration-1000 cursor-pointer relative'>
                        <Bag2 size='20' />
                        <div className='px-2 py-1 rounded-full bg-primary text-white absolute top-[-18px] right-[-13px] text-[10px]'>{totalCart}</div>
                    </div>
                    <div onClick={() => setSidebarOpen(true)} className='h-[32px] w-[32px] rounded-full cursor-pointer bg-[#0B0D17] flex justify-center items-center'>
                        <HambergerMenu size='20' color='#ffffff' />
                    </div>
                </div>
            </div>
            <ParentSideBar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)}>
                <SideNav />
            </ParentSideBar>
            <ParentSideBar isOpen={cartListOpen} onClose={() => setCartListOpen(false)}>
                <AddedCartList />
            </ParentSideBar>
        </ParentDiv>
    );
};

export default HeaderSection;
