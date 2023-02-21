import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow">
      <div className="flex-1">
        <a className="btn btn-ghost btn-sm normal-case text-lg">Campus Reviewer</a>
      </div>
      <div className="flex-none gap-2">
        <button className="btn btn-primary btn-xs">
          log in
        </button>
        <button className="btn btn-primary btn-xs btn-outline">
          sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
