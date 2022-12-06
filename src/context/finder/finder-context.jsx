import { createContext, useReducer } from "react";
import githubReducer, { initialState } from "./github-reducer";

const gitHubContext = createContext({ users:[], loading:true, usersFetchedData:() => {} });

export const GithubProvider = ({ children }) => {
  const [state,dispatch] = useReducer(githubReducer, initialState);
  
  const { users, loading } = state;
  
  const usersFetchedData = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`);
    const data = await response.json();

    dispatch({ type:'GET_USERS', payload:{ data } });
    return data;
  };

  return <gitHubContext.Provider value={{ users, loading, usersFetchedData }}>
        {children}
  </gitHubContext.Provider>
};

export default gitHubContext;
