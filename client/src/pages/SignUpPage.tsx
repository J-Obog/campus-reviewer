const SignUpPage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign up now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card w-full max-w-sm flex-shrink-0 bg-base-100 shadow-2xl">
          <div className="card-body">
            <form action="">
              <div className="form-control">
                <label htmlFor="firstname" className="label">
                  <span className="label-text">First name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="input-bordered input"
                  id="firstname"
                  name="firstname"
                  required
                />
              </div>
              <div className="form-control">
                <label htmlFor="lastname" className="label">
                  <span className="label-text">Last name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="input-bordered input"
                  id="lastname"
                  name="lastname"
                  required
                />
              </div>
              <div className="form-control">
                <label htmlFor="email" className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter email"
                  className="input-bordered input"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label htmlFor="password" className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your password"
                  className="input-bordered input"
                  id="password"
                  name="password"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button
                  aria-label="sign up to Campus Reviewer"
                  className="btn-primary btn"
                >
                  sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
