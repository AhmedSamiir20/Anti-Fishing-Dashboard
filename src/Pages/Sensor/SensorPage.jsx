import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SensorPage(props) {
  const [sensorData, setSensorData] = useState([]);

  useEffect(() => {
    fetchSensorData();
  }, []);

  const fetchSensorData = () => {
    axios
      .get("http://antifishing.runasp.net/Api/V1/Sensor/List")
      .then((response) => {
        setSensorData(response.data.data);
      })
      .catch((error) => {
        console.error("Error Fetching Sensor Data", error);
      });
  };

  const handleDeleteSensor = (id) => {
    axios
      .delete("http://antifishing.runasp.net/Api/V1/Sensor/Delete", {
        data: { id: id },
      })
      .then((response) => {
        console.log("Sensor Deleted Successfully");
        fetchSensorData();
      })
      .catch((error) => {
        console.error("Error deleting Sensor", error);
      });
  };

  return (
    <div className="p-4 text-center overflow-y-scroll h-full bg-[#075061] rounded-xl flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-4 text-white border-4 border-neutral-600 rounded-xl w-1/4 text-center">
        Sensor Data
      </h1>
      <div className="overflow-x-auto mb-8 text-white">
        <table className="table-auto border-separate border-spacing-2 border-4 border-neutral-600  rounded-xl w-full">
          <thead className="bg-neutral-600 rounded-sm">
            <tr>
              <th className="border border-neutral-600 px-4 py-2">Sensor Id</th>
              <th className="border border-neutral-600 px-4 py-2">Name</th>
              <th className="border border-neutral-600 px-4 py-2">Type</th>
              <th className="border border-neutral-600 px-4 py-2">
                Description
              </th>
              <th className="border border-neutral-600 px-4 py-2">
                Region Name
              </th>
              <th className="border border-neutral-600 px-4 py-2">Lake Name</th>
              <th className="border border-neutral-600 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-neutral-600 text-2xl">
            {sensorData.map((sensor) => (
              <tr key={sensor.sensorId}>
                <td className="border border-gray-400 px-4 py-2 ">
                  {sensor.sensorId}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {sensor.name}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {sensor.type}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {sensor.description}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {sensor.regionName}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {sensor.lakeName}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <button
                    onClick={() => handleDeleteSensor(sensor.sensorId)}
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
        to="/sensors/add"
        className="bg-neutral-600 border border-gray-400 text-white font-bold px-4 py-2 rounded-full no-underline"
      >
        Add
      </Link>
    </div>
  );
}
