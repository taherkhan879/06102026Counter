import {useState} from 'react'
import './index.css'

const Counter = () => {
  const [count, setCount] = useState(0)

  const Increase = () => {
    setCount(prvCount => prvCount + 1)
  }
  const Decrease = () => {
    setCount(prvCount => prvCount - 1)
  }
  return (
    <div className="container">
      <h1>Count {count}</h1>
      <div className="btn">
        <button className="increase" onClick={Increase} type="button">
          Increase
        </button>
        <button className="decrease" onClick={Decrease} type="button">
          Decrease
        </button>
      </div>
    </div>
  )
}
export default Counter

// Write your code here
