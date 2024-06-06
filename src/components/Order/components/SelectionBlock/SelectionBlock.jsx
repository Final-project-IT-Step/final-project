import { OptionsLabel } from "./OptionsLabel";

export const SelectionBlock = () => {
    return (
        <div className="selection-block">
            <h2 className="selection-block__title">Оберіть будь ласка спосіб отримання замовлення</h2>
            <div className="options">
                
                <OptionsLabel 
                    title = 'Самовивіз' 
                    route = 'pickup'
                />
                <OptionsLabel 
                    title = { `Кур'ером додому (Нова Пошта)` } 
                    route = 'courier'
                />
                <OptionsLabel 
                    title = 'На відділення пошти (Нова Пошта)' 
                    route = 'new-post-warehouse'
                />
            </div>
        </div>
    )
}