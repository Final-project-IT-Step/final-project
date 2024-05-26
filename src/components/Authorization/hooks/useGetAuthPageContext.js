import { useContext } from "react"
import { AuthPageContext } from "../context/AuthPageContext"

export const useGetAuthPageContext = () => {

    return useContext(AuthPageContext);
}