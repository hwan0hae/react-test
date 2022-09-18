import React, { useState } from 'react';
import List from './List';

function TodoList() {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);
  const onRemove = (index) => {
    setList(list.filter((item, id) => index !== id));
  };
  return (
    <div>
      <input
        text='text'
        placeholder='입력해라'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={() => setList([...list, input])}>추가</button>
      <br />
      <List list={list} onRemove={onRemove} />
    </div>
  );
}

export default TodoList;
