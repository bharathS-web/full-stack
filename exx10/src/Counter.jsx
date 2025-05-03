import { useState } from 'react'
import './Counter.css'

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      
      <div className="card">
        <div className='value'> 
          {count}
        </div>
        <button onClick={() => setCount((count) => count - 1)}>-</button>
        <button onClick={() => setCount((count) => count + 1)}>+</button>
        
      </div>
      
    </>
  )
}

export default Counter;
