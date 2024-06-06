import React from 'react';
import { useDrag } from 'react-dnd';
import { Link } from 'react-router-dom';
import { getCurrentTeaLink } from './utils';

export const TypeTeaItem = ({ tea }) => {
  const { id, typeTea, img } = tea
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'TEA',
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const path = getCurrentTeaLink(typeTea, id)
  const teaImg = process.env.PUBLIC_URL + '/' + img

  return (
    <Link 
      to = { path } 
      state = { id } 
      ref={drag} 
      style={{ opacity: isDragging ? 0.5 : 1 }} 
      className={ `type-tea__type_item`}
    >
      <img src={ teaImg } alt={ typeTea } className='type-tea__img' />
      {!isDragging && <p className='type-tea__type_title'>{ typeTea }</p>}
    </Link>
  );
};