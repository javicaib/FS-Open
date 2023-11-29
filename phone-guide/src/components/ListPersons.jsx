export function ListFilterPersons({ personsFiltred }) {
    return (
        <div>
            {
                personsFiltred.map(person => {
                    return (
                        <p key={crypto.randomUUID()}>{person.name} - {person.number}</p>
                    )
                })
            }
        </div>
    )
}
export function ListAllPersons({ persons }) {
    return (
        <div>
            {
                persons.map(person => {
                    return (
                        <p key={crypto.randomUUID()}>{person.name} - {person.number}</p>
                    )
                })
            }
        </div>
    )
}

function ListPersons({ filtred, persons, personsFiltred }) {
    return (
        <div>
            {filtred ?
                <ListAllPersons persons={persons} />

                :

                <ListFilterPersons personsFiltred={personsFiltred} />

            }
        </div>
    )
}
export default ListPersons