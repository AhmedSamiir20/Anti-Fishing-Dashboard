import React, { useState } from "react";
import axios from "axios";
import SeaImage from "../Images/2.jpg";

export default function AddNewCamera(props) {
  const [newCameraName, setNewCameraName] = useState("");
  const [newCameraInfo, setNewCameraInfo] = useState("");
  const [newLakeId, setNewLakeId] = useState("");
  const [newRegionId, setNewRegionId] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleAddCamera = () => {
    const formData = new FormData();
    formData.append("name", newCameraName);
    formData.append("info", newCameraInfo);
    formData.append("lakeId", newLakeId);
    formData.append("regionId", newRegionId);

    axios
      .post(
        "http://antifishing.runasp.net/api/Cameras/Api/V1/Camera/Create",
        formData
      )
      .then((response) => {
        console.log("New camera added successfully:", response.data);
        setSuccessMessage("New Camera Added Successfully");
        props.history.push("/camera");
      })
      .catch((error) => {
        console.error("Error adding new camera:", error);
      });
  };

  return (
    <section className="bg-[#075061]  min-h-screen flex justify-center rounded-xl">
      <div className="bg-gray-100 w-1/2 h-1/2 flex rounded-2xl shadow-lg max-w-full p-5 mt-20 ">
        <div className="bg-gray-100 rounded-xl flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold mb-5 text-center text-[#075061]">
            Add New Camera
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
                value={newCameraName}
                onChange={(e) => setNewCameraName(e.target.value)}
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
                value={newCameraInfo}
                onChange={(e) => setNewCameraInfo(e.target.value)}
                className="p-2 w-full border-b border-[#075061] outline-none rounded-xl"
              />
            </div>
          </div>

          <div className="flex flex-row gap-2">
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
            <div className="mb-4">
              <label
                htmlFor="regionId"
                className="block text-[#075061] text-left mb-1 font-bold"
              >
                Region ID:
              </label>
              <input
                type="text"
                id="regionId"
                value={newRegionId}
                onChange={(e) => setNewRegionId(e.target.value)}
                className="p-2 w-full border-b border-[#075061] outline-none rounded-xl"
              />
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={handleAddCamera}
              className="bg-transparent text-[#075061] font-bold px-4 py-2 rounded-full hover:bg-[#075061] hover:text-white mt-4 border border-[#075061]"
            >
              Add Camera
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
