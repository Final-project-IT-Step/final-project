import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { 
    useAddProductInUsersCartMutation, 
    useDecrementCurrentProductInCartMutation, 
    useGetOrdersByUserQuery, 
    useIncrementCurrentProductInCartMutation, 
    useRemoveProductInUsersCartMutation 
} from "../../../redux/api";
import { useAuthContext } from "../../../AuthorizationContext/hooks";
import { handleAddToCart, handleCloseModal, handleDecrease, handleIncrease, handleRemove } from "../utils";

export const useTakeProductManipulation = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [cartItems, setCartItems] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [ totalAmount, setTotalAmount ] = useState(0);
    const [ orders, setOrders ] = useState()

    const [ incrementCurrentProductInCart ] = useIncrementCurrentProductInCartMutation();
    const [ decrementCurrentProductInCart ] = useDecrementCurrentProductInCartMutation();
    const [ addProductInUsersCart ] = useAddProductInUsersCartMutation();
    const [ removeProductInUsersCart ] = useRemoveProductInUsersCartMutation();

    const { setUser, user, currentUserId } = useAuthContext();
    const { data: ordersData = [], isLoading } = useGetOrdersByUserQuery({ userId: currentUserId });
    const cart = user?.cart;

    useEffect(() => {
        if (!isLoading) {
            setOrders(ordersData)
        }
    }, [isLoading, ordersData])

    const initIncrement = async ({ currentUserId, id, cart, quantity}) => {
        await incrementCurrentProductInCart({ currentUserId, id, cart, quantity })
        const updatedCart = cart.map(cartItem => {
            if (cartItem.id === id) {
                return { ...cartItem, total: quantity + 1 };
            }
            return cartItem;
        });

        setUser(prevUser => ({...prevUser, cart: updatedCart}))
    }

    const initDecrement = async ({ currentUserId, id, cart, quantity }) => {
        await decrementCurrentProductInCart({ currentUserId, id, cart, quantity })

        const updatedCart = cart.map(cartItem => {
            if (cartItem.id === id) {
                return { ...cartItem, total: quantity - 1 };
            }
            return cartItem;
        });

        setUser(prevUser => ({...prevUser, cart: updatedCart}))
    }

    const addProduct = async ({ currentUserId, id, cart }) => {
        await addProductInUsersCart({ currentUserId, id, cart })

        const updatedCart = [{ id, total: 1 }, ...cart];
        setUser(prevUser => ({...prevUser, cart: updatedCart}))
    }

    const removeProduct = async ({ currentUserId, id, cart }) => {
        await removeProductInUsersCart({ currentUserId, id, cart })

        const updatedCart = cart.filter(element => element.id !== id);
        setUser(prevUser => ({...prevUser, cart: updatedCart}))
    }

    return { 
        searchParams, 
        setSearchParams, 
        cartItems, 
        setCartItems, 
        isModalOpen, 
        setIsModalOpen,
        handleCloseModal,
        handleIncrease,
        handleDecrease,
        handleRemove,
        handleAddToCart,
        cart,
        user,
        initIncrement,
        initDecrement,
        totalAmount, 
        setTotalAmount,
        addProduct,
        removeProduct,
        orders,
        setOrders
    }
}