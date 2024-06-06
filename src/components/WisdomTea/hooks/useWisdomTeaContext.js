import { useContext } from "react"
import { WisdomTeaContext } from "../context";

export const useWisdomTeaContext = () => {

    return useContext(WisdomTeaContext);
}