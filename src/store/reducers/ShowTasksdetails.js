const initialState = {
    show: false,
    data: { id: 0, workspace: "", task_name: "", description: " ", deadline: "", status: "", member: 1, favoutite: false }
}
const ShowTasksdetails = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_TASKS_DETAILS':
            return {
                show: true,
                data: action.payload
            }
        case 'CLOSE_TASKS_DETAILS':
            return {
                ...state, show: false
            }
        default:
            return state
    }
}
export default ShowTasksdetails;