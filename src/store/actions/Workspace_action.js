export const addTaskWorkspace = (task) => {
    return {
        type: 'ADD_TASK_WORKSPACE',
        payload: task
    }
}

export const editTaskWorkspace = (task) => {
    return {
        type: 'EDIT_TASK_WORKSPACE',
        payload: task
    }
}

export const deleteTaskWorkspace = (id) => {
    return {
        type: 'DELETE_TASK_WORKSPACE',
        payload: id
    }
}