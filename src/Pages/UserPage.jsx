import React, { useState, useEffect } from "react";
import axios from "axios";

const UserCard = ({ user, onDelete }) => {
  return (
    <div className="w-80 h-auto rounded-xl border-4 border-neutral-700 shadow-lg mb-4 mx-2 bg-gray-200 ">
      <div className="px-6 py-4 flex flex-col gap-1">
        <div className="font-bold text-xl mb-2 text-[#075061] flex justify-center">
          {user.firstName} {user.lastName}
        </div>
        <p className="text-gray-700 text-base font-bold">
          Username: {user.userName}
        </p>
        <p className="text-gray-700 text-base">Address: {user.address}</p>
        <p className="text-gray-700 text-base">Email: {user.email}</p>
        <p className="text-gray-700 text-base">
          Phone Number: {user.phoneNumber}
        </p>
        <button
          onClick={() => onDelete(user.id)}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Delete User
        </button>
      </div>
    </div>
  );
};

const UserPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "http://antifishing.runasp.net/api/Auth/Users"
      );
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://antifishing.runasp.net/api/Auth/${userId}`);
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-[#075061] min-h-screen ">
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-2xl font-bold mb-4 text-white border-4 border-neutral-600 rounded-xl w-1/4 text-center">
          Users
        </h1>
        <div className="flex flex-wrap justify-center rounded-xl">
          {users.map((user) => (
            <UserCard key={user.id} user={user} onDelete={deleteUser} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserPage;
