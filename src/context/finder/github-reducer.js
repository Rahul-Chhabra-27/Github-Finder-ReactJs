export const initialState = { users: [], loading: true };

const githubReducer = ( state = initialState ,{ type, payload } ) => {
    if (type === 'GET_USERS') {
        console.log(payload.data);
        return { ...state, users : payload.data , loading: false };
    }
}
export default githubReducer;