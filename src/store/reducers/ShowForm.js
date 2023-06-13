const initialState = {
    show: false,
}
const ShowForm = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_ADD_WORKSPACE':
            return {
                show: true
            }
        case 'CLOSE_ADD_WORKSPACE':
            return {
                show: false
            }
        default:
            return state
    }
}
export default ShowForm;