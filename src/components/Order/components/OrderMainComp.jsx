import { Outlet } from "react-router-dom";
import { useOrderContext } from "../hooks";
import { Vignette } from "../../Vignette";
import { MyOrder } from "./MyOrder";
import { SelectionBlock } from "./SelectionBlock";
import { Empty } from "./Empty";
import { OrderPageBoxFooter } from "./OrderPageBoxFooter";


export const OrderMainComp = () => {
    const { destination, cart } = useOrderContext();
    const isCartEmpty = !!cart?.length;
    
    return (
        <div className="order-page" ref={ destination }>
            <h1 className="order-page__title">Сторінка замовлення</h1>
            <Vignette />

            <div className="order-page-main-box">
                <div className="order-page-box order-page-box_my-order">
                    { !isCartEmpty 
                        ? <Empty />
                        : <>
                            <MyOrder />
                            <OrderPageBoxFooter />
                        </>
                    }
                </div>
                { isCartEmpty &&
                    <div className="order-page-box order-page-box_selection">
                        <SelectionBlock />
                        <Outlet />
                    </div>
                }
            </div>
        </div>
    )
}