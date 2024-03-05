import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    console.log("clicked");
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <>
      <h1>LogIn</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default LogIn;
