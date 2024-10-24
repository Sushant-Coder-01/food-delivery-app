import useCounter from "../utils/useCounter";
import UserClass from "./UserClass";

const About = () => {
  const { count, increment, reset } = useCounter(0);

  return (
    <div>
      <div className="border-2 m-4 p-4">
        <h1 className="text-4xl m-4 p-4">Count: {count}</h1>
        <button
          onClick={increment}
          className="text-2xl border-black border-2 m-2 px-2 my-1 rounded-md bg-gray-300"
        >
          increment
        </button>
        <button
          onClick={reset}
          className="text-2xl border-black border-2 m-2 px-2 my-1 rounded-md bg-gray-300"
        >
          reset
        </button>
      </div>
      <div>
        <UserClass name={"Sushant"} age={24} />
      </div>
    </div>
  );
};

export default About;
