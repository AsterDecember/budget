const entriesReducer = (state = initialEntries,action) => {
    let newEntries;
    switch (action.type) {
        case 'ADD_ENTRY':
            newEntries =  state.concat({...action.payload});
            return newEntries
        case 'REMOVE_ENTRY':
            newEntries = state.filter(e => e.id !== action.payload.id)
            return newEntries
        case 'UPDATE_ENTRY':
            newEntries = [...state]
            const index = newEntries.findIndex(e => e.id == action.payload.id)
            newEntries[index] = {...action.payload.entry}
            return newEntries
        default:
            return state;
    }
}
export default entriesReducer

var initialEntries = [
    {
        id: '1',
        description : 'El rash se rifo un abrazo redux',
        value : 4500.00,
        isExpense : false
    },
    {
        id: '2',
        description : 'lonas pedorras de rash :)',
        value : 2500.00,
        isExpense : true
    },
    {
        id: '3',
        description : 'gastos que se transo el chismoso de rash, gastos gammers spawnmark',
        value : 12000.00,
        isExpense : true
    },
    {
        id: '4',
        description : 'renta oficinas spawnmarky 2.0 remasterizado',
        value : 3200.00,
        isExpense : true
    }
]