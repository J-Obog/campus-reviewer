import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow">
      <div className="flex-1">
        <a className="btn btn-ghost btn-sm capitalize md:btn-md md:text-lg 2xl:btn-lg 2xl:text-xl">campus reviewer</a>
      </div>
      <div className="flex-none gap-2 md:gap-3">
        <a className="btn btn-primary btn-xs md:btn-sm">
          log in
        </a>
        <a className="btn btn-primary btn-xs btn-outline md:btn-sm">
          sign up
        </a>
      </div>
    </div>
  );
};

export default Navbar;
