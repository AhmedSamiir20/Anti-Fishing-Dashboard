import React, { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {
  const [sensorNamesCount, setSensorNamesCount] = useState(0);
  const [cameraNamesCount, setCameraNamesCount] = useState(0);
  const [countOfFish, setCountOfFish] = useState(0);
  const [regionNamesCount, setRegionNamesCount] = useState(0);
  const [statusOfFish, setStatusOfFish] = useState([]);
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    fetchSensorNamesCount();
    fetchCameraNamesCount();
    fetchRegionNamesCount();
    fetchCountOfFish();
    fetchStatusOfFish();
    fetchVideoUrl();
  }, []);

  const fetchSensorNamesCount = async () => {
    try {
      const response = await axios.get(
        "http://antifishing.runasp.net/Api/V1/Sensor/NameList"
      );
      if (response.data && response.data.data) {
        setSensorNamesCount(response.data.data.length);
      }
    } catch (error) {
      console.error("Error fetching sensor names:", error);
    }
  };

  const fetchRegionNamesCount = async () => {
    try {
      const response = await axios.get(
        "http://antifishing.runasp.net/Api/V1/Region/NameList"
      );
      if (response.data && response.data.data) {
        setRegionNamesCount(response.data.data.length);
      }
    } catch (error) {
      console.error("Error fetching region names:", error);
    }
  };

  const fetchCameraNamesCount = async () => {
    try {
      const response = await axios.get(
        "http://antifishing.runasp.net/api/Cameras/Api/V1/Camera/NameList"
      );
      if (response.data && response.data.data) {
        setCameraNamesCount(response.data.data.length);
      }
    } catch (error) {
      console.error("Error fetching Camera names:", error);
    }
  };

  const fetchCountOfFish = async () => {
    try {
      const response = await axios.get(
        "http://antifishing.runasp.net/api/Video/LastVideo"
      );
      if (response.data) {
        setCountOfFish(response.data.fishCount);
      }
    } catch (error) {
      console.error("Error fetching Fish Count:", error);
    }
  };

  const fetchStatusOfFish = async () => {
    try {
      const response = await axios.get(
        "http://antifishing.runasp.net/api/Video/LastVideo"
      );
      if (response.data) {
        setStatusOfFish(response.data.fishStatus);
      }
    } catch (error) {
      console.error("Error fetching Fish Status:", error);
    }
  };

  const fetchVideoUrl = async () => {
    try {
      const response = await axios.get(
        "http://antifishing.runasp.net/api/Video/LastVideo"
      );
      if (response.data) {
        setVideoUrl(response.data.videoUrl);
      }
    } catch (error) {
      console.error("Error fetching Video URL:", error);
    }
  };

  return (
    <div className="flex flex-wrap justify-start h-screen">
      <div className="flex flex-col items-center px-5">
        <p className="text-neutral-700 text-xl font-bold border mb-2 ">
          عدد المستشعرات في البحيره
        </p>
        <div className="w-16 h-16 bg-gray-100 flex justify-center items-center rounded-full bg-transparent text-[#075061] font-bold hover:bg-[#075061] hover:text-white border border-[#075061]">
          <p className="text-neutral-700 hover:text-white text-2xl font-bold">
            {sensorNamesCount}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center px-5">
        <p className="text-neutral-700 text-xl font-bold border mb-2 ">
          عدد الكاميرات في البحيره
        </p>
        <div className="w-16 h-16 bg-gray-100 flex justify-center items-center rounded-full bg-transparent text-[#075061] font-bold hover:bg-[#075061] hover:text-white border border-[#075061]">
          <p className="text-neutral-700 hover:text-white text-2xl font-bold">
            {cameraNamesCount}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center px-5">
        <p className="text-neutral-700 text-xl font-bold border mb-2 ">
          عدد المناطق في البحيره
        </p>
        <div className="w-16 h-16 bg-gray-100 flex justify-center items-center rounded-full bg-transparent text-[#075061] font-bold hover:bg-[#075061] hover:text-white border border-[#075061]">
          <p className="text-neutral-700 hover:text-white text-2xl font-bold">
            {regionNamesCount}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center px-5">
        <p className="text-neutral-700 text-xl font-bold border mb-2 ">
          عدد الاسماك في البحيره
        </p>
        <div className="w-16 h-16 bg-gray-100 flex justify-center items-center rounded-full bg-transparent text-[#075061] font-bold hover:bg-[#075061] hover:text-white border border-[#075061]">
          <p className="text-neutral-700 hover:text-white text-2xl font-bold">
            {countOfFish}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center px-5">
        <p className="text-neutral-700 text-xl font-bold border mb-2 ">
          حالة الاسماك في البحيره
        </p>
        <div className="w-20 h-20 bg-gray-100 flex justify-center items-center rounded-full bg-transparent text-[#075061] font-bold hover:bg-[#075061] hover:text-white border border-[#075061]">
          <p className="text-neutral-700 hover:text-white text-2xl font-bold">
            {statusOfFish}
          </p>
        </div>
      </div>

      <div className="px-80 rounded">
        <p className="text-neutral-700 text-xl font-bold border mb-2 rounded-lg flex justify-center">
          فيديو من البحيره
        </p>
        <div className="w-full h-1/2 bg-gray-100 flex justify-center items-center rounded bg-transparent text-[#075061] font-bold  ">
          {videoUrl && (
            <video className="w-full h-full" autoPlay controls auto>
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
