import { Link } from "react-router-dom"
import { useShopContext } from "../hooks/useShopContext"
import Basket from '../img/basket.png'
import { calculateTotalValue } from "../utils";

export const ShopBasket = () => {
    const { setIsModalOpen, cartItems } = useShopContext();
    const calculatedValue = calculateTotalValue(cartItems);

    return (
        <div className="shop-basket">
            <Link to = "#" className="shop-basket__link" onClick={ () => setIsModalOpen(prev => !prev) }>
                <img src={ Basket } alt="" className="shop-basket__img" />
            </Link>

            <div className="shop-basket__quantity-box">
                <p className="shop-basket__quantity">{ calculatedValue }</p>
            </div>
        </div>
    )
}