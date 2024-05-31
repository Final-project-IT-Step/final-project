import { useShopContext } from "../../../hooks/useShopContext"
import { ModalCartItems } from "./ModalCartItems";

export const ModalWrapper = () => {
    const { cartItems } = useShopContext();

    return (
        <div className="modal__wrapper">
            {
                cartItems.length === 0 
                ? <p className="text-center">Ви не обрали жодного товару</p>
                : <ModalCartItems />
            }
        </div>
    )
}