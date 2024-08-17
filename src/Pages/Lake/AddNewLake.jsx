import React, { useState } from "react";
import axios from "axios";
import SeaImage from "../Images/2.jpg";

export default function AddNewLake(props) {
  const [newLakeName, setNewLakeName] = useState("");
  const [newLakeInfo, setNewLakeInfo] = useState("");
  const [newLakeLocation, setNewLakeLocation] = useState("");
  const [newLakeArea, setNewLakeArea] = useState("");
  const [newLakeDepth, setNewLakeDepth] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleAddLake = () => {
    const formData = new FormData();
    formData.append("name", newLakeName);
    formData.append("info", newLakeInfo);
    formData.append("location", newLakeLocation);
    formData.append("area", newLakeArea);
    formData.append("depth", newLakeDepth);
    axios
      .post("http://antifishing.runasp.net/Api/V1/Lake/Create", formData)
      .then((response) => {
        console.log("New lake added successfully:", response.data);
        setSuccessMessage("New Lake Added Successfully");
        props.history.push("/lakes");
      })
      .catch((error) => {
        console.error("Error adding new lake:", error);
      });
  };

  return (
    <section className="bg-[#075061]  min-h-screen flex justify-center rounded-xl">
      <div className="bg-gray-100 w-1/2 h-1/2 flex rounded-2xl shadow-lg max-w-full p-5 mt-20 ">
        <div className="bg-gray-100 rounded-xl flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold mb-5 text-center text-[#075061]">
            Add New Lake
          </h1>
          {successMessage && (
            <div className="bg-green-100 border border-[#075061] text-[#075061] px-4 py-3 rounded-xl mb-4">
              {successMessage}
            </div>
          )}
          <div className="flex flex-row gap-2 justify-center ">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-[#075061] text-left mb-1 font-bold"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                value={newLakeName}
                onChange={(e) => setNewLakeName(e.target.value)}
                className="p-2 w-full border-b border-[#075061] outline-none rounded-xl"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="info"
                className="block text-[#075061] text-left mb-1 font-bold"
              >
                Info:
              </label>
              <input
                type="text"
                id="info"
                value={newLakeInfo}
                onChange={(e) => setNewLakeInfo(e.target.value)}
                className="p-2 w-full border-b border-[#075061] outline-none rounded-xl"
              />
            </div>
          </div>

          <div className="flex flex-row gap-2">
            <div className="mb-4">
              <label
                htmlFor="location"
                className="block text-[#075061] text-left mb-1 font-bold"
              >
                Location:
              </label>
              <input
                type="text"
                id="location"
                value={newLakeLocation}
                onChange={(e) => setNewLakeLocation(e.target.value)}
                className="p-2 w-full border-b border-[#075061] outline-none rounded-xl"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="area"
                className="block text-[#075061] text-left mb-1 font-bold"
              >
                Lake Area:
              </label>
              <input
                type="text"
                id="area"
                value={newLakeArea}
                onChange={(e) => setNewLakeArea(e.target.value)}
                className="p-2 w-full border-b border-[#075061] outline-none rounded-xl"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="area"
                className="block text-[#075061] text-left mb-1 font-bold"
              >
                Lake Depth:
              </label>
              <input
                type="text"
                id="depth"
                value={newLakeDepth}
                onChange={(e) => setNewLakeDepth(e.target.value)}
                className="p-2 w-full border-b border-[#075061] outline-none rounded-xl"
              />
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={handleAddLake}
              className="bg-transparent text-[#075061] font-bold px-4 py-2 rounded-full hover:bg-[#075061] hover:text-white mt-4 border border-[#075061]"
            >
              Add Lake
            </button>
          </div>
        </div>
        <div className="hidden md:block max-w-[400px]">
          <img src={SeaImage} alt="Sea" className="w-80 h-100 rounded-xl" />
        </div>
      </div>
    </section>
  );
}
