import { useShopContext } from "../../../hooks";
import { ModalQuantityControlsButton } from "./ModalQuantityControlsButton";


export const ModalQuantityControls = ({ data, currentProduct }) => {
    const { available } = currentProduct
    const { id, total: quantity } = data

    const { initIncrement, initDecrement } = useShopContext();
    const currentQuantity = quantity > available ? available : quantity

    return (
        <div className="modal__quantity-controls">
            <ModalQuantityControlsButton 
                currentFunction={ initDecrement }
                quantity = { currentQuantity }
                title = 'minus'
                id = { id }
            >
                <i className="fa-solid fa-minus"></i>
            </ModalQuantityControlsButton>

            <p className="modal__quantity text-bold">
                { currentQuantity }
            </p>

            <ModalQuantityControlsButton 
                currentFunction={ initIncrement }
                quantity = { currentQuantity }
                id = { id }
                available = { available }
                title = 'plus'
            >
                <i className="fa-solid fa-plus"></i>
            </ModalQuantityControlsButton>
        </div>
    )
}