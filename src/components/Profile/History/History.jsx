
import { useGetOrderedProducts } from "../hooks/useGetOrderedProducts";
import { HistoryPIB } from "./HistoryPIB";
import { Product } from "./Product";

export const History = () => {;
    const { orders, data } = useGetOrderedProducts();
    

    return (
        <div className="history">
            <h1>ІСТОРІЯ ЗАМОВЛЕНЬ</h1>
            <div className="history-block">
                {[...orders]?.reverse().map(user => (
                    <div className="history-block-order" key={ user.id }>
                        <span 
                            className="history-block-order__value"
                            data-title="Номер замовлення:"
                        >{ user.id }
                        </span>
                        <HistoryPIB user = { user } />
                        <span 
                            className="history-block-order__value"
                            data-title = "Номер телефона:"
                        >{ user.phone }
                        </span>
                        <span 
                            className="history-block-order__value"
                            data-title = "Пошта:"
                        >{ user.email }
                        </span>
                        <span 
                            className="history-block-order__value"
                            data-title = "Статус замовлення:"
                        >{ user.orderStatus === null ? 'В очікуванні' : '' }
                        </span>
                        <span 
                            className="history-block-order__value"
                            data-title = "Спосіб отримання товару:"
                        >{ user.giveAwayMethod }
                        </span>
                        { user.orderedProducts.map(el => ( 
                            <Product 
                                data = { data } 
                                key = { el.id } 
                                orderedProducts = { el }
                            />)) }
                    </div>
                ))}
            </div>
        </div>
    )
}