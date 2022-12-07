
export const initialState = null;

const AlertReducer = (state = null,{ type, payload }) => {
    if (type === 'SET_ALERT') {
        return payload;
    }
    else if (type === 'REMOVE_ALERT') {
        return null;
    }
    else {
        return state;
    }
}
export default AlertReducer;