import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const validate = () => true;

  const handleClick = () => {
    if (validate()) navigate(input);
  };

  return (
    <div className='grid place-items-center h-[100vh] bg-black'>
      <div>
        <div className='relative'>
          <input
            className='w-[24rem]'
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => (e.key === "Enter" ? handleClick() : null)}
            placeholder='Enter the repository in the format org/repo'
          />
          <div
            className='text-white h-[2.625rem] w-[2.625rem] grid place-items-center bg-gray-500 absolute top-0 right-0 cursor-pointer'
            onClick={handleClick}>
            Go
          </div>
        </div>
        <Link to='/facebook/react'>
          <div className='text-white mt-1'>
            Or go to the <span className='text-[#4EBCFF]'> React</span> issues
            page <i class='fa-solid fa-arrow-right'></i>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
