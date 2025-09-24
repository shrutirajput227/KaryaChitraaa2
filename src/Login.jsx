import React, { useState } from "react";

export const Login = () => {
  const [role, setRole] = useState("client");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in as ${role}\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-md shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <div className="flex justify-center mb-6 space-x-4">
          <button
            type="button"
            onClick={() => setRole("client")}
            className={`
              px-4 py-2 rounded-md font-semibold
              transition transform duration-150
              ${
                role === "client"
                  ? "bg-orange-500 text-white shadow-lg translate-y-0"
                  : "bg-gray-200 text-gray-700 shadow-md hover:translate-y-[-2px] hover:shadow-lg"
              }
            `}
          >
            Client
          </button>
          <button
            type="button"
            onClick={() => setRole("freelancer")}
            className={`
              px-4 py-2 rounded-md font-semibold
              transition transform duration-150
              ${
                role === "freelancer"
                  ? "bg-orange-500 text-white shadow-lg translate-y-0"
                  : "bg-gray-200 text-gray-700 shadow-md hover:translate-y-[-2px] hover:shadow-lg"
              }
            `}
          >
            Freelancer
          </button>
        </div>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 mb-6 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
        >
          Login as {role.charAt(0).toUpperCase() + role.slice(1)}
        </button>
         <p class="text-sm text-gray-400 mt-4 text-center">
         Don't have an account?
         <a href="/register" class="text-orange-400 hover:underline">Sign Up</a>
        </p>
      </form>
    </div>
  );

};
