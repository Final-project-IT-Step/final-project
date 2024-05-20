import { useDrag, useDrop } from "react-dnd";
import { useNavigate } from "react-router-dom";
import { getCurrentTeaLink } from "../../../utils/getCurrentTeaLink";

export const useDragAndDrop = ({ onDropToCup, onDropToList, selectedTea, data }) => {
    const navigate = useNavigate();

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'TEA',
        drop: (item) => {
          onDropToCup(item.id);
          const curEl = data.find(el => el.id === item.id);
          const path = getCurrentTeaLink(curEl?.typeTea, item?.id);
          navigate(path);
        },
        collect: (monitor) => ( {
          isOver: !!monitor.isOver(),
        } ),
      }));
    
      const [{ isDragging }, drag] = useDrag(() => ({
        type: 'TEA',
        item: { id: selectedTea?.id, typeTea: selectedTea?.typeTea },
        end: (item, monitor) => {
          if (!monitor.didDrop()) {
            onDropToList();
          }
        },
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
      }), [selectedTea]);
  

    return { isOver, drag: null, drop, isDragging: false };
}