import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const handleSubmit = (event)=>{
    event.preventDefault()
    
    // Get Input Value
    const { elements } = event.currentTarget;
    const name = elements.namedItem("fullname");
    const isInputName = name instanceof HTMLInputElement;
    if (!isInputName || name === null) return;

    if(persons.filter(person => person.name === name.value).length !== 0) {
      alert(`${name.value} is already added to phonebook`)
      return
    }
    setNewName(name.value)
    name.value = ''
  }
  useEffect(()=>{
    const newPerson = {
      name : newName
    }
    setPersons((prev)=> {
      return [...prev,newPerson]
    })
    setNewName('')
  },[newName])
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name='fullname' />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person=>{
        return (
          <p key={crypto.randomUUID()}>{person.name}</p>
        )
      })}
      
    </div>
  )
}

export default App
