const initState = {
    MyLifeRedux: [
        { task_name: "di choi", description: "", deadline: "11/09/2023", status: "UnComplete", member: 1 },
        { task_name: "di hoc", description: "", deadline: "15/10/2023", status: "Completed", member: 3 },
        { task_name: "di ngu", description: "", deadline: "03/10/2023", status: "Stopped", member: 1 },
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
            let newMyLifeRedux = state.MyLifeRedux.filter((item, index) => item.task_name !== action.payload);
            return {
                ...state, MyLifeRedux: newMyLifeRedux
            }
        default:
            return state;
    }
}

export default MyLifeRedux;