import { useEffect, useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);

  useEffect(async() => {
  });

  return (
    <div className="user-details">
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increase count
      </button>
      <h1>{props.name} mangore functional</h1>
      <h2>From: Kolhapur</h2>
      <h3>software developer</h3>
    </div>
  );
};

export default User;
