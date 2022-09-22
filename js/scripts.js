
    let people = [
        { id: 1, name: "Goku", children: [], parent: null },
        { id: 6, name: "Vegeta", children: [], parent: null },
        { id: 7, name: "Picolo", children: [], parent: null },
        { id: 8, name: "Gohan", children: null, parent: 1 },
        { id: 18, name: "Goten", children: null, parent: 1 },
        { id: 10, name: "Trunks", children: null, parent: 6 },
        { id: 20, name: 'Kuririn', children: [], parent: null }
    ]

    people.forEach(i => {
        console.log('Hello')
    })

    document.getElementById('text-area').value = JSON.stringify(people, '\t', 2)
