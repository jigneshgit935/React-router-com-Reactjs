import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Github = () => {
  const data = useLoaderData();

  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch('https://api.github.com/users/jigneshgit935')
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  //   console.log(data);
  return (
    <>
      <div className="text-center m-4 bg-gray-600 text-white  p-4 text-3xl">
        <h1> Github Followers: {data.followers}</h1>
        <h3 className="text-xl p-4"> Github Following: {data.following}</h3>
        <h5 className="text-4xl p-4">Name: {data.name}</h5>
        <h6>Location: {data.location}</h6>

        <img
          style={{ margin: 'auto' }}
          src={data.avatar_url}
          width={300}
          height={300}
          className="p-5"
          alt="img-url"
        />
      </div>
    </>
  );
};

export default Github;

// eslint-disable-next-line react-refresh/only-export-components
export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/jigneshgit935');
  return response.json();
};
