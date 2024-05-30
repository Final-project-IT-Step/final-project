import React from 'react';

export const ProductsBlock = ({ data = [], onAddToCart, setCartItems }) => {
    if (!data.length) {
        return <p>Немає товарів для відображення.</p>;
    }
    
    return (
        <div className="products-block">
            {
                data.map(tea => (
                    <div key={ tea.id } className="shop-tea">
                        <div className="shop-tea__img-box">
                            <img 
                                src={ process.env.PUBLIC_URL + '/' + tea.img } 
                                alt={ tea.title } 
                                className="shop-tea__img" 
                            />
                        </div>

                        <div className="shop-tea__info-box">
                            <h3>
                                { tea.title }
                            </h3>

                            <p className="shop-tea__info">
                                <span className="text-bold">
                                    Тип чаю:&nbsp;
                                </span> 
                                { tea.type }
                            </p>

                            <p className="shop-tea__info">
                                <span className="text-bold">
                                    Вага:&nbsp;
                                </span>                                 
                                { tea.weight } г
                            </p>

                            <p className="shop-tea__info">
                                <span className="text-bold">
                                    Форма:&nbsp;
                                </span>
                                { tea.form }
                            </p>

                            <p className="shop-tea__info">
                                <span className="text-bold">
                                    Країна:&nbsp;
                                </span>
                                { tea.country }
                            </p>

                            <p className="shop-tea__info">
                                <span className="text-bold">
                                    Властивості:&nbsp;
                                </span>
                                { tea.properties.join(', ') }
                            </p>

                            <p className="shop-tea__info">
                                <span className="text-bold">
                                    Смак:&nbsp;
                                </span>
                                { tea.taste.join(', ') }
                            </p>

                            <p className="shop-tea__info">
                                <span className="text-bold">
                                    Ціна:&nbsp;
                                </span>
                                { tea.price } грн
                            </p>

                            <div className="shop-tea__add-to-cart">
                                <button className="shop-tea__add-to-cart_btn" onClick={ () => onAddToCart(tea, setCartItems) }>
                                    Додати в кошик
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};


