import ThemeToggle from "../components/ThemeToggle";

const AccountSettings = () => {
  return (
    <div className="px-4 py-10 md:py-14 md:px-24 xl:px-48 2xl:px-72">
      <h1 className="mt-14 mb-10 text-xl font-bold">Account Settings</h1>
      <form action="">
        <div className="flex flex-col items-center gap-3 lg:flex-row">
          <div className="flex flex-col gap-2">
            <span className="text-center text-xl font-medium">Avatar</span>
            <div className="avatar">
              <div className="w-36 rounded-full">
                <img src={`https://i.pravatar.cc/300`} />
              </div>
            </div>
          </div>

          <div className="space-x-2">
            <button className="btn-outline btn-primary btn-sm btn">
              upload
            </button>
            <button className="btn-primary btn-sm btn">remove</button>
          </div>
        </div>

        <div className="divider"></div>

        <div className="flex flex-col gap-4 lg:flex-row lg:gap-6">
          <div className="form-control w-full max-w-full">
            <label className="label">
              <span className="label-text">First Name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input-bordered input w-full max-w-full"
              required
            />
          </div>

          <div className="form-control w-full max-w-full">
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input-bordered input w-full max-w-full"
              required
            />
          </div>
        </div>

        <div className="divider"></div>

        <div className="flex flex-col gap-4 lg:flex-row lg:gap-6">
          <div className="form-control w-full max-w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Type here"
              className="input-bordered input w-full max-w-full"
              required
            />
          </div>

          <div className="form-control w-full max-w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Type here"
              className="input-bordered input w-full max-w-full"
              required
            />
          </div>
        </div>

        <div className="divider"></div>

        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <strong>Delete Account</strong>
            <p>
              All data related to your account will be lost upon account
              deletion.
            </p>
          </div>

          <button className="btn-outline btn-error btn-sm btn">
            delete account
          </button>
        </div>

        <div className="divider"></div>

        <div>
          <ThemeToggle />
        </div>

        <div className="divider"></div>

        <div className="flex justify-center gap-2 lg:justify-end">
          <button className="btn-primary btn">save changes</button>
          <button className="btn-ghost btn">undo changes</button>
        </div>
      </form>
    </div>
  );
};

export default AccountSettings;
