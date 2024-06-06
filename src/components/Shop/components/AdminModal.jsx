import { useState } from "react";
import { useUpdateTotalProductCountMutation } from "../../../redux/api";

export const AdminModal = ({ setAdminModal, tea }) => {
    const [ newAmount, setNewAmount ] = useState(tea.available);
    const [isChecked, setChecked] = useState(false);
    const [updateTotalProductCount] = useUpdateTotalProductCountMutation();

    const changeValue = async () => {
        await updateTotalProductCount({ productId: tea.id, total: newAmount });
        setAdminModal(false);
    }

    return (
        <div className="admin-modal">
            <h1>Чай { tea.title }</h1>
            <button 
                className="admin-modal__button admin-modal__button_close"
                onClick={ () => setAdminModal(false) }
            ><i className="fa-solid fa-xmark"></i>
            </button>

            <label className="admin-modal-label">
                <span className="admin-modal-label__value">Оберіть нову кількість товару</span>
                <input
                    className="admin-modal-label__input" 
                    type="number"
                    onChange={ e => setNewAmount(Number(e.target.value)) }
                    value={ newAmount }
                />
            </label>

            <label>
                <span className="admin-modal-label__value">Я підтверджую правильність внесених даних</span>
                <input
                    className="admin-modal-label__input admin-modal-label__input_checkbox"
                    type="checkbox"
                    onChange={ e => e.target.checked ? setChecked(true) : setChecked(false) }
                />
            </label>

            <button
                onClick = { changeValue }
                className="admin-modal__button"
                disabled = { !isChecked }
            >Відправити</button>

        </div>
    )
}