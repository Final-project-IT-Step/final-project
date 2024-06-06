export const HistoryPIB = ({ user }) => {

    return (
        <div className="history-block-order__PIB">
            <span 
                className="history-block-order__value"
                data-title = "Прізвище:"
            >{ user.lastname }</span>
            <span 
                className="history-block-order__value"
                data-title = "Ім'я:"
            >{ user.name }
            </span>
            <span
                className="history-block-order__value"
                data-title = "По батькові:"
            >{ user.middlename }
            </span>
        </div>
    )
}