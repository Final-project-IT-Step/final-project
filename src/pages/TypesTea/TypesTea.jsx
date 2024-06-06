import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Outlet } from 'react-router-dom';
import { useGetTypeTeaQuery } from '../../redux/api';
import { useGetActualData, useGetCurrentTea } from '../../components/TypeTea/hooks';
import { TeaCup, TypeTeaItem } from '../../components/TypeTea';

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