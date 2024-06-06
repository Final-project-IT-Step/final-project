import { useOrderContext } from "../../hooks";
import { navigateTo } from "../../utils";


export const OptionsLabel = ({ title, route }) => {
    const { navigate, pathname } = useOrderContext();
    const isChecked =  pathname === `/order/${ route }`

    return (
        <label className="options__label">
            <h4 className="options__label-title">{ title }:</h4>
            <input
                className="options__input real-radio"
                type="radio" 
                name="deliveryType"
                onChange={ (e) => navigateTo(e, route, navigate) }
                checked = { isChecked }
            />
            <span className="custom-radio"></span>
        </label>
    )
}