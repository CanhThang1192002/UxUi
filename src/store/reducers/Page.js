const initState = {
    Page: ""
}
const Page = (state = initState, action) => {
    switch (action.type) {
        case 'SET_PAGE':
            return {
                Page: action.payload
            }
        default:
            return state;
    }
}

export default Page;