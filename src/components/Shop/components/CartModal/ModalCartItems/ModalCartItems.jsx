import { useShopContext } from "../../../hooks/useShopContext"
import { modalCartItemData } from "../../data/modalCartItemData";
import { ModalContentBox } from "./ModalContentBox";
import { ModalQuantityControls } from "./ModalQuantityControls";

export const ModalCartItems = () => {
    
    const { cartItems, handleRemove: onRemove, setCartItems } = useShopContext();

    return (
        <ul className="modal__cart-items">
            {
                cartItems.map(item => {
                    const { id } = item
                    const contentCartData = modalCartItemData({ item })

                    return (
                        <li key={ id } className="modal__cart-item">
                            { contentCartData.map( element => <ModalContentBox key={ element.id } data={ element }/> ) }

                            <ModalQuantityControls data = { item }/>

                            <button 
                                onClick={ () => onRemove(id, setCartItems) } 
                                className="modal__btn-del"
                            >
                                X
                            </button>
                        </li>
                    )
                })
            }
        </ul>
    )
}