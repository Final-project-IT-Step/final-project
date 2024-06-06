import { useAuthContext } from "../../../AuthorizationContext/hooks";
import { useChangeTotalProductCountMutation, useClearCartMutation, useSetCurrentOrderMutation } from "../../../redux/api";
import { useOrderContext } from "./useOrderContext";


export const useInitSubmit = () => {
    const { cart, productsInCart, navigate } = useOrderContext();
    const { currentUserId, setUser } = useAuthContext();
    const [ changeTotalProductCount ] = useChangeTotalProductCountMutation();
    const [ setCurrentOrder ] = useSetCurrentOrderMutation();
    const [ clearCart ] = useClearCartMutation();

    const submit = async (data) => {
        for (let product of productsInCart) {
            const currentProduct = [...cart]?.find(el => el.id === product.id);
                await changeTotalProductCount(
                    { 
                        productId: product.id, 
                        available: product.available,
                        currentTotal: currentProduct.total 
                    }
                );
            }

            await setCurrentOrder(
                { 
                    userId: currentUserId,
                    userForm: data,
                    orderedProducts: cart
                }
            )

            await clearCart({ userId: currentUserId })
            setUser(prev => ({...prev, cart: []}))

            navigate('/shop', { replace: true })
    }

    return { submit }
}