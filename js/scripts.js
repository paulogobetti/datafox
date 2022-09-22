
    let people = [
        { id: 1, name: "Goku", children: [], parent: null },
        { id: 6, name: "Vegeta", children: [], parent: null },
        { id: 7, name: "Picolo", children: [], parent: null },
        { id: 8, name: "Gohan", children: null, parent: 1 },
        { id: 18, name: "Goten", children: null, parent: 1 },
        { id: 10, name: "Trunks", children: null, parent: 6 },
        { id: 20, name: 'Kuririn', children: [], parent: null }
    ]

    const addPerson = (e) => {
        e.preventDefault()

        let person = {
            id: Date.now(),
            name: document.getElementById('name').value,
            children: [],
            parent: null
        }

        if(person.name == '') {
            alert('Oops! Something needs to be filled in here.')
        } else {
            people.push(person)
        }

        document.forms[0].reset()

        document.getElementById('text-area').value = JSON.stringify(people, '\t', 2)
    }

    // people.forEach(i => {
    //     console.log('Hello')
    // })

    document.getElementById('text-area').value = JSON.stringify(people, '\t', 2)

    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('add-person').addEventListener('click', addPerson)
    })
