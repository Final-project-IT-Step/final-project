
import { useShopContext } from '../hooks';
import Basket from '../img/basket.png'

export const ShopBasket = () => {
    const { setIsModalOpen, cart } = useShopContext();
    const totalProductsInCart = cart?.length;

    return (
        <div className="shop-basket">
            <div className="shop-basket__link" onClick={ () => setIsModalOpen(prev => !prev) }>
                <img src={ Basket } alt="" className="shop-basket__img" />
            </div>

            <div className="shop-basket__quantity-box">
                <p className="shop-basket__quantity">{ totalProductsInCart }</p>
            </div>
        </div>
    )
}