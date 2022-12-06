export const initialState = { users: [], loading: false };

const githubReducer = ( state = initialState ,{ type, payload } ) => {
    if (type === 'GET_USERS') {
        return { ...state, users : payload.data , loading: false };
    }
    else if (type === 'SET_LOADING') {
        return { ...state, loading:true };
    }
}
export default githubReducer;