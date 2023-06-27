const initState = {
    WorkspaceRedux: [
        { id: 1, workspace: "OOP", task_name: "week 1 assignment", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "04/5/2023", status: "Stopped", member: 1, favourite: true },
        { id: 2, workspace: "OOP", task_name: "week 2 assignment", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "07/5/2023", status: "Completed", member: 3, favourite: false },
        { id: 3, workspace: "UIUX", task_name: "week 3 assignment", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "08/5/2023", status: "Completed", member: 4, favourite: false },
        { id: 4, workspace: "UIUX", task_name: "Group assignment week 4", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "15/5/2023", status: "Completed", member: 4, favourite: false },
        { id: 5, workspace: "OOP", task_name: "week 5 assignment", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "19/5/2023", status: "Stopped", member: 1, favourite: true },
        { id: 6, workspace: "OOP", task_name: "Group assignment week 6", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "25/5/2023", status: "Completed", member: 1, favourite: false },
        { id: 7, workspace: "AI", task_name: "Group assignment week 7", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "26/5/2023", status: "Stopped", member: 1, favourite: false },
        { id: 8, workspace: "AI", task_name: "midterm assignment ", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "27/5/2023", status: " Completed", member: 2, favourite: false },
        { id: 9, workspace: "OOP", task_name: "final assignment ", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "28/5/2023", status: "Stopped", member: 3, favourite: false },
        { id: 10, workspace: "UIUX", task_name: "week 8 s assignment.", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "01/6/2023", status: " Completed", member: 1, favourite: true },
        { id: 11, workspace: "UIUX", task_name: "week 9 s assignment.", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "03/6/2023", status: " Completed", member: 4, favourite: true },
        { id: 12, workspace: "UIUX", task_name: "Group assignment week 10", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "06/6/2023", status: " Completed", member: 1, favourite: true },
        { id: 13, workspace: "OOP", task_name: "week 11 s assignment.", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "07/6/2023", status: "Stopped", member: 1, favourite: false },
        { id: 14, workspace: "OOP", task_name: "week 12 s assignment.", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "12/6/2023", status: "Stopped", member: 2, favourite: false },
        { id: 15, workspace: "AI", task_name: "group exercise report", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "12/6/2023", status: " Completed", member: 1, favourite: true },
        { id: 16, workspace: "UIUX", task_name: "midterm assignment", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "18/6/2023", status: " Completed", member: 3, favourite: false },
        { id: 17, workspace: "OOP", task_name: "final assignment", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "22/6/2023", status: "Stopped", member: 1, favourite: false },
        { id: 18, workspace: "AI", task_name: "week 13 s assignment.", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "27/6/2023", status: " Completed", member: 4, favourite: false },
        { id: 19, workspace: "AI", task_name: "Group assignment week 14", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "27/6/2023", status: "UnComplete", member: 1, favourite: false },
        { id: 20, workspace: "AI", task_name: "week 15 s assignment.", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "27/6/2023", status: "UnComplete", member: 1, favourite: true },
        { id: 21, workspace: "OOP", task_name: "midterm assignment.", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "05/7/2023", status: "UnComplete", member: 4, favourite: false },
        { id: 22, workspace: "AI", task_name: "Group assignment week 16", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "08/7/2023", status: "UnComplete", member: 1, favourite: true },
        { id: 23, workspace: "UIUX", task_name: "final assignment", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "08/7/2023", status: " Completed", member: 1, favourite: false },
        { id: 24, workspace: "UIUX", task_name: "week 17 s assignment.", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "15/7/2023", status: "UnComplete", member: 4, favourite: false },
        { id: 25, workspace: "AI", task_name: "Group assignment week 18", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "16/7/2023", status: "UnComplete", member: 1, favourite: false },
        { id: 26, workspace: "AI", task_name: "midterm assignment", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "22/7/2023", status: "UnComplete", member: 3, favourite: true },
        { id: 27, workspace: "OOP", task_name: "week 19 s assignment.", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "25/7/2023", status: " Completed", member: 1, favourite: false },
        { id: 28, workspace: "UIUX", task_name: "final assignment", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "28/7/2023", status: "UnComplete", member: 2, favourite: false },
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