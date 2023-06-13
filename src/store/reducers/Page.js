const initState = {
    Page: "",
    PageWorkspace: ""
}
const Page = (state = initState, action) => {
    switch (action.type) {
        case 'SET_PAGE':
            return {
                Page: action.payload
            }
        case 'SET_PAGE_WORKSPACE':
            console.log(action.payload);
            return {
                PageWorkspace: action.payload
            }
        default:
            return state;
    }
}

export default Page;