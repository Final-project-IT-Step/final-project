import { useShopContext } from "../../hooks/useShopContext";
import { calculateTotalValueWithMultiply } from "../../utils";
import { ModalCloseBtn } from "./ModalCartItems/ModalCloseBtn";
import { ModalWrapper } from "./ModalCartItems/ModalWrapper";

export const CartModal = () => {

    const { cartItems, setIsModalOpen, handleCloseModal: onClose} = useShopContext();

    const totalAmount = calculateTotalValueWithMultiply({ cartItems })

    return (
        <div className="modal-overlay" onClick={ () => onClose(setIsModalOpen) }>
            <div className="modal" onClick={ (e) => e.stopPropagation() }>
                <ModalCloseBtn />

                <h2 className="modal__title">Кошик</h2>

                <ModalWrapper />

                <div className="modal__cart-total">
                    <p className="modal__total-title text-bold">Загальна сума:&nbsp;</p>
                    <p className="modal__total">{ totalAmount } грн.</p>
                </div>

                <button className="modal__btn-buy">
                    Купити
                </button>
            </div>
        </div>
    );
};

