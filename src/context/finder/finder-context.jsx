import { createContext, useReducer } from "react";
import githubReducer, { initialState } from "./finder-reducer";

const gitHubContext = createContext({ users:[],activeUser:{}, repos:[], loading:false, usersFetchedData:() => {} });

export const GithubProvider = ({ children }) => {
  const [state,dispatch] = useReducer(githubReducer, initialState);
  
  const { users, activeUser, loading, repos } = state;
  
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

  const getActiveUser = async (name) => {
    dispatch({ type: 'SET_LOADING' });
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${name}`);

    if (response.status === 404) {
      window.location = '/notfound';
    }
    else {
      const data = await response.json();
      const repos = await  fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${name}/repos`);
      const reposData = await repos.json(); 
      dispatch({ type : 'GET_ACTIVE_USER', payload: { item : { user : data , repos : reposData } }});
      return [data,reposData];
    }
  }
  // Get user and repos
// const getUserAndRepos = async (login) => {
//   const [user, repos] = await Promise.all([
//     github.get(`/users/${login}`),
//     github.get(`/users/${login}/repos`),
//   ]) 
//   return { user: user.data, repos: repos.data }
// }
  const clearState = () => {
    dispatch({ type:'CLEAR_STATE' })
  }
  return <gitHubContext.Provider value={{ users, repos, activeUser, getActiveUser, loading, usersFetchedData, clearState }}>
        {children}
  </gitHubContext.Provider>
};

export default gitHubContext;
