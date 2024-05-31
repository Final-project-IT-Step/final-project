import { useShopContext } from "../../../hooks/useShopContext"

export const ModalQuantityControlsButton = ({ children, currentFunction, id, title }) => {
    const { setCartItems } = useShopContext();

    return (
        <button 
            onClick={ () => currentFunction(id, setCartItems) } 
            className={`modal__${ title }`}
        >
            { children }
        </button>
    )
}