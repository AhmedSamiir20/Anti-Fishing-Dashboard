import React, { useState } from "react";
import axios from "axios";
import SeaImage from "../Images/2.jpg";

export default function AddNewRegion(props) {
  const [newRegionName, setNewRegionName] = useState("");
  const [newRegionDescription, setNewRegionDescription] = useState("");
  const [newRegionWidth, setNewRegionWidth] = useState("");
  const [newLakeId, setNewLakeId] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleAddRegion = () => {
    const formData = new FormData();
    formData.append("regionName", newRegionName);
    formData.append("regionDescription", newRegionDescription);
    formData.append("regionWidth", newRegionWidth);
    formData.append("lakeId", newLakeId);

    axios
      .post("http://antifishing.runasp.net/Api/V1/Region/Create", formData)
      .then((response) => {
        console.log("New Region Added Successfully:", response.data);
        // Show success message
        setSuccessMessage("New Region added successfully!");
        // Redirect to SensorPage after adding sensor
        props.history.push("/regions");
      })
      .catch((error) => {
        console.error("Error adding new Region: ", error);
      });
  };

  return (
    <section className="bg-[#075061] min-h-screen flex items-center justify-center rounded-xl">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-full p-5 items-center">
        <div className="bg-gray-100 rounded-xl w-150 p-8">
          <h1 className="text-2xl font-bold mb-5 text-center text-[#075061]">
            Add New Region
          </h1>
          {successMessage && (
            <div className="bg-green-100 border border-[#075061] text-[#075061] px-4 py-3 rounded-xl mb-4">
              {successMessage}
            </div>
          )}
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
              value={newRegionName}
              onChange={(e) => setNewRegionName(e.target.value)}
              className="p-2 w-full border-b border-[#075061] outline-none rounded-xl"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="type"
              className="block text-[#075061] text-left mb-1 font-bold"
            >
              Width:
            </label>
            <input
              type="text"
              id="type"
              value={newRegionWidth}
              onChange={(e) => setNewRegionWidth(e.target.value)}
              className="p-2 w-full border-b border-[#075061] outline-none rounded-xl"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-[#075061] text-left mb-1 font-bold"
            >
              Description:
            </label>
            <input
              type="text"
              id="description"
              value={newRegionDescription}
              onChange={(e) => setNewRegionDescription(e.target.value)}
              className="p-2 w-full border-b border-[#075061] outline-none rounded-xl"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lakeId"
              className="block text-[#075061] text-left mb-1 font-bold"
            >
              Lake ID:
            </label>
            <input
              type="text"
              id="lakeId"
              value={newLakeId}
              onChange={(e) => setNewLakeId(e.target.value)}
              className="p-2 w-full border-b border-[#075061] outline-none rounded-xl"
            />
          </div>

          <div className="mb-4 flex flex-row gap-2">
            <button
              onClick={handleAddRegion}
              className="bg-transparent text-[#075061] font-bold px-4 py-2 rounded-full hover:bg-[#075061] hover:text-white mt-4 border border-[#075061] "
            >
              Add Region
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
