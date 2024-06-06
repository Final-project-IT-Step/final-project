
import OrderContextProvider from '../context/OrderContext'
import { useLocation, useNavigate } from "react-router-dom"
import { useOrderCompStates } from '../hooks';

export const OrderProvider = ({ children }) => {

    const { 
        switchHandler, 
        changeRegionHandler,
        changeCityHandler,
        destination, 
        selectIsOpen, 
        currentRegions, 
        cart, 
        productsInCart, 
        region,
        currentCities,
        city,
        setSelectIsOpen
    } = useOrderCompStates()

    const navigate = useNavigate();
    const { pathname } = useLocation();

    return (
        <OrderContextProvider
            value=
            { 
                { 
                    switchHandler, 
                    changeRegionHandler, 
                    destination, 
                    selectIsOpen, 
                    currentRegions, 
                    cart, 
                    productsInCart, 
                    region,
                    currentCities,
                    changeCityHandler,
                    city,
                    setSelectIsOpen,
                    navigate,
                    pathname
                } 
            }
        >
            { children }
        </OrderContextProvider>
    )
}