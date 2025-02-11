import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate asynchronous data fetching
    setTimeout(() => {
      setData({ name: 'John Doe' });
    }, 1000);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Name: {data?.name || 'Loading...'}</p> 
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
export default MyComponent;