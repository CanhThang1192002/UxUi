const initState = {
    WorkspaceRedux: [
        { task: "OOP", task_name: "Complete week 1 ‘s assignment.", description: "Description: Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", Deadline: "14/10/2023", status: "Stopped", member: 1 },
        { task: "OOP", task_name: "Complete week 2 ‘s assignment.", description: "Description: Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", Deadline: "14/10/2023", status: "Completed", member: 3 },
        { task: "OOP", task_name: "Complete week 3 ‘s assignment.", description: "Description: Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", Deadline: "14/10/2023", status: "UnComplete", member: 1 },
    ]
}

const WorkspaceRedux = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TASK_WORKSPACE':
            return {
                state
            }
        case 'EDIT_TASK_WORKSPACE':
            return {
                state
            }
        case 'DELETE_TASK_WORKSPACE':
            return {
                state
            }
        default:
            return state;
    }
}

export default WorkspaceRedux;