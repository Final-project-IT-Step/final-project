import { useAuthContext } from "../../../../AuthorizationContext/hooks";
import { useShopContext } from "../../hooks";

export const ShopTeaAddToCart = ({ tea }) => {
    const { id, available } = tea;
    const { currentUserId } = useAuthContext();
    const { cart = [], addProduct, removeProduct, setIsModalOpen } = useShopContext();
    const productInCart = cart?.find(product => product.id === id);
    const text = productInCart ? 'Прибрати з кошика' : 'Додати в кошик'

    const productActionHandler = () => {
        productInCart
            ? removeProduct({ currentUserId, id: tea.id, cart })
            : addProduct({ currentUserId, id: tea.id, cart })

        if (!productInCart) {
            setIsModalOpen(prev => !prev);
        }
    }

    return (
        <div className="shop-tea__add-to-cart">
            <button
                disabled = { available <= 0 }
                className="shop-tea__add-to-cart_btn" 
                onClick={ productActionHandler }
            >
                { text }
            </button>
        </div>
    )
}