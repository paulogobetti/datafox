
    let people = [
        { id: 1, name: "Goku", children: [], parent: null },
        { id: 6, name: "Vegeta", children: [], parent: null },
        { id: 7, name: "Picolo", children: [], parent: null },
        { id: 8, name: "Gohan", children: null, parent: 1 },
        { id: 18, name: "Goten", children: null, parent: 1 },
        { id: 10, name: "Trunks", children: null, parent: 6 },
        { id: 20, name: 'Kuririn', children: [], parent: null }
    ]

    const listTable = () => {
        // alert('LISTAR TABELA')
    }

    const addParent = (e) => {
        e.preventDefault()

        let parent = {
            id: Date.now(),
            name: document.getElementById('name').value,
            children: [],
            parent: null
        }

        if(parent.name == '') {
            alert('Oops! Something needs to be filled in here.')
        } else {
            people.push(parent)

            listTable()
        }

        document.forms[0].reset()

        document.getElementById('text-area').value = JSON.stringify(people, '\t', 2)
    }

    const addChild = () => {
        let filho = prompt('Insert a child:')
        alert('The object child name is: ' + filho)
    }

    // people.forEach(i => {
    //     console.log('Hello')
    // })

    const removeParent = () => {
        alert('removeParent')
    }

    const removeChild = () => {
        alert('removeChild')
    }

    listTable()

    document.getElementById('text-area').value = JSON.stringify(people, '\t', 2)

    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('add-parent').addEventListener('click', addParent)
    })

    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('add-child').addEventListener('click', addChild)
    })

    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('remove-parent').addEventListener('click', removeParent)
    })

    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('remove-child').addEventListener('click', removeChild)
    })
