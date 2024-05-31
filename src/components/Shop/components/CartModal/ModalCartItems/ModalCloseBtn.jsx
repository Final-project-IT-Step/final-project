import { useShopContext } from "../../../hooks/useShopContext"

export const ModalCloseBtn = () => {
    const { handleCloseModal: onClose, setIsModalOpen } = useShopContext();

    return (
        <button 
            className="modal__btn-close" 
            onClick={ () => onClose(setIsModalOpen) }
        >
            Х
        </button>
    )
}