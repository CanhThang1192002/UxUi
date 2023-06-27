const initState = {
    MyLifeRedux: [
        { id: 1, workspace: "mylife", task_name: "hang out", description: " go camping, travel with family and friends go camping, travel with family and friends go camping, travel with family and friends go camping, travel with family and friends ", deadline: "5/05/2023", status: "Completed", member: 1, favourite: true },
        { id: 2, workspace: "mylife", task_name: "go to school", description: " go to work at hthx company go to work at hthx company go to work at hthx company", deadline: "6/5/2023", status: "Completed", member: 3, favourite: false },
        { id: 3, workspace: "mylife", task_name: "hang out", description: "go camping, travel with family and friends go camping, travel with family and friends go to work at hthx company go to work at hthx company", deadline: "9/5/2023", status: "Stopped", member: 1, favourite: true },
        { id: 4, workspace: "mylife", task_name: "go to work", description: "go to work at hthx company go to work at hthx company go to work at hthx company", deadline: "15/5/2023", status: "Stopped", member: 1, favourite: true },
        { id: 5, workspace: "mylife", task_name: "go to school", description: "go camping, travel with family and friends go camping, travel with family and friends go camping, travel with family and friends go camping, travel with family and friends", deadline: "18/5/2023", status: "Completed", member: 3, favourite: false },
        { id: 6, workspace: "mylife", task_name: "hang out", description: " hanging out with friends in high school hanging out with friends in high school", deadline: "20/5/2023", status: "Completed", member: 1, favourite: false },
        { id: 7, workspace: "mylife", task_name: "go to school", description: "go to work at hthx company go to work at hthx company", deadline: "22/5/2023", status: "Completed", member: 1, favourite: false },
        { id: 8, workspace: "mylife", task_name: "go to work", description: "go to work at hthx company go to work at hthx company", deadline: "26/5/2023", status: "Stopped", member: 1, favourite: false },
        { id: 9, workspace: "mylife", task_name: "hang out", description: "hanging out with friends in high school hanging out with friends in high school", deadline: "26/5/2023", status: "Completed", member: 2, favourite: true },
        { id: 10, workspace: "mylife", task_name: "hang out", description: "hanging out with friends in high school hanging out with friends in high school", deadline: "28/5/2023", status: "Stopped", member: 4, favourite: false },
        { id: 11, workspace: "mylife", task_name: "traveling", description: "go to work at hthx company go to work at hthx company", deadline: "1/6/2023", status: "Completed", member: 1, favourite: false },
        { id: 12, workspace: "mylife", task_name: "go to work", description: "go camping, travel with family and friends go camping, travel with family and friends", deadline: "3/6/2023", status: "Completed", member: 1, favourite: false },
        { id: 13, workspace: "mylife", task_name: "traveling", description: "go to work at hthx company go to work at hthx company", deadline: "6/6/2023", status: "Completed", member: 1, favourite: false },
        { id: 14, workspace: "mylife", task_name: "go to school", description: "go to work at hthx company go to work at hthx company", deadline: "10/6/2023", status: "Completed", member: 1, favourite: true },
        { id: 15, workspace: "mylife", task_name: "hang out", description: "hanging out with friends in high school hanging out with friends in high school", deadline: "10/6/2023", status: "Stopped", member: 1, favourite: false },
        { id: 16, workspace: "mylife", task_name: "go to work", description: "go to work at hthx company go to work at hthx company", deadline: "19/6/2023", status: "Completed", member: 2, favourite: false },
        { id: 17, workspace: "mylife", task_name: "traveling", description: "go camping, travel with family and friends go camping, travel with family and friends", deadline: "21/6/2023", status: "Completed", member: 1, favourite: true },
        { id: 18, workspace: "mylife", task_name: "traveling", description: "go to work at hthx company go to work at hthx company", deadline: "24/6/2023", status: "Stopped", member: 1, favourite: false },
        { id: 19, workspace: "mylife", task_name: "go to work", description: "go camping, travel with family and friends go camping, travel with family and friends", deadline: "26/6/2023", status: "Completed", member: 3, favourite: true },
        { id: 20, workspace: "mylife", task_name: "go camping", description: "", deadline: "26/6/2023", status: "Stopped", member: 1, favourite: false },
        { id: 21, workspace: "mylife", task_name: "go to school", description: "go camping, travel with family and friends go camping, travel with family and friends", deadline: "27/6/2023", status: "UnComplete", member: 1, favourite: true },
        { id: 22, workspace: "mylife", task_name: "go to school", description: "go to work at hthx company go to work at hthx company", deadline: "27/6/2023", status: "Completed", member: 2, favourite: false },
        { id: 23, workspace: "mylife", task_name: "go camping", description: "go to work at hthx company go to work at hthx company", deadline: "29/6/2023", status: "UnComplete", member: 1, favourite: false },
        { id: 24, workspace: "mylife", task_name: "hang out", description: "hanging out with friends in high school hanging out with friends in high school", deadline: "1/7/2023", status: "Completed", member: 1, favourite: true },
        { id: 25, workspace: "mylife", task_name: "go to work", description: "go to work at hthx company go to work at hthx company", deadline: "2/7/2023", status: "UnComplete", member: 1, favourite: false },
        { id: 26, workspace: "mylife", task_name: "go camping", description: "go camping, travel with family and friends go camping, travel with family and friends", deadline: "6/7/2023", status: "UnComplete", member: 3, favourite: false },
        { id: 27, workspace: "mylife", task_name: "go to work", description: "go to work at hthx company go to work at hthx company", deadline: "11/7/2023", status: "UnComplete", member: 2, favourite: false },
        { id: 28, workspace: "mylife", task_name: "hang out", description: "go camping, travel with family and friends go camping, travel with family and friends", deadline: "12/7/2023", status: "UnComplete", member: 1, favourite: false },
        { id: 29, workspace: "mylife", task_name: "go to work", description: "go to work at hthx company go to work at hthx company", deadline: "20/7/2023", status: "UnComplete", member: 1, favourite: true },
        { id: 30, workspace: "mylife", task_name: "go to school", description: "go camping, travel with family and friends go camping, travel with family and friends", deadline: "22/7/2023", status: "UnComplete", member: 1, favourite: false },
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
            let newMyLifeRedux1 = state.MyLifeRedux.map((item, index) => {
                if (item.id === action.payload.id) {
                    return action.payload;
                }
                return item;
            })
            return {
                ...state, MyLifeRedux: newMyLifeRedux1
            }
        case 'DELETE_TASK_MY_LIFE':
            let newMyLifeRedux = state.MyLifeRedux.filter((item, index) => item.id !== action.payload);
            return {
                ...state, MyLifeRedux: newMyLifeRedux
            }
        default:
            return state;
    }
}

export default MyLifeRedux;