const initState = {
    MyLifeRedux: [
        { task_name: "di choi", description: "", deadline: "", status: "UnComplete", member: 1 },
        { task_name: "di hoc", description: "", deadline: "", status: "Completed", member: 3 },
        { task_name: "di ngu", description: "", deadline: "", status: "Stopped", member: 1 },
    ]
}

const MyLifeRedux = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TASK_MY_LIFE':
            console.log(action.payload);
            return {
                ...state, MyLifeRedux: [...state.MyLifeRedux, action.payload]
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