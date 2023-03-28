import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <div className="navbar fixed z-10 bg-base-100 pr-5 shadow">
      <div className="flex-1">
        <a className="btn-ghost btn-sm btn capitalize md:btn-md 2xl:btn-lg md:text-lg 2xl:text-xl">
          campus reviewer
        </a>
      </div>

      {/* <div className="flex-none gap-2 md:gap-3">
        <a className="btn-primary btn-xs btn md:btn-sm">log in</a>
        <a className="btn-outline btn-primary btn-xs btn md:btn-sm">sign up</a>
      </div> */}

      <div className="dropdown-end dropdown">
        <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
          <div className="w-14 rounded-full md:w-32">
            <img src="https://xsgames.co/randomusers/avatar.php?g=male" />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
        >
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Bookmarks</a>
          </li>
          <li>
            <a>Account Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
          <li>
            <ThemeToggle size="small" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
