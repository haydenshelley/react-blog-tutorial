import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("Hayden");
  const [age, setAge] = useState(29);

  const handleClick = () => {
    setName("Jaime");
    setAge(28);
  };

  return (
    <div className="home">
      <h2>Home Page</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Home;
