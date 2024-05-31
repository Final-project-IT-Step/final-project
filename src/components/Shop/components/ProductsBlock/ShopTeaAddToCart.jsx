import { useShopContext } from '../../hooks/useShopContext'
import { handleAddToCart } from '../../utils';

export const ShopTeaAddToCart = ({ tea }) => {
    const { setCartItems } = useShopContext();

    return (
        <div className="shop-tea__add-to-cart">
            <button 
                className="shop-tea__add-to-cart_btn" 
                onClick={ () => handleAddToCart(tea, setCartItems) }
            >
                Додати в кошик
            </button>
        </div>
    )
}