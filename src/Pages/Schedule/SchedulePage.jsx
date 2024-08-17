import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SchedulePage(props) {
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    fetchScheduleData();
  }, []);

  const fetchScheduleData = () => {
    axios
      .get("http://antifishing.runasp.net/api/Schedules/Api/V1/Schedule/List")
      .then((response) => {
        setScheduleData(response.data.data);
      })
      .catch((error) => {
        console.error("Error Fetching Schedule Data", error);
      });
  };

  const handleDeleteSchedule = (id) => {
    axios
      .delete(
        "http://antifishing.runasp.net/api/Schedules/Api/V1/Schedule/Delete",
        {
          data: { id: id },
        }
      )
      .then((response) => {
        console.log("Schedule Deleted Successfully");
        fetchScheduleData();
      })
      .catch((error) => {
        console.error("Error deleting Schedule", error);
      });
  };

  return (
    <div className="p-4 text-center overflow-y-scroll h-full bg-[#075061] rounded-xl flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-4 text-white border-4 border-neutral-600 rounded-xl w-1/4 text-center">
        Schedule Data
      </h1>
      <div className="overflow-x-auto mb-8 text-white">
        <table className="table-auto border-separate border-spacing-2 border-4 border-neutral-600  rounded-xl w-full">
          <thead className="bg-neutral-600 rounded-sm">
            <tr>
              <th className="border border-neutral-600 px-4 py-2">
                Schedule Id
              </th>
              <th className="border border-neutral-600 px-4 py-2">
                Start Date
              </th>
              <th className="border border-neutral-600 px-4 py-2">End Date</th>
              <th className="border border-neutral-600 px-4 py-2">Year</th>
              <th className="border border-neutral-600 px-4 py-2">Notes</th>
              <th className="border border-neutral-600 px-4 py-2">Lake Name</th>
              <th className="border border-neutral-600 px-4 py-2">User Name</th>
              <th className="border border-neutral-600 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-neutral-600 text-2xl">
            {scheduleData.map((schedule) => (
              <tr key={schedule.scheduleId}>
                <td className="border border-gray-400 px-4 py-2 ">
                  {schedule.scheduleId}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {schedule.startDate}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {schedule.endDate}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {schedule.year}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {schedule.notes}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {schedule.lake.name}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {schedule.user.userName}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <button
                    onClick={() => handleDeleteSchedule(schedule.scheduleId)}
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
        to="/schedules/add"
        className="bg-neutral-600 border border-gray-400 text-white font-bold px-4 py-2 rounded-full no-underline"
      >
        Add
      </Link>
    </div>
  );
}
