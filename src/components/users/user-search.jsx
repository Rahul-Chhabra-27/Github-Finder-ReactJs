import { useState, useContext } from "react";
import gitHubContext from "../../context/finder/finder-context";
import AlertContext from "../../context/alert/alert-context";

const UserSearch = () => {
  const [text, setText] = useState("");
  const { users, usersFetchedData, clearState } = useContext(gitHubContext);
  const { setAlert } = useContext(AlertContext);

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === "") setAlert("Please add something", "error");
    else {
      usersFetchedData(text);
      setText("");
    }
  };

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb:8 gap-8'>
      <div className=''>
        <form onSubmit={onSubmit}>
          <div className='form-control'>
            <div className='relative'>
              <input
                type='text'
                className='w-full pr-40 bg-gray-200 input input-lg text-black'
                placeholder='Enter Your Github Username'
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button
                type='submit'
                className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div className=''>
          <button className='btn btn-ghost btn-lg' onClick={() => clearState()}>Clear</button>
        </div>
      )}
    </div>
  );
};
export default UserSearch;
