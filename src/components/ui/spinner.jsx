import Loader from "./assets/spinner.gif";

const Spinner = () => {
  return (
    <div className='w-100 mt-20'>
      <img
        width={185}
        src={Loader}
        alt='Loading...'
        className='text-center mx-auto'
      />
    </div>
  );
};
export default Spinner;
