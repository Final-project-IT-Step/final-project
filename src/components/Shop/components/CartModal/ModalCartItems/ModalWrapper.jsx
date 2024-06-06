import { useShopContext } from "../../../hooks";
import { ModalCartItems } from "./ModalCartItems";


export const ModalWrapper = () => {
    const { cart } = useShopContext();

    return (
        <div className="modal__wrapper">
            {
                !cart.length
                    ? <p className="text-center">Ви не обрали жодного товару</p>
                    : <ModalCartItems />
            }
        </div>
    )
}