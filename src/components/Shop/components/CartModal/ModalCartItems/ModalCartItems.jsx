import { useAuthContext } from "../../../../../AuthorizationContext/hooks";
import { useGetProductsInCart, useShopContext } from "../../../hooks";
import { modalCartItemData } from "../../data";
import { ModalContentBox } from "./ModalContentBox";
import { ModalQuantityControls } from "./ModalQuantityControls";


export const ModalCartItems = () => {
    const { cart, removeProduct: onRemove } = useShopContext();
    const { currentUserId } = useAuthContext();
    const { productsInCart } = useGetProductsInCart();
    
    return (
        <ul className="modal__cart-items">
            {
                cart.map((item) => {
                    const { id } = item
                    const currentProduct = productsInCart.find(product => product.id === id);
                    const contentCartData = modalCartItemData({ item: currentProduct })
                    return (
                        <li key={ id } className="modal__cart-item">

                            { contentCartData.map(product => (
                                <ModalContentBox data = { product } key={ product.id }/>
                            )) }

                            <ModalQuantityControls data = { item } currentProduct = { currentProduct }/>

                            <button 
                                onClick={ () => onRemove({ currentUserId, id, cart }) } 
                                className="modal__btn-del"
                            >
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </li>
                    )
                })
            }
        </ul>
    )
}