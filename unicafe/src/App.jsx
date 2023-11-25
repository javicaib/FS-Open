import { useState } from 'react'
import './App.css'

function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handleClick = (setState) => {
    setState((prev) => {
      return prev += 1
    })
  }
  const total = good + neutral + bad
  const avg = (good - bad)/total
  const positve = (good*100)/total
  
  return (
    <>
      <h1>Give us feedback</h1>
      <button onClick={() => handleClick(setGood)}>Good</button>
      <button onClick={() => handleClick(setNeutral)}>Neutral</button>
      <button onClick={() => handleClick(setBad)}>Bad</button>
      <h2>Statistics</h2>
      <p>Good : {good}</p>
      <p>Neutal :{neutral}</p>
      <p>Bad : {bad}</p>
      <p>All : {total}</p>
      <p>Average: {avg}</p>
      <p>Positve: {positve} </p>
    </>
  )
}

export default App
