const modalsReducer = (state ={isOpen:false},action) => {
    switch (action.type) {
        case 'OPEN_MODAL':
            return  {...state,isOpen:true,id:action.payload.id}
        case 'CLOSE_MODAL':
            break;
        default:
            return state
    }
}

export default modalsReducer