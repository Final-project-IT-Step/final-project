import { useAuthContext } from "../../../../../AuthorizationContext/hooks";
import { useShopContext } from "../../../hooks";



export const ModalQuantityControlsButton = ({ children, currentFunction, id, title, quantity, available }) => {
    const { currentUserId } = useAuthContext();
    const { cart } = useShopContext();
    const disabledStatus = title === "plus" ? quantity >= available : quantity <= 1

    return (
        <button 
            onClick={ () => currentFunction({ currentUserId, id, cart, quantity }) }
            disabled = { disabledStatus }
            className={`modal__${ title }`}
        >
            { children }
        </button>
    )
}