const About = () => {
  return (
    <>
      <h1 className='text-6xl mb-4'>Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details. This
        project is created by
        <strong>
          <a href='https://github.com/Rahul-Chhabra-27/Github-Finder-ReactJs'>
            {" "}
            Rahul Chhabra{" "}
          </a>
        </strong>
        .
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Layout By:
        <a
          className='text-white'
          href='https://github.com/Rahul-Chhabra-27/Github-Finder-ReactJs'
        >
          Rahul Chhabra
        </a>
      </p>
    </>
  );
};
export default About;
