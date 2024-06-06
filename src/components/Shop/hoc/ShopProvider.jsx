import React from 'react';
import ShopContextProvider from '../context/ShopContext';
import { useGetUpdatedData, useTakeProductManipulation } from '../hooks';
import { useGetShopTeaQuery } from '../../../redux/api';

export const ShopProvider = ({ children }) => {
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
        handleAddToCart,
        cart,
        user,
        initIncrement,
        initDecrement,
        totalAmount,
        setTotalAmount,
        addProduct,
        removeProduct,
        orders,
        setOrders
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
                    handleAddToCart,
                    user,
                    cart,
                    initIncrement,
                    initDecrement,
                    totalAmount,
                    setTotalAmount,
                    addProduct,
                    removeProduct,
                    orders,
                    setOrders
                } 
            }
        >
            { children }
        </ShopContextProvider>
    );
};
