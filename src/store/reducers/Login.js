const initState = {
    Login: [
        { id: 1, username: "namidol@gmail.com", password: "1234" },
        { id: 2, username: "nhanidol@gmail.com", password: "4567" },
    ]
}

const Login = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state, login: [...state.login, action.payload]
            }
        default:
            return state;
    }
}

export default Login;