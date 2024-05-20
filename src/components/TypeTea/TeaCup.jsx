import React from 'react';
import { useDragAndDrop } from './hooks/useGetDragAndDrop';
import { useGetCurrentTea } from './hooks/useGetCurrentTea';

export const TeaCup = ({ onDropToCup, onDropToList, selectedTea }) => {
  const { filteredData, data } = useGetCurrentTea();
  const { isOver, drag, drop, isDragging } = useDragAndDrop({ onDropToCup, onDropToList, selectedTea, data })
  const currentData = filteredData || selectedTea
  const cupImg = process.env.PUBLIC_URL + '/' + currentData?.img

  return (
    <div>
      <div ref={ drop } className="type-tea__cup-type" style={{ backgroundColor: isOver ? 'lightgreen' : '#9cc3ad' }}>
        {
            currentData 
            ? <img
                ref={ drag }
                src={ cupImg }
                alt={ currentData.typeTea }
                className='type-tea__img'
                style={{ opacity: isDragging ? 0.5 : 1 }}
            />
            : 'Перетягніть сюди'
            
        }
      </div>
    </div>
  );
};
