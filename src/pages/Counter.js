import React, { useState } from 'react';

function Counter() {
  const [num, setNum] = useState(0);
  return (
    <div>
      <button onClick={() => setNum(num + 1)}>+1</button>
      <button onClick={() => setNum(num - 1)}>-1</button>
      <br />
      <p>{num}</p>
    </div>
  );
}

export default Counter;
