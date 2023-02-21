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
      {/* <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-14 rounded-full md:w-32">
            <img src="https://xsgames.co/randomusers/avatar.php?g=male" />
          </div>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a>
              Profile
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Saved</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Navbar;
