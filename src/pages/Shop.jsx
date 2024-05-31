import React from 'react';
import { useGetShopTeaQuery } from '../redux/shopTeaApi';
import { CartModal } from '../components/Shop/components/CartModal/CartModal';
import ShopContextProvider from '../components/Shop/context/ShopContext'
import { useGetUpdatedData } from '../components/Shop/hooks/useGetUpdatedData';
import { useTakeProductManipulation } from '../components/Shop/hooks/useTakeProductManipulation';
import { ProductsBlock } from '../components/Shop/components/ProductsBlock/ProductsBlock';
import { FilterBlock } from '../components/Shop/components/FilterBlock/FilterBlock';
import { FilterQuantity } from '../components/Shop/components/FilterQuantity';
import { Vignette } from '../components/Vignette';

export const Shop = () => {
    const { 
        searchParams, 
        setSearchParams, 
        cartItems, 
        setCartItems, 
        isModalOpen, 
        setIsModalOpen,
        handleCloseModal,
        handleIncrease,
        handleDecrease,
        handleRemove,
        handleAddToCart
    } = useTakeProductManipulation();

    const { data = [], error, isLoading } = useGetShopTeaQuery();
    const { filteredData } = useGetUpdatedData(data, searchParams);


    if (isLoading) {
        return <p>Дані завантажуються...</p>;
    }

    if (error) {
        return <p>Сталася помилка під час завантаження даних.</p>;
    }

    return (
        <ShopContextProvider 
            value={ 
                { 
                    cartItems,
                    data, 
                    error,
                    filteredData, 
                    handleCloseModal,
                    handleDecrease,
                    handleIncrease,
                    handleRemove,
                    isLoading, 
                    isModalOpen,
                    setCartItems,
                    setIsModalOpen,
                    searchParams,
                    setSearchParams,  
                } 
            }
        >
            <div className='filter'>
                <h1>МАГАЗИН ЧАЮ</h1>

                <Vignette />

                <div className="filter__wrapper">
                    <FilterBlock />
                    <FilterQuantity />
                    <ProductsBlock 
                        data={ filteredData } 
                        onAddToCart={ handleAddToCart } 
                        setCartItems = { setCartItems }
                    />
                </div>

                { isModalOpen && <CartModal/> }
            </div>
        </ShopContextProvider>
    );
};
