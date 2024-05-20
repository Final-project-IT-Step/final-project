import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useGetTypeTeaQuery } from '../../redux';
import { TypeTeaItem} from '../../components/TypeTea/TypeTeaItem';
import { TeaCup } from '../../components/TypeTea/TeaCup';
import { Outlet } from 'react-router-dom';
import { useGetActualData } from '../../components/TypeTea/hooks/useGetActualData';
import { useGetCurrentTea } from '../../components/TypeTea/hooks/useGetCurrentTea';

export const TypesTea = () => {
    const { error, isLoading } = useGetTypeTeaQuery();
    const { remainingTeas, selectedTea, handleDropToCup, handleDropToList, data = [] } = useGetActualData();
    const { filteredRemainingTeas } = useGetCurrentTea(data);
  
    if (isLoading) return <p>Завантаження...</p>;
    if (error) return <p>Виникла помилка: {error.message}</p>;
  
    return (
      <DndProvider backend={ HTML5Backend }>
        <div className='main'>
          <h1>ВИДИ ЧАЮ</h1>
  
          <div className='type-tea__type'>
            {remainingTeas && filteredRemainingTeas.map(tea => (
              <TypeTeaItem 
                key={tea?.id} 
                tea={tea}
              />
            ))}
          </div>
  
          <div className='type-tea__info-wrapper'>
            <TeaCup 
              onDropToCup={ handleDropToCup } 
              onDropToList={ handleDropToList } 
              selectedTea={ selectedTea } 
            />
          </div>
          <Outlet />
        </div>
      </DndProvider>
    );
};