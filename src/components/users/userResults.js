import { useContext } from "react";
import gitHubContext from "../../context/finder/finder-context";
import Spinner from "../ui/spinner";
import User from './user-component';

const UserResults = () => {
  const { users, loading } = useContext(gitHubContext);

  if(loading) return <Spinner />
  return (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-colos-2'>
      { users.map(user => <User user={user} key={user.id} />) }
    </div>
  );
};
export default UserResults;
