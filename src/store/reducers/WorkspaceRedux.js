const initState = {
    WorkspaceRedux: [
        { id: 1, workspace: "OOP", task_name: "week 1 assignment", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "04/10/2023", status: "Stopped", member: 1, favourite: true },
        { id: 2, workspace: "OOP", task_name: "week 2 assignment", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "14/10/2023", status: "Completed", member: 3, favourite: false },
        { id: 3, workspace: "OOP", task_name: "week 3 assignment", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "15/9/2023", status: "UnComplete", member: 1, favourite: true },
        { id: 4, workspace: "OOP", task_name: "Group assignment week 4", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "15/9/2023", status: "UnComplete", member: 1, favourite: true },
        { id: 5, workspace: "OOP", task_name: "week 5 assignment", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "15/9/2023", status: "UnComplete", member: 1, favourite: true },
        { id: 6, workspace: "OOP", task_name: "Group assignment week 6", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "15/9/2023", status: "UnComplete", member: 1, favourite: true },
        { id: 7, workspace: "OOP", task_name: "Group assignment week 7", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "15/9/2023", status: "UnComplete", member: 1, favourite: true },
        { id: 8, workspace: "OOP", task_name: "midterm assignment ", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "15/9/2023", status: "UnComplete", member: 1, favourite: true },
        { id: 9, workspace: "OOP", task_name: "final assignment ", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "15/9/2023", status: "UnComplete", member: 1, favourite: true },
        { id: 10, workspace: "UIUX", task_name: "week 3 s assignment.", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "15/9/2023", status: "UnComplete", member: 1, favourite: true },
        { id: 11, workspace: "UIUX", task_name: "week 3 s assignment.", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "15/9/2023", status: "UnComplete", member: 1, favourite: true },
        { id: 12, workspace: "UIUX", task_name: "week 3 s assignment.", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "15/9/2023", status: "UnComplete", member: 1, favourite: true },
        { id: 13, workspace: "UIUX", task_name: "week 3 s assignment.", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "15/9/2023", status: "UnComplete", member: 1, favourite: true },
        { id: 14, workspace: "UIUX", task_name: "week 3 s assignment.", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "15/9/2023", status: "UnComplete", member: 1, favourite: true },
        { id: 15, workspace: "UIUX", task_name: "group exercise report", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "15/9/2023", status: "UnComplete", member: 1, favourite: true },
        { id: 16, workspace: "UIUX", task_name: "midterm assignment", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "15/9/2023", status: "UnComplete", member: 1, favourite: true },
        { id: 17, workspace: "UIUX", task_name: "final assignment", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "15/9/2023", status: "UnComplete", member: 1, favourite: true },
        { id: 18, workspace: "AI", task_name: "week 3 s assignment.", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "15/9/2023", status: "UnComplete", member: 1, favourite: true },
        { id: 19, workspace: "AI", task_name: "week 3 s assignment.", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "15/9/2023", status: "UnComplete", member: 1, favourite: true },
        { id: 20, workspace: "AI", task_name: "week 3 s assignment.", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "15/9/2023", status: "UnComplete", member: 1, favourite: true },
        { id: 21, workspace: "AI", task_name: "week 3 s assignment.", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "15/9/2023", status: "UnComplete", member: 1, favourite: true },
        { id: 22, workspace: "AI", task_name: "week 3 s assignment.", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "15/9/2023", status: "UnComplete", member: 1, favourite: true },

    ],
    Workspaces: [
        { Workspaces_name: "OOP", Workspaces_type: "subject" },
        { Workspaces_name: "UIUX", Workspaces_type: "subject" },
        { Workspaces_name: "AI", Workspaces_type: "project" },
    ]
}

const WorkspaceRedux = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TASK_WORKSPACE':
            return {
                ...state, WorkspaceRedux: [...state.WorkspaceRedux, action.payload]
            }
        case 'EDIT_TASK_WORKSPACE':
            let newWorkspaceRedux1 = state.WorkspaceRedux.map((item, index) => {
                if (item.id === action.payload.id) {
                    return action.payload;
                }
                return item;
            })
            return {
                ...state, WorkspaceRedux: newWorkspaceRedux1
            }
        case 'DELETE_TASK_WORKSPACE':
            let newWorkspaceRedux = state.WorkspaceRedux.filter((item, index) => item.id !== action.payload);
            return {
                ...state, WorkspaceRedux: newWorkspaceRedux
            }
        case 'ADD_WORKSPACE':
            return {
                ...state, Workspaces: [...state.Workspaces, action.payload]
            }
        case 'DELETE_WORKSPACE':
            let newWorkspaces = state.Workspaces.filter((item, index) => item.Workspaces_name !== action.payload);
            let newWorkspaceRedux2 = state.WorkspaceRedux.filter((item, index) => item.workspace !== action.payload);
            return {
                ...state, Workspaces: newWorkspaces, WorkspaceRedux: newWorkspaceRedux2
            }
        case 'EDIT_WORKSPACE':
            return {
                state
            }
        default:
            return state;
    }
}

export default WorkspaceRedux;