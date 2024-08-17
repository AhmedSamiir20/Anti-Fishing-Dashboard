import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CameraPage(props) {
  const [cameraData, setCameraData] = useState([]);

  useEffect(() => {
    fetchCameraData();
  }, []);

  const fetchCameraData = () => {
    axios
      .get("http://antifishing.runasp.net/api/Cameras/Api/V1/Camera/List")
      .then((response) => {
        setCameraData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching camera data:", error);
      });
  };

  const handleDeleteCamera = (id) => {
    axios
      .delete(
        "http://antifishing.runasp.net/api/Cameras/Api/V1/Camera/Delete",
        {
          data: { cameraId: id },
        }
      )
      .then((response) => {
        console.log("Camera deleted successfully");
        fetchCameraData();
      })
      .catch((error) => {
        console.error("Error deleting camera:", error);
      });
  };

  return (
    <div className="p-4 text-center overflow-y-scroll h-full bg-[#075061] rounded-xl flex flex-col gap-0 justify-center items-center ">
      <h1 className="text-2xl font-bold mb-4 text-white border-4 border-neutral-600 rounded-xl w-1/4 text-center">
        Camera Data
      </h1>
      <div className="overflow-x-auto mb-8 text-white">
        <table className="table-auto border-separate border-spacing-2 border-4 border-neutral-600 rounded-xl w-full">
          <thead className="bg-neutral-600 rounded-sm">
            <tr>
              <th className="border border-neutral-600 px-4 py-2">Camera Id</th>
              <th className="border border-neutral-600 px-4 py-2">Name</th>
              <th className="border border-neutral-600 px-4 py-2">Info</th>
              <th className="border border-neutral-600 px-4 py-2">
                Region Name
              </th>
              <th className="border border-neutral-600 px-4 py-2">Lake Name</th>
              <th className="border border-neutral-600 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-neutral-600 text-2xl">
            {cameraData.map((camera) => (
              <tr key={camera.cameraId}>
                <td className="border border-gray-400 px-4 py-2">
                  {camera.cameraId}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {camera.name}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {camera.info}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {camera.regionName}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {camera.lakeName}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <button
                    onClick={() => handleDeleteCamera(camera.cameraId)}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link
        to="/camera/add"
        className="bg-neutral-600 border border-gray-400 text-white font-bold px-4 py-2 rounded-full no-underline"
      >
        Add
      </Link>
    </div>
  );
}
