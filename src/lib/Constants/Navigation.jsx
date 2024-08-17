import {
  MdOutlineSensors,
  MdOutlineIntegrationInstructions,
  MdOutlinePlace,
} from "react-icons/md";
import { IoCamera, IoSettings } from "react-icons/io5";
import { HiOutlineViewGrid } from "react-icons/hi";
import { SiGnuprivacyguard } from "react-icons/si";
import { GrSchedule } from "react-icons/gr";
import { FaUsers, FaHandsHelping } from "react-icons/fa";
import { GiAtSea } from "react-icons/gi";

export const Dashboard_Sidebar_Links = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "lakes",
    label: "Lakes",
    path: "/lakes",
    icon: <GiAtSea />,
  },
  {
    key: "sensors",
    label: "Sensors",
    path: "/sensors",
    icon: <MdOutlineSensors />,
  },
  {
    key: "camera",
    label: "Camera",
    path: "/camera",
    icon: <IoCamera />,
  },
  {
    key: "register",
    label: "Register",
    path: "/register",
    icon: <SiGnuprivacyguard />,
  },
  {
    key: "schedules",
    label: "Schedules",
    path: "/schedules",
    icon: <GrSchedule />,
  },
  {
    key: "instructions",
    label: "Instructions",
    path: "/instructions",
    icon: <MdOutlineIntegrationInstructions />,
  },
  {
    key: "regions",
    label: "Regions",
    path: "/regions",
    icon: <MdOutlinePlace />,
  },
  {
    key: "users",
    label: "Users",
    path: "/users",
    icon: <FaUsers />,
  },
];

export const Dashboard_Sidebar_Bottom_Links = [
  {
    key: "settings",
    label: "Settings",
    path: "/settings",
    icon: <IoSettings />,
  },
  {
    key: "suppory",
    label: "Help & Suppory",
    path: "/support",
    icon: <FaHandsHelping />,
  },
];
