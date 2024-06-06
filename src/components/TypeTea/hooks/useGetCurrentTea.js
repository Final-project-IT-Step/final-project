import { useLocation } from "react-router-dom";
import { useGetTypeTeaQuery } from "../../../redux/api";

export const useGetCurrentTea = () => {
    const { pathname } = useLocation();
    const { data = [] } = useGetTypeTeaQuery();
    const id = pathname?.toString().split('==').slice(-1).join('');
    const filteredRemainingTeas = data.filter(item => item?.id !== id);
    const filteredData = data.find(el => el?.id === id);


    return { filteredRemainingTeas, id, filteredData, data };
}