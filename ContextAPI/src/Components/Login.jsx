import React, { useState, useContext } from "react";
import userContext from "../Context/userContext";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setpassword] = useState('');
  const { setUser } = useContext(userContext);

  const handelSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  }

  return (
    <form onSubmit={handelSubmit} className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold text-gray-800">Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="User Name"
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        placeholder="Password"
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <button
        type="submit"
        className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 rounded-md transition-colors"
      >
        Submit
      </button>
    </form>
  )
}

export default Login;
