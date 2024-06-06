import React from 'react';
import { useShopContext } from '../../hooks';
import { ShopTeaImgBox } from './ShopTeaImgBox';
import { ShopTeaInfoBox } from './ShopTeaInfoBox';

export const ProductsBlock = () => {
    const { filteredData: data = [] } = useShopContext();

    if (!data.length) {
        return <p>Немає товарів для відображення.</p>;
    }
    
    return (
        <div className="products-block">
            {
                data.map(tea => (
                    <div key={ tea.id } className={`shop-tea ${ tea.available <= 0 ? 'inactive' : '' }`}>
                        <ShopTeaImgBox tea = { tea }/>
                        <ShopTeaInfoBox tea = { tea }/>
                    </div>
                ))
            }
        </div>
    );
};