import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function RegionPage(props) {
  const [regionData, setRegionData] = useState([]);

  useEffect(() => {
    fetchRegionData();
  }, []);

  const fetchRegionData = () => {
    axios
      .get("http://antifishing.runasp.net/Api/V1/Region/List", {})
      .then((response) => {
        setRegionData(response.data.data);
      })
      .catch((error) => {
        console.error("Error Fetching Region Data", error);
      });
  };

  const handleDeleteRegion = (id) => {
    axios
      .delete("http://antifishing.runasp.net/Api/V1/Region/Delete", {
        data: { id: id },
      })
      .then((response) => {
        console.log("Region Deleted Successfully");
        fetchRegionData();
      })
      .catch((error) => {
        console.error("Error deleting Region", error);
      });
  };

  return (
    <div className="p-4 text-center overflow-y-scroll h-full bg-[#075061] rounded-xl flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-4 text-white border-4 border-neutral-600 rounded-xl w-1/4 text-center">
        Region Data
      </h1>
      <div className="overflow-x-auto mb-8 text-white">
        <table className="table-auto border-separate border-spacing-2 border-4 border-neutral-600  rounded-xl w-full">
          <thead className="bg-neutral-600 rounded-sm">
            <tr>
              <th className="border border-neutral-600 px-4 py-2">Region Id</th>
              <th className="border border-neutral-600 px-4 py-2">
                Region Name
              </th>
              <th className="border border-neutral-600 px-4 py-2">
                Description
              </th>
              <th className="border border-neutral-600 px-4 py-2">Width</th>
              <th className="border border-neutral-600 px-4 py-2">Lake Name</th>
              <th className="border border-neutral-600 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-neutral-600 text-2xl">
            {regionData.map((region) => (
              <tr key={region.regionId}>
                <td className="border border-gray-400 px-4 py-2 ">
                  {region.regionId}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {region.regionName}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {region.regionDescription}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {region.regionWidth}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {region.lakeName}
                </td>

                <td className="border border-gray-400 px-4 py-2">
                  <button
                    onClick={() => handleDeleteRegion(region.regionId)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
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
        to="/regions/add"
        className="bg-neutral-600 border border-gray-400 text-white font-bold px-4 py-2 rounded-full no-underline"
      >
        Add
      </Link>
    </div>
  );
}
