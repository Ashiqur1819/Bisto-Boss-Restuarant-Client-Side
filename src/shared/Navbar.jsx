import { useContext } from "react";
import { Link, NavLink} from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaCartPlus } from "react-icons/fa";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
import { toast } from "react-toastify";


const Navbar = () => {

  const { user, logOut} = useContext(AuthContext)
  const [cart] = useCart()
  const [isAdmin] = useAdmin()

  const handleLogOut = () => {
    logOut()
  }


    const links = (
      <>
        <li className="font-medium text-white">
          <Link to="/">Home</Link>
        </li>
        <li className="font-medium text-white">
          <Link to="/menu">Our Menu</Link>
        </li>
        <li className="font-medium text-white">
          <Link to="/products">Our Products</Link>
        </li>
        {user && isAdmin && (
          <li className="font-medium text-white">
            <Link to="/dashboard/adminHome">Dashboard</Link>
          </li>
        )}
        {user && !isAdmin && (
          <li className="font-medium text-white">
            <Link to="/dashboard/userHome">Dashboard</Link>
          </li>
        )}
        {user ? (
          <li>
            <button
              className="font-bold uppercase underline text-red-600"
              onClick={handleLogOut}
            >
              Logout
            </button>
          </li>
        ) : (
          <li className="font-medium text-white">
            <Link to="/login">Login</Link>
          </li>
        )}
      </>
    );

    return (
      <div className="navbar fixed z-10 bg-[#000000ad] text-white px-3 md:px-6 lg:px-10 py-4 max-w-screen-xl">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 text-sm shadow uppercase  text-white"
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
          <ul className="menu-horizontal text-sm px-1 uppercase gap-6 text-white">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <div>
              <NavLink to="/dashboard">
            <button className="btn">
                <FaCartPlus className="text-2xl text-gray-500"></FaCartPlus>
                <div className="badge badge-secondary">{cart.length}</div>
            </button>
              </NavLink>
          </div>
          {user && (
            <img src={user?.photoURL} referrerPolicy="no-referrer" className="w-16 rounded-full" alt="" />
          )}
        </div>
      </div>
    );
};

export default Navbar;