import { Link } from "react-router-dom";
import { useOrderContext } from "../hooks"
import { getOrderTotalAmount } from "../utils"

export const OrderPageBoxFooter = () => {
    const { cart, productsInCart } = useOrderContext();
    const totalAmount = getOrderTotalAmount({ cart, productsInCart })

    return (
        <div className="order-page-box-footer">
            <Link className="my-order__link" to = "/shop">Повернутись до магазину</Link>
            <span className="my-order__total-amount"><b>{ totalAmount }</b></span>
        </div>
    )
}