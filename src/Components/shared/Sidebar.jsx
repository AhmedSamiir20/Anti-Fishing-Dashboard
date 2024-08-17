import React from "react";
import { GiSpearfishing } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import {
  Dashboard_Sidebar_Bottom_Links,
  Dashboard_Sidebar_Links,
} from "../../lib/Constants/Navigation";
import { IoLogOut } from "react-icons/io5";

import classNames from "classnames";

const linkClasses =
  " flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-md text-base";

export default function Sidebar() {
  return (
    <div className="bg-[#075061] w-60 p-3  flex flex-col text-white rounded-sm  h-full">
      <div className="flex items-center gap-2 px-1 py-3">
        <GiSpearfishing fontSize={24} />
        <span className="text-neutral-100 text-lg">Anti/Fishing</span>
      </div>
      <div className="flex-1 py-8 felx flex-col gap-1">
        {Dashboard_Sidebar_Links.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700 ">
        {Dashboard_Sidebar_Bottom_Links.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
        <Link to="/login" className={classNames("text-red-500 ", linkClasses)}>
          <span className="text-xl cursor-pointer">
            <IoLogOut />
          </span>
          Logout
        </Link>
      </div>
    </div>
  );
}

function SidebarLink({ item }) {
  const { pathname } = useLocation();
  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path
          ? "bg-neutral-700 text-white"
          : "text-neutral-400",
        linkClasses
      )}
    >
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  );
}
