import React from 'react';
import { Link } from 'react-router-dom';
import { ProductsBlock } from '../components/Shop/ProductsBlock';
import { useGetShopTeaQuery } from '../redux/shopTeaApi';
import { TypeSelection } from '../components/Shop/TypeSelection';
import { CountrySelection } from '../components/Shop/CountrySelection';
import { FormSelection } from '../components/Shop/FormSelection';
import { CartModal } from '../components/Shop/CartModal';
import Basket from '../img/basket.png';
import { useGetUpdatedData } from '../components/Shop/hooks/useGetUpdatedData';
import { useTakeProductManipulation } from '../components/Shop/hooks/useTakeProductManipulation';
import { handleAddToCart, handleCloseModal, handleDecrease, handleIncrease, handleRemove } from '../components/Shop/utils';

export const Shop = () => {
    const { 
        searchParams, 
        setSearchParams,
        setIsModalOpen,
        setCartItems, 
        cartItems, 
        isModalOpen } = useTakeProductManipulation();

    const { data = [], error, isLoading } = useGetShopTeaQuery();
    const { filteredData } = useGetUpdatedData(data, searchParams);


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
                        <Link to = "#" className="shop-basket__link" onClick={ () => setIsModalOpen(prev => !prev) }>
                            <img src={ Basket } alt="" className="shop-basket__img" />
                        </Link>

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

                <ProductsBlock data={ filteredData } onAddToCart={ handleAddToCart } setCartItems = { setCartItems }/>
            </div>

            {
                isModalOpen && (
                    <CartModal
                        cartItems={ cartItems }
                        onClose={ handleCloseModal }
                        setIsModalOpen={ setIsModalOpen }
                        setCartItems = { setCartItems }
                        onIncrease={ handleIncrease }
                        onDecrease={ handleDecrease }
                        onRemove={ handleRemove }
                    />
                )
            }
        </div>
    );
};
