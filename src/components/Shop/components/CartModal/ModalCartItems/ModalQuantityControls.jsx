import { useShopContext } from "../../../hooks/useShopContext"
import { ModalQuantityControlsButton } from "./ModalQuantityControlsButton"

export const ModalQuantityControls = ({ data }) => {
    const { handleIncrease: onIncrease, handleDecrease: onDecrease } = useShopContext();
    const { id, quantity } = data;

    return (
        <div className="modal__quantity-controls">
            <ModalQuantityControlsButton 
                currentFunction={ onDecrease }
                title = 'minus'
                id = { id }
            >
                -
            </ModalQuantityControlsButton>

            <p className="modal__quantity text-bold">
                { quantity }
            </p>

            <ModalQuantityControlsButton 
                currentFunction={ onIncrease } 
                id = { id }
                title = 'plus'
            >
                +
            </ModalQuantityControlsButton>
        </div>
    )
}