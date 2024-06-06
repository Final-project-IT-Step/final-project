import { useContext } from "react"
import { OrderContext } from "../context"

export const useOrderContext = () => {

    return useContext(OrderContext)
}