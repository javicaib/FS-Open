import { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import FormPerson from './components/FormPerson'
import ListPersons from './components/ListPersons'
import './App.css'

function App() {
  const [persons, setPersons] = useState([])
  const [personsFiltred, setPersonsFiltred] = useState([])
  const [filtred, setFiltred] = useState(true)
  
  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  },[])
  
  const handleChange = () => {
    setFiltred((prev) => {
      return !prev
    })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} setFiltred={setFiltred} setPersonsFiltred={setPersonsFiltred} />
      <FormPerson persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <div>
        Filtred : <input type="checkbox" name="filtred" onChange={handleChange} />
      </div>
      <ListPersons filtred={filtred} personsFiltred={personsFiltred} persons={persons} />
    </div>
  )
}

export default App
