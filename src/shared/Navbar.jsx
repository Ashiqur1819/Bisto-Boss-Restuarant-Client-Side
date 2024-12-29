import logo from "../assets/logo.png"

const Navbar = () => {

    const links = (
      <>
        <li className="text-base font-medium">
          <a>Home</a>
        </li>
        <li className="text-base font-medium">
          <a>Contact Us</a>
        </li>
      </>
    );

    return (
      <div className="navbar fixed z-10 bg-[#0000007e] text-white px-3 md:px-6 lg:px-10 py-4 max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
             {links}
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-3xl font-semibold uppercase">Bistro Boss</h3>
            <p className="uppercase text-lg">R e s t u a r a n t</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    );
};

export default Navbar;