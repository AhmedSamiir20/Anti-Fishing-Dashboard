import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CameraPage(props) {
  const [lakeData, setLakeData] = useState([]);

  useEffect(() => {
    fetchLakeData();
  }, []);

  const fetchLakeData = () => {
    axios
      .get("http://antifishing.runasp.net/Api/V1/Lake/List")
      .then((response) => {
        setLakeData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching lake data:", error);
      });
  };

  const handleDeleteLake = (id) => {
    axios
      .delete("http://antifishing.runasp.net/Api/V1/Lake/Delete", {
        data: { id: id },
      })
      .then((response) => {
        console.log("Lake deleted successfully");
        fetchLakeData();
      })
      .catch((error) => {
        console.error("Error deleting lake:", error);
      });
  };

  return (
    <div className="p-4 text-center overflow-y-scroll h-full bg-[#075061] rounded-xl flex flex-col gap-0 justify-center items-center ">
      <h1 className="text-2xl font-bold mb-4 text-white border-4 border-neutral-600 rounded-xl w-1/4 text-center">
        lake Data
      </h1>
      <div className="overflow-x-auto mb-8 text-white">
        <table className="table-auto border-separate border-spacing-2 border-4 border-neutral-600 rounded-xl w-full">
          <thead className="bg-neutral-600 rounded-sm">
            <tr>
              <th className="border border-neutral-600 px-4 py-2">Lake Id</th>
              <th className="border border-neutral-600 px-4 py-2">Name</th>
              <th className="border border-neutral-600 px-4 py-2">Info</th>
              <th className="border border-neutral-600 px-4 py-2">Location</th>
              <th className="border border-neutral-600 px-4 py-2">Lake Area</th>
              <th className="border border-neutral-600 px-4 py-2">
                Lake Depth
              </th>
              <th className="border border-neutral-600 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-neutral-600 text-2xl">
            {lakeData.map((lake) => (
              <tr key={lake.lakeId}>
                <td className="border border-gray-400 px-4 py-2">
                  {lake.lakeId}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {lake.name}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {lake.info}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {lake.location}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {lake.area}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {lake.depth}
                </td>

                <td className="border border-gray-400 px-4 py-2">
                  <button
                    onClick={() => handleDeleteLake(lake.lakeId)}
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
        to="/lakes/add"
        className="bg-neutral-600 border border-gray-400 text-white font-bold px-4 py-2 rounded-full no-underline"
      >
        Add
      </Link>
    </div>
  );
}
