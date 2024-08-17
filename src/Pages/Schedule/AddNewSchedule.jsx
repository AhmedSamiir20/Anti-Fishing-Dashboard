import React, { useState } from "react";
import axios from "axios";
import SeaImage from "../Images/2.jpg";

export default function AddNewSchedule(props) {
  const [newScheduleStartDate, setNewScheduleStartDate] = useState("");
  const [newScheduleEndDate, setNewScheduleEndDate] = useState("");
  const [newScheduleYear, setNewScheduleYear] = useState("");
  const [newScheduleNotes, setNewScheduleNotes] = useState("");
  const [newLakeId, setNewLakeId] = useState("");
  const [newUserId, setNewUserId] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleAddSchedule = () => {
    const formData = new FormData();
    formData.append("startDate", newScheduleStartDate);
    formData.append("endDate", newScheduleEndDate);
    formData.append("year", newScheduleYear);
    formData.append("notes", newScheduleNotes);
    formData.append("lakeId", newLakeId);
    formData.append("userId", newUserId);

    axios
      .post(
        "http://antifishing.runasp.net/api/Schedules/Api/V1/Schedule/Create",
        formData
      )
      .then((response) => {
        console.log("New Schedule Added Successfully:", response.data);
        // Show success message
        setSuccessMessage("New Schedule added successfully!");
        // Redirect to SensorPage after adding sensor
        props.history.push("/schedules");
      })
      .catch((error) => {
        console.error("Error adding new schedule: ", error);
      });
  };

  return (
    <section className="bg-[#075061] min-h-screen flex items-center justify-center rounded-xl">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-full p-5 items-center">
        <div className="bg-gray-100 rounded-xl w-150 p-8">
          <h1 className="text-2xl font-bold mb-5 text-center text-[#075061]">
            Add New Schedule
          </h1>
          {successMessage && (
            <div className="bg-green-100 border border-[#075061] text-[#075061] px-4 py-3 rounded-xl mb-4">
              {successMessage}
            </div>
          )}
          <div className="mb-4">
            <label
              htmlFor="startDate"
              className="block text-[#075061] text-left mb-1 font-bold"
            >
              Start Date:
            </label>
            <input
              type="text"
              id="startDate"
              value={newScheduleStartDate}
              onChange={(e) => setNewScheduleStartDate(e.target.value)}
              className="p-2 w-full border-b border-[#075061] outline-none rounded-xl"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="endDate"
              className="block text-[#075061] text-left mb-1 font-bold"
            >
              End Date:
            </label>
            <input
              type="text"
              id="endDate"
              value={newScheduleEndDate}
              onChange={(e) => setNewScheduleEndDate(e.target.value)}
              className="p-2 w-full border-b border-[#075061] outline-none rounded-xl"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="year"
              className="block text-[#075061] text-left mb-1 font-bold"
            >
              Year:
            </label>
            <input
              type="text"
              id="year"
              value={newScheduleYear}
              onChange={(e) => setNewScheduleYear(e.target.value)}
              className="p-2 w-full border-b border-[#075061] outline-none rounded-xl"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="notes"
              className="block text-[#075061] text-left mb-1 font-bold"
            >
              Notes:
            </label>
            <input
              type="text"
              id="notes"
              value={newScheduleNotes}
              onChange={(e) => setNewScheduleNotes(e.target.value)}
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
          <div className="mb-4">
            <label
              htmlFor="userId"
              className="block text-[#075061] text-left mb-1 font-bold"
            >
              User ID:
            </label>
            <input
              type="text"
              id="userId"
              value={newUserId}
              onChange={(e) => setNewUserId(e.target.value)}
              className="p-2 w-full border-b border-[#075061] outline-none rounded-xl"
            />
          </div>
          <div className="mb-4 flex flex-row gap-2">
            <button
              onClick={handleAddSchedule}
              className="bg-transparent text-[#075061] font-bold px-4 py-2 rounded-full hover:bg-[#075061] hover:text-white mt-4 border border-[#075061] "
            >
              Add Schedule
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
