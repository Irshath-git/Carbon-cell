import React from "react";

function Header() {
  return (
    <>
      <div className="w-full h-16 bg-gray-800 rounded-full text-white">
        <h1 className="pt-2 pl-5">
          Hello, <span>Brooklyn👋</span>
        </h1>
        <p className="pt-0 pl-5 text-sm">Welcome to spot trading!</p>
      </div>
    </>
  );
}

export default Header;
