import { useState } from 'react'
import './App.css'
import Filter from './components/Filter'
import FormPerson from './components/FormPerson'
import ListPersons from './components/ListPersons'

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' }
  ])
  const [personsFiltred, setPersonsFiltred] = useState([])
  const [filtred, setFiltred] = useState(true)
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
      <ListPersons filtred={filtred} personsFiltred={personsFiltred} persons={persons}/>
    </div>
  )
}

export default App
