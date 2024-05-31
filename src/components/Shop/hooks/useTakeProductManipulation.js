import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { handleAddToCart, handleCloseModal, handleDecrease, handleIncrease, handleRemove } from "../utils";

export const useTakeProductManipulation = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [cartItems, setCartItems] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);


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
        handleAddToCart
    }
}