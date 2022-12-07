import { createContext, useReducer } from "react";
import githubReducer, { initialState } from "./finder-reducer";

const gitHubContext = createContext({ users:[], loading:false, usersFetchedData:() => {} });

export const GithubProvider = ({ children }) => {
  const [state,dispatch] = useReducer(githubReducer, initialState);
  
  const { users, loading } = state;
  
  const usersFetchedData = async (text) => {
    dispatch({ type:'SET_LOADING' });
    const params = new URLSearchParams({
      q : text
    })
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/search/users?${params}`);
    const { items } = await response.json();

    dispatch({ type:'GET_USERS', payload:{ data : items }});
    return items;
  };
  const clearState = () => {
    dispatch({ type:'CLEAR_STATE' })
  }
  return <gitHubContext.Provider value={{ users, loading, usersFetchedData, clearState }}>
        {children}
  </gitHubContext.Provider>
};

export default gitHubContext;
