import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import {
  MdOutlineDashboard,
  MdAccountBalanceWallet,
  MdOutlineSearch,
} from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { MdWebAsset } from "react-icons/md";
import { SiShopware } from "react-icons/si";
import { Link } from "react-router-dom";

function Sidebar() {
  const menus = [
    { name: "Home", link: "/ ", icon: AiOutlineHome },
    { name: "Dashboard", link: "/dashboard", icon: MdOutlineDashboard },
    { name: "Assets", link: "/assets", icon: MdWebAsset },
    { name: "Meta Wallet", link: "/metawallet", icon: MdAccountBalanceWallet },
  ];
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState("");
  const handleTabClick = (name) => {
    setActive(name);
  };

  return (
    <>
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <Link
          to="/"
          className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight
              text-white"
        >
          <SiShopware className="text-white" />{" "}
          <span className={`${!open && "hidden"}`}>Carbon Cell</span>
        </Link>
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          <input
            className={` ${
              !open && "hidden"
            } border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-ful cursor-text `}
            type="search"
            name="search"
            placeholder="Search"
          />
          <button
            type="submit"
            className={`${!open && "hidden"} absolute right-0 top-0 mt-5 mr-4`}
          >
            <MdOutlineSearch className="text-black -m-2" />
          </button>
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md ${
                active === menu.name ? "bg-[#9ca3af] text-gray-100" : ""
              }`}
              onClick={() => handleTabClick(menu.name)}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
