import { useShopContext } from "../../Shop/hooks";

export const useGetOrderedProducts = () => {
    const { setTotalAmount, data = [], orders = [] } = useShopContext();


    return { orders, data, setTotalAmount }
}