import React from 'react';
import { useShopContext } from '../../hooks/useShopContext';
import { ShopTeaInfoBox } from './ShopTeaInfoBox';
import { ShopTeaImgBox } from './ShopTeaImgBox';

export const ProductsBlock = () => {
    const { filteredData: data = [] } = useShopContext();

    if (!data.length) {
        return <p>Немає товарів для відображення.</p>;
    }
    
    return (
        <div className="products-block">
            {
                data.map(tea => (
                    <div key={ tea.id } className="shop-tea">
                        <ShopTeaImgBox tea = { tea }/>
                        <ShopTeaInfoBox tea = { tea }/>
                    </div>
                ))
            }
        </div>
    );
};


