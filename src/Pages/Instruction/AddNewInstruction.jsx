import React, { useState } from "react";
import axios from "axios";
import SeaImage from "../Images/2.jpg";

export default function AddNewCamera(props) {
  const [newInstructionTitle, setNewInstructionTitle] = useState("");
  const [newInstructionDescription, setNewInstructionDescription] = useState(
    ""
  );
  const [newLakeId, setNewLakeId] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleAddInstruction = () => {
    const formData = new FormData();
    formData.append("title", newInstructionTitle);
    formData.append("description", newInstructionDescription);
    formData.append("lakeId", newLakeId);

    axios
      .post(
        "http://antifishing.runasp.net/api/Instructions/Api/V1/Instruction/Create",
        formData
      )
      .then((response) => {
        console.log("New Instruction added successfully:", response.data);
        setSuccessMessage("New Instruction Added Successfully");
        props.history.push("/instruction");
      })
      .catch((error) => {
        console.error("Error adding new Instruction:", error);
      });
  };
  return (
    <section className="bg-[#075061]  min-h-screen flex justify-center rounded-xl">
      <div className="bg-gray-100 w-1/2 h-1/2 flex rounded-2xl shadow-lg max-w-full p-5 mt-20 ">
        <div className="bg-gray-100 rounded-xl flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold mb-5 text-center text-[#075061]">
            Add New Instruction
          </h1>
          {successMessage && (
            <div className="bg-green-100 border border-[#075061] text-[#075061] px-4 py-3 rounded-xl mb-4">
              {successMessage}
            </div>
          )}
          <div className="justify-center ">
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-[#075061] text-left mb-1 font-bold"
              >
                Title:
              </label>
              <input
                type="text"
                id="name"
                value={newInstructionTitle}
                onChange={(e) => setNewInstructionTitle(e.target.value)}
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
                id="info"
                value={newInstructionDescription}
                onChange={(e) => setNewInstructionDescription(e.target.value)}
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
          </div>

          <div className="text-center">
            <button
              onClick={handleAddInstruction}
              className="bg-transparent text-[#075061] font-bold px-4 py-2 rounded-full hover:bg-[#075061] hover:text-white mt-4 border border-[#075061]"
            >
              Add Instruction
            </button>
          </div>
        </div>
        <div className="hidden md:block max-w-[400px] mx-2">
          <img src={SeaImage} alt="Sea" className="w-80 h-100 rounded-xl " />
        </div>
      </div>
    </section>
  );
}
