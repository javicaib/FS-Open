function FormPerson({persons,setPersons}) {
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
    return (
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
    )
}
export default FormPerson