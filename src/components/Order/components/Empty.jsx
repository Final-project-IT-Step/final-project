import { Link } from "react-router-dom"

export const Empty = () => {

    return (
        <div className="empty">
            <h1 className="empty__title">НАРАЗІ ЗАМОВЛЕННЯ ВІДСУТНЄ</h1>
            <Link className="empty__link" to="/shop">Давайте це виправимо :)</Link>
        </div>
    )
}