import { useState } from 'react'
import './App.css'
const StatisticLine = (props) => {
  const { name, value } = props
  return (
    <tr><td>{name}: {value}</td></tr>
  )
}

const Statistics = (props) => {
  const { good, neutral, bad } = props
  const total = good + neutral + bad
  const avg = (good - bad) / total
  const positve = (good * 100) / total
  return (
    <>
      {total == 0 ?
        (
          <h2>No feedback given</h2>
        )
        : (
          <>
            <h2>Statistics</h2>
            <table>
              <tbody>
                <StatisticLine name="Good" value={good} />
                <StatisticLine name="Neutral" value={neutral} />
                <StatisticLine name="Bad" value={bad} />
                <StatisticLine name="All" value={total} />
                <StatisticLine name="Avg" value={avg} />
                <StatisticLine name="Positive" value={positve} />
              </tbody>
            </table>
          </>
        )}

    </>
  )
}

function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handleClick = (setState) => {
    setState((prev) => {
      return prev += 1
    })
  }


  return (
    <>
      <h1>Give us feedback</h1>
      <button onClick={() => handleClick(setGood)}>Good</button>
      <button onClick={() => handleClick(setNeutral)}>Neutral</button>
      <button onClick={() => handleClick(setBad)}>Bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App
