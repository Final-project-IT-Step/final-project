import { OrderMainComp } from "../../components/Order/components/OrderMainComp"
import { OrderProvider } from "../../components/Order/hoc/OrderProvider"


export const OrderPage = () => {
    return (
        <OrderProvider>
            <OrderMainComp />
        </OrderProvider>
    )
}