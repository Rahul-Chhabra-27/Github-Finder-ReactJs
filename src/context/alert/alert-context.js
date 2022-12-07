import { createContext, useReducer } from 'react'
import AlertReducer ,{ initialState } from './alert-reducer';

const AlertContext = createContext();

export const Alertprovider = ({ children }) => {
    const [state,dispatch] = useReducer(AlertReducer,initialState);

    const setAlert = (message, typ) => {

        dispatch({ type:'SET_ALERT', payload : { message,typ }});

        setTimeout(() => dispatch({ type: 'REMOVE_ALERT' }),3000);
    }

    return <AlertContext.Provider value = {{ alert : state, setAlert }} >
        { children }
    </AlertContext.Provider>
}

export default AlertContext;