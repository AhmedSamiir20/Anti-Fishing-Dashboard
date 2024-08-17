import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SeaImage from "../Images/2.jpg";

const LoginPage = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log("Sending login request...");
      const response = await axios.post(
        "http://antifishing.runasp.net/api/Auth/token",
        { email, password }
      );

      console.log("Response received:", response);

      if (response.status === 200 && response.data.isAuthenticated) {
        const userRoles = response.data.roles;

        if (userRoles.includes("Admin")) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data));
          onLoginSuccess();
          navigate("/");
        } else {
          alert("Login failed. User does not have Admin roles.");
        }
      } else {
        alert("Login failed. Invalid email or password.");
      }
    } catch (error) {
      console.error(
        "Error during login:",
        error.response ? error.response.data : error.message
      );
      alert("Error during login. Please try again later.");
    }
  };

  return (
    <section className="bg-[#075061] min-h-screen flex items-center justify-center rounded-xl">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-full p-5 items-center">
        <div className="bg-gray-100 rounded-xl w-150 p-8">
          <h1 className="text-2xl font-bold mb-5 text-center text-[#075061]">
            Login
          </h1>
          <form onSubmit={handleLogin} className="max-w-sm mx-auto">
            <div className="flex flex-col gap-2 mb-4">
              <div>
                <label className="block text-[#075061] text-left mb-1 font-bold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="p-2 w-full border-b border-[#075061] outline-none rounded-xl"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-[#075061] text-left mb-1 font-bold"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="p-2 w-full border-b border-[#075061] outline-none rounded-xl"
                />
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-transparent text-[#075061] font-bold px-4 py-2 rounded-full hover:bg-[#075061] hover:text-white mt-4 border border-[#075061]"
              >
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="ml-6">
          <img src={SeaImage} alt="Sea" className="w-80 h-100 rounded-xl" />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
