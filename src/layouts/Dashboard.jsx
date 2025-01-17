import { FaAddressBook, FaBars, FaCalendar, FaCalendarAlt, FaDollarSign, FaEnvelope, FaHome, FaListUl, FaShoppingBag, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {

    const [cart] = useCart()
    
    const [isAdmin] = useAdmin();

    return (
      <div className="flex">
        <div className="w-64 min-h-screen bg-yellow-600">
          <div className="flex flex-col items-center justify-center my-12">
            <h3 className="text-3xl font-bold uppercase">Bistro Boss</h3>
            <p className="uppercase font-semibold text-lg">
              R e s t u a r a n t
            </p>
          </div>
          <div className="px:3 md:px-6 flex flex-col justify-between">
            {isAdmin ? (
              <>
                <ul className="flex flex-col gap-6 font-medium uppercase ">
                  <li>
                    <NavLink
                      className="flex items-center gap-2"
                      to="/dashboard/adminHome"
                    >
                      <FaHome className="text-2xl"></FaHome>Admin Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="flex items-center gap-2"
                      to="/dashboard/addItems"
                    >
                      <FaUtensils className="text-2xl"></FaUtensils>
                      Add Items
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="flex items-center gap-2"
                      to="/dashboard/manageItems"
                    >
                      <FaListUl className="text-2xl"></FaListUl>
                      Manage Items
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="flex items-center gap-2"
                      to="/dashboard/manageBookings"
                    >
                      <FaAddressBook className="text-2xl"></FaAddressBook>
                      Manage Bookings
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="flex items-center gap-2"
                      to="/dashboard/allUsers"
                    >
                      <FaUsers className="text-2xl"></FaUsers> All Users
                    </NavLink>
                  </li>
                </ul>
              </>
            ) : (
              <>
                <ul className="flex flex-col gap-6 font-medium uppercase ">
                  <li>
                    <NavLink
                      className="flex items-center gap-2"
                      to="/dashboard/userHome"
                    >
                      <FaHome className="text-2xl"></FaHome>User Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="flex items-center gap-2"
                      to="/dashboard/reservation"
                    >
                      <FaCalendar className="text-2xl"></FaCalendar>Reservation
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="flex items-center gap-2"
                      to="/dashboard/paymentHistory"
                    >
                      <FaDollarSign className="text-2xl"></FaDollarSign> Payment
                      History
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="flex items-center gap-2"
                      to="/dashboard/myCart"
                    >
                      <FaShoppingCart className="text-2xl"></FaShoppingCart> My
                      Cart ({cart.length})
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="flex items-center gap-2"
                      to="/dashboard/addReview"
                    >
                      <MdReviews className="text-2xl"></MdReviews> Add Review
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="flex items-center gap-2"
                      to="/dashboard/myBooking"
                    >
                      <FaCalendarAlt className="text-2xl"></FaCalendarAlt> My
                      Booking
                    </NavLink>
                  </li>
                </ul>
              </>
            )}
            <div className="divider divider-warning my-6"></div>
            <ul className="flex flex-col gap-6 font-medium uppercase">
              <li>
                <NavLink
                  className="flex items-center gap-2"
                  to="/"
                >
                  <FaHome className="text-2xl"></FaHome>Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center gap-2"
                  to="/menu"
                >
                  <FaBars className="text-2xl"></FaBars>Menu
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center gap-2"
                  to="/dashboard/userHome"
                >
                  <FaShoppingBag className="text-2xl"></FaShoppingBag>Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center gap-2"
                  to="/dashboard/contact"
                >
                  <FaEnvelope className="text-2xl"></FaEnvelope>Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 px-3 md:px-6 lg:px-10">
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default Dashboard;