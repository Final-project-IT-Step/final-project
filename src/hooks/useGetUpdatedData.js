import { useEffect, useState } from "react";
import { getUpdatedData } from "../utils/getUpdatedData";

export const useGetUpdatedData = (data, searchParams) => {
    const [filteredData, setFilteredData] = useState(data);
    
    useEffect(() => {
        setFilteredData(getUpdatedData(data, searchParams));
    }, [data, searchParams]);

    return { filteredData, setFilteredData };
};