import React, {useState} from 'react'

export default function Count() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1)
  }

  return (
    <div>
      <h2>
        <button onClick={increment}>Add</button>
        <b>{count}</b>
        <button onClick={decrement}>Subtract</button>
      </h2>
    </div>
  )
}
