export const addEntryRedux = (payload) => ({type:'ADD_ENTRY',payload})
export const updateEntryRedux = (id,entry) => ({type:'UPDATE_ENTRY',payload:{id,entry}})
export const removeEntryRedux = (payload) => ({type:'REMOVE_ENTRY',payload})