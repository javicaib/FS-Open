function Filter({persons,setFiltred,setPersonsFiltred}) {
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
        setFiltred((prev) => {
            return !prev
        })

        name.value = ""

    }
    return (
        <form onSubmit={handleFilter}>
            <div>
                Filter: <input required name='filter' />
            </div>
            <button>Filter</button>
        </form>
    )
}
export default Filter