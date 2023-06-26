const initState = {
    Login: [
        { id: 1, username: "namidol@gmail.com", password: "1234", firstName: "Nam", lastName: "Nguyen" },
        { id: 2, username: "nhanidol@gmail.com", password: "4567", firstName: "Nhan", lastName: "Nguyen" },
    ]
}

const Login = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state, Login: [...state.Login, action.payload]
            }
        default:
            return state;
    }
}

export default Login;