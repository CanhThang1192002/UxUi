const initState = {
    WorkspaceRedux: [
        { workspace: "OOP", task_name: "Complete week 1 s assignment.", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "04/10/2023", status: "Stopped", member: 1 },
        { workspace: "OOP", task_name: "Complete week 2 s assignment.", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "14/10/2023", status: "Completed", member: 3 },
        { workspace: "OOP", task_name: "Complete week 3 s assignment.", description: " Work with Maria, John and Mia to solve the assignment of week 4, and create a repository for ex.", deadline: "15/9/2023", status: "UnComplete", member: 1 },
    ],
    Workspaces: [
        { Workspaces_name: "OOP", Workspaces_type: "subject" },
        { Workspaces_name: "UIUX", Workspaces_type: "project" },
    ]
}

const WorkspaceRedux = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TASK_WORKSPACE':
            return {
                ...state, WorkspaceRedux: [...state.WorkspaceRedux, action.payload]
            }
        case 'EDIT_TASK_WORKSPACE':
            return {
                state
            }
        case 'DELETE_TASK_WORKSPACE':
            let newWorkspaceRedux = state.WorkspaceRedux.filter((item, index) => item.task_name !== action.payload);
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