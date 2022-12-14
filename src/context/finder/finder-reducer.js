export const initialState = { users: [], activeUser : {}, repos : [], loading: false, };

const githubReducer = ( state = initialState ,{ type, payload } ) => {
    if (type === 'GET_USERS') {
        return { ...state, users : payload.data , loading: false };
    }
    else if (type === 'GET_ACTIVE_USER') {
        console.log(payload.item.repos);
        return { ...state, activeUser: payload.item.user, repos : payload.item.repos, loading: false };
    }
    else if (type === 'SET_LOADING') {
        return { ...state, loading:true };
    }
    else if (type === 'CLEAR_STATE') {
        return { ...state, users:[], loading:false };
    }
}
export default githubReducer;