import React, { useState } from 'react';
import '../App.css';
import Item from './Item';

function List(props) {
  return (
    <div className='list'>
      {props.list.map((item, index) => (
        <Item
          item={item}
          index={index}
          key={item + '_' + index}
          onRemove={props.onRemove}
        />
      ))}
    </div>
  );
}

export default List;
