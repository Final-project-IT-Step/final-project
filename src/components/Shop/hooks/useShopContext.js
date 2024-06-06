import { useContext } from "react"
import { ShopContext } from "../context"

export const useShopContext = () => {

    return useContext(ShopContext)
}