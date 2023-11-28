import { useState } from 'react'
import './App.css'

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' }
  ])
  const [personsFiltred, setPersonsFiltred] = useState([])
  const [filtred,setFiltred] = useState(true)
  const handleSubmit = (event) => {
    event.preventDefault()

    // Get Input from Form event
    const { elements } = event.currentTarget;
    // Get Input Name Value
    const name = elements.namedItem("fullname");
    const isInputName = name instanceof HTMLInputElement;

    // Validate if is null
    if (!isInputName || name === null) return;

    // Get Input Phone Value
    const phone = elements.namedItem("phone");
    const isInputPhone = name instanceof HTMLInputElement;

    // Validate if is null
    if (!isInputPhone || name === null) return;


    // Validates
    if (persons.filter(person => person.name === name.value).length !== 0) {
      alert(`${name.value} is already added to phonebook`)
      return
    }
    if (persons.filter(person => person.phone === phone.value).length !== 0) {
      alert(`${phone.value} is already added to phonebook`)
      return
    }
    const newPerson = {
      name: name.value,
      phone: phone.value
    }

    setPersons((prev) => {
      return [...prev, newPerson]
    })

    name.value = ''
    phone.value = ''

  }
  const handleFilter = (event) => {
    event.preventDefault()
    // Get Input from Form event
    const { elements } = event.currentTarget;
    // Get Input Name Value
    const name = elements.namedItem("filter");
    const isInputName = name instanceof HTMLInputElement;
    // Validate if is null
    if (!isInputName || name === null) return;
    
    const filtred = persons.filter(person => person.name.toLocaleLowerCase() === name.value.toLocaleLowerCase())
    setPersonsFiltred(filtred)

    const checkbox = document.getElementsByName('filtred')
    checkbox[0].checked = filtred
    setFiltred((prev)=> {
      return !prev
    })

    name.value = ""

  }
  const handleChange = ()=>{
    setFiltred((prev)=> {
      return !prev
    })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleFilter}>
        <div>
          Filter: <input required name='filter' />
        </div>
        <button>Filter</button>
      </form>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input required name='fullname' />
        </div>
        <div>
          Phone: <input required name='phone' />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        Filtred : <input type="checkbox" name="filtred"  onChange={handleChange}/>
      </div>
      {filtred ? 
      
      persons.map(person => {
        return (
          <p key={crypto.randomUUID()}>{person.name} - {person.phone}</p>
        )
      })
      : 
      
      personsFiltred.map(person => {
        return (
          <p key={crypto.randomUUID()}>{person.name} - {person.phone}</p>
        )
      })




      }
      {}

    </div>
  )
}

export default App
