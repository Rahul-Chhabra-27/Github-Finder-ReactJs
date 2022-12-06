import { createContext, useState } from "react";

const gitHubContext = createContext();

export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const usersFetchedData = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`);
    const data = await response.json();

    setUsers(data);
    setLoading(false);
    return data;
  };

  return <gitHubContext.Provider value={{ users, loading, usersFetchedData }}>
        {children}
  </gitHubContext.Provider>
};

export default gitHubContext;
