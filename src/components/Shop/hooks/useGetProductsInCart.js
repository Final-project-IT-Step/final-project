import { useEffect } from "react";
import { useShopContext } from "./useShopContext";

export const useGetProductsInCart = () => {
    const { setTotalAmount, data, cart } = useShopContext();

    const productsInCart = data?.filter(product => cart?.some(cartItem => cartItem.id === product.id))

    useEffect(() => {
        let newTotal = 0;
        for (let product of productsInCart) {
            const currentProduct = cart.find(el => el.id === product.id)
            newTotal += currentProduct.total * product.price;
        }
        setTotalAmount(newTotal);
    }, [setTotalAmount, cart, productsInCart]);

    return { productsInCart }
}