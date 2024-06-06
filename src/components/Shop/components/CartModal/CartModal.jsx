import { Link } from "react-router-dom";
import { useShopContext } from "../../hooks";
import { ModalCloseBtn, ModalWrapper } from "./ModalCartItems";


export const CartModal = () => {

    const { setIsModalOpen, handleCloseModal: onClose, totalAmount, cart } = useShopContext();
    const currentTotalAmount = cart.length ? totalAmount : 0;
    const isDisabled = !cart.length ? 'disabled' : '';

    return (
        <div className="modal-overlay" onClick={ () => onClose(setIsModalOpen) }>
            <div className="modal" onClick={ (e) => e.stopPropagation() }>
                <ModalCloseBtn />

                <h2 className="modal__title">Кошик</h2>

                <ModalWrapper />

                <div className="modal__cart-total">
                    <p className="modal__total-title text-bold">Загальна сума:&nbsp;</p>
                    <p className="modal__total">{ currentTotalAmount } грн.</p>
                </div>

                <Link 
                    to = { '/order/pickup' } 
                    className={ `modal__link-buy ${ isDisabled }`} 
                    onClick = { () => onClose(setIsModalOpen) }
                >
                    Купити
                </Link>
            </div>
        </div>
    );
};