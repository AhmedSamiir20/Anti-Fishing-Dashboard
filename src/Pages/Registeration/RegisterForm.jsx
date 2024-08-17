import React, { useState } from "react";
import axios from "axios";
import SeaImage from "../Images/2.jpg";

function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    address: "",
    country: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://antifishing.runasp.net/api/Auth/register",
        formData
      );
      console.log(response.data); // Log the response data
      setSuccessMessage(`Successfully registered ${formData.firstName}`);
      // Reset form fields after successful registration
      setFormData({
        firstName: "",
        lastName: "",
        username: "",
        address: "",
        country: "",
        email: "",
        password: "",
        phoneNumber: "",
      });
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <section className="bg-[#075061] min-h-screen flex items-center justify-center rounded-xl">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-full p-5 items-center">
        <div className="bg-gray-100 rounded-xl w-150 p-8">
          <h1 className="text-2xl font-bold mb-5 text-center text-[#075061]">
            Register
          </h1>
          {successMessage && (
            <div className="bg-green-100 border border-[#075061] text-[#075061] px-4 py-3 rounded-xl mb-4">
              {successMessage}
            </div>
          )}
          <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
            <div className="flex flex-row gap-2 mb-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-[#075061] text-left mb-1 font-bold"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="p-2 w-full border-b border-[#075061] outline-none rounded-xl"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-[#075061] text-left mb-1 font-bold"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="p-2 w-full border-b border-[#075061] outline-none rounded-xl"
                />
              </div>
            </div>

            <div className="flex flex-row gap-2 mb-4">
              <div>
                <label
                  htmlFor="username"
                  className="block text-[#075061] text-left mb-1 font-bold"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="p-2 w-full border-b border-[#075061] outline-none rounded-xl"
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-[#075061] text-left mb-1 font-bold"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  className="p-2 w-full  border-b border-[#075061] outline-none rounded-xl"
                />
              </div>
            </div>

            <div className="flex flex-row gap-2 mb-4">
              <div>
                <label
                  htmlFor="country"
                  className="block text-[#075061] text-left mb-1 font-bold"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleChange}
                  className="p-2 w-full border-b border-[#075061] outline-none rounded-xl"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-[#075061] text-left mb-1 font-bold"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="p-2 w-full border-b border-[#075061] outline-none rounded-xl"
                />
              </div>
            </div>

            <div className="flex flex-row gap-2 mb-4">
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
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="p-2 w-full border-b border-[#075061] outline-none rounded-xl"
                />
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-[#075061] text-left mb-1 font-bold"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="p-2 w-full border-b border-[#075061] outline-none rounded-xl"
                />
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-transparent text-[#075061] font-bold px-4 py-2 rounded-full hover:bg-[#075061] hover:text-white mt-4 border border-[#075061]"
              >
                Register
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
}

export default RegisterForm;
