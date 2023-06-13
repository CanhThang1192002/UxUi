const initState = {
    MyLifeRedux: [
        { task_name: "di choi", description: "", Deadline: "", status: "UnComplete", member: 1 },
        { task_name: "di hoc", description: "", Deadline: "", status: "Completed", member: 3 },
        { task_name: "di ngu", description: "", Deadline: "", status: "Stopped", member: 1 },
    ]
}

const MyLifeRedux = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TASK_MY_LIFE':
            return {
                state
            }
        case 'EDIT_TASK_MY_LIFE':
            return {
                state
            }
        case 'DELETE_TASK_MY_LIFE':
            return {
                state
            }
        default:
            return state;
    }
}

export default MyLifeRedux;