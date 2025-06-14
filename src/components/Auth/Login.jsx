import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="border-2 border-red-600 p-4">
        {/* <h1 className='text-2xl'>Login</h1> */}
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col items-center justify-center gap-2"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="border-2 border-gray-500 p-2"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="border-2 border-gray-500 p-2"
          />
          <button type="submit" className="border-2 border-gray-500 p-2">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
