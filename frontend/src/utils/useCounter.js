import { useState } from "react";

const useCounter = (initialValue) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(initialValue);
  };

  return { count, increment, reset };
};

export default useCounter;
