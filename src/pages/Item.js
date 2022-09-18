import React from 'react';
import '../App.css';

function Item(props) {
  return (
    <div className='item'>
      {props.item}
      <button onClick={() => props.onRemove(props.index)}>삭제</button>
    </div>
  );
}

export default Item;
