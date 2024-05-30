export const CartModal = ({ cartItems, onClose, setIsModalOpen, onIncrease, onDecrease, onRemove, setCartItems }) => {
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="modal-overlay" onClick={ () => onClose(setIsModalOpen) }>
            <div className="modal" onClick={ (e) => e.stopPropagation() }>
                <button className="modal__btn-close" onClick={ () => onClose(setIsModalOpen) }>
                    Х
                </button>

                <h2 className="modal__title">Кошик</h2>

                <div className="modal__wrapper">
                    {
                        cartItems.length === 0 ? (
                            <p className="text-center">
                                Ви не обрали жодного товару
                            </p>
                        ) : (
                            <ul className="modal__cart-items">
                                {
                                    cartItems.map(item => (
                                        <li key={ item.id } className="modal__cart-item">
                                            <div className="modal__img-box">
                                                <img 
                                                    src={ process.env.PUBLIC_URL + '/' + item.img } 
                                                    alt={ item.title } 
                                                    className="modal__img" 
                                                />
                                            </div>

                                            <div className="modal__title-tea-box">
                                                <p className="modal__title-tea">
                                                    { item.title }
                                                </p>
                                            </div>

                                            <div className="modal__price-box">
                                                <p className="modal__price">
                                                    { item.price } грн.
                                                </p>
                                            </div>   

                                            <div className="modal__quantity-controls">
                                                <button onClick={ () => onDecrease(item.id, setCartItems) } className="modal__minus" >
                                                    -
                                                </button>

                                                <p className="modal__quantity text-bold">
                                                    { item.quantity }
                                                </p>

                                                <button onClick={ () => onIncrease(item.id, setCartItems) } className="modal__plus">
                                                    +
                                                </button>
                                            </div>

                                            <button onClick={ () => onRemove(item.id, setCartItems) } className="modal__btn-del">
                                                X
                                            </button>
                                        </li>
                                    ))
                                }
                            </ul>
                        )
                    }
                </div>

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

