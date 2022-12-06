import { useEffect, useState } from "react";
import Spinner from "../ui/spinner";

const UserResults = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      usersFetchedData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const usersFetchedData = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`);
    const data = await response.json();

    setUsers(data);
    setLoading(false);
    return data;
  };
  if(loading) return <Spinner />
  return (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-colos-2'>
      {" "}
      {users.map((user) => {
        return <h1>{user.login}</h1>;
      })}{" "}
    </div>
  );
};
export default UserResults;
