import { useShopContext } from "../../../hooks";


export const ModalCloseBtn = () => {
    const { handleCloseModal: onClose, setIsModalOpen } = useShopContext();

    return (
        <button 
            className="modal__btn-close" 
            onClick={ () => onClose(setIsModalOpen) }
        >
            <i className="fa-solid fa-xmark"></i>
        </button>
    )
}