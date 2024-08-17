import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function InstructionPage(props) {
  const [instructionsData, setInstructions] = useState([]);

  useEffect(() => {
    fetchInstructionsData();
  }, []);

  const fetchInstructionsData = async () => {
    try {
      const response = await axios.get(
        "http://antifishing.runasp.net/api/Instructions/Api/V1/Instruction/List"
      );
      setInstructions(response.data.data);
    } catch (error) {
      console.error("Error fetching instructions:", error);
    }
  };

  const handleDeleteInstruction = (id) => {
    axios
      .delete(
        "http://antifishing.runasp.net/api/Instructions/Api/V1/Instruction/Delete",
        {
          data: { id: id },
        }
      )
      .then((response) => {
        console.log("Instruction Deleted Successfully");
        fetchInstructionsData();
      })
      .catch((error) => {
        console.error("Error deleting Instruction", error);
      });
  };

  return (
    <div className="p-4 text-center overflow-y-scroll h-full bg-[#075061] rounded-xl flex flex-col gap-0 justify-center items-center ">
      <h1 className="text-2xl font-bold mb-4 text-white border-4 border-neutral-600 rounded-xl w-1/4 text-center">
        Instructions
      </h1>
      <div className="overflow-x-auto mb-8 text-white">
        <table className="table-auto border-separate border-spacing-2 border-4 border-neutral-600 rounded-xl w-full">
          <thead className="bg-neutral-600 rounded-sm">
            <tr>
              <th className="border border-neutral-600 px-4 py-2">
                Instruction Id
              </th>
              <th className="border border-neutral-600 px-4 py-2">Title</th>
              <th className="border border-neutral-600 px-4 py-2">
                Description
              </th>
              <th className="border border-neutral-600 px-4 py-2">Lake Name</th>
              <th className="border border-neutral-600 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-neutral-600 text-2xl">
            {instructionsData.map((instruction) => (
              <tr key={instruction.id}>
                <td className="border border-gray-400 px-4 py-2">
                  {instruction.id}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {instruction.title}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {instruction.description}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {instruction.lakeName}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <button
                    onClick={() => handleDeleteInstruction(instruction.id)}
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
        to="/instructions/add"
        className="bg-neutral-600 border border-gray-400 text-white font-bold px-4 py-2 rounded-full no-underline"
      >
        Add
      </Link>
    </div>
  );
}
