import { useEffect, useState } from "react";
import { getUpdatedData } from "../utils";

export const useGetUpdatedData = (data, searchParams) => {
    const [filteredData, setFilteredData] = useState(data);
    
    useEffect(() => {
        if (data.length) {
            setFilteredData(getUpdatedData(data, searchParams))
        };
    }, [data, searchParams]);

    return { filteredData, setFilteredData };
};