import useCounter from "../utils/useCounter";

const About = () => {
  const { count, increment, reset } = useCounter(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};  

export default About;
