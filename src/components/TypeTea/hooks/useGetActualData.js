import { useState } from "react";
import { useGetTypeTeaQuery } from "../../../redux/api";

export const useGetActualData = () => {
    const { data } = useGetTypeTeaQuery();
    const [remainingTeas, setRemainingTeas] = useState([]);
    const [selectedTea, setSelectedTea] = useState(null);

    if (remainingTeas.length === 0 && data) {
      setRemainingTeas(data);
    }
  
    const handleDropToCup = (id) => {
      const tea = remainingTeas.find(tea => tea?.id === id);
      setSelectedTea(tea);
      setRemainingTeas(remainingTeas.filter(tea => tea.id !== id));
    };
  
    const handleDropToList = () => {
      setRemainingTeas([...remainingTeas, selectedTea]);
      setSelectedTea(null);
    };

    return { remainingTeas, selectedTea, handleDropToCup, handleDropToList, data }
}