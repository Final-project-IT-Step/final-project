import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ProductsBlock } from '../components/Shop/ProductsBlock';
import { useGetShopTeaQuery } from '../redux/shopTeaApi';
import { TypeSelection } from '../components/Shop/TypeSelection';
import { useGetUpdatedData } from '../hooks/useGetUpdatedData';
import { CountrySelection } from '../components/Shop/CountrySelection';
import { FormSelection } from '../components/Shop/FormSelection';
import { CartModal } from '../components/Shop/CartModal';
import Basket from '../img/basket.png';

export const Shop = () => {
    const { data = [], error, isLoading } = useGetShopTeaQuery();
    const [searchParams, setSearchParams] = useSearchParams();
    const { filteredData } = useGetUpdatedData(data, searchParams);
    const [cartItems, setCartItems] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddToCart = (tea) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === tea.id);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === tea.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevItems, { ...tea, quantity: 1 }];
            }
        });
    };

    const handleIncrease = (id) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const handleDecrease = (id) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
            )
        );
    };

    const handleRemove = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    if (isLoading) {
        return <p>Дані завантажуються...</p>;
    }

    if (error) {
        return <p>Сталася помилка під час завантаження даних.</p>;
    }

    return (
        <div className='filter'>
            <h1>МАГАЗИН ЧАЮ</h1>

            <img src={ process.env.PUBLIC_URL + "/img/vignette.png" } alt="" className="tea-ceremony__img" />

            <div className="filter__wrapper">
                <div className="filter__block">
                    <div className="filter__block_item">
                        <TypeSelection 
                            data={ data }
                            setSearchParams={ setSearchParams }
                            searchParams={ searchParams }
                            filteredData={ filteredData }
                        />
                    </div>

                    <div className="filter__block_item">
                        <CountrySelection
                            data={ data }
                            setSearchParams={ setSearchParams }
                            searchParams={ searchParams }
                            filteredData={ filteredData }
                        />
                    </div>

                    <div className="filter__block_item">
                        <FormSelection
                            data={ data }
                            setSearchParams={ setSearchParams }
                            searchParams={ searchParams }
                            filteredData={ filteredData }
                        />
                    </div>

                    <div className="shop-basket">
                        <a href="#" className="shop-basket__link" onClick={ handleOpenModal }>
                            <img src={ Basket } alt="" className="shop-basket__img" />
                        </a>

                        <div className="shop-basket__quantity-box">
                            <p className="shop-basket__quantity">{ cartItems.reduce((total, item) => total + item.quantity, 0) }</p>
                        </div>
                    </div>
                </div>

                <div className='filter__quantity'>
                    <Link to='/shop'>
                        <button onClick={ () => setSearchParams({}) } className='filter__btn-cleaner'>
                            Очистити фільтр
                        </button>
                    </Link>

                    <p className='filter__quantity_text'>
                        <span className='text-bold'>
                            Всього товарів на сторінці:&nbsp;
                        </span> 
                        { filteredData.length }
                    </p>
                </div>

                <ProductsBlock data={ filteredData } onAddToCart={ handleAddToCart } />
            </div>

            {
                isModalOpen && (
                    <CartModal
                        cartItems={ cartItems }
                        onClose={ handleCloseModal }
                        onIncrease={ handleIncrease }
                        onDecrease={ handleDecrease }
                        onRemove={ handleRemove }
                    />
                )
            }
        </div>
    );
};
