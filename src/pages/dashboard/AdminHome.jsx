import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaBook, FaCalculator, FaDollarSign, FaUsers } from "react-icons/fa";


const AdminHome = () => {
    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()

    const {data: adminStats = {}} = useQuery({
        queryKey: ["admin-stats"],
        queryFn: async () => {
            const res = await axiosSecure.get("/admin-stats")
           return res.data
        }
    })

    console.log(adminStats)

    return (
      <div className="mt-12">
        <h2 className="text-3xl font-bold uppercase">
          Hi, Welcome Back{" "}
          <span className="text-yellow-600 drop-shadow-md">
            {user.displayName}{" "}
          </span>
        </h2>
        <div>
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaDollarSign className="text-3xl"></FaDollarSign>
              </div>
              <div className="stat-title">Revenue</div>
              <div className="stat-value">{adminStats.totalRevenue}</div>
              <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaUsers className="text-3xl"></FaUsers>
              </div>
              <div className="stat-title">Users</div>
              <div className="stat-value">{adminStats?.users}</div>
              <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaCalculator className="text-3xl"></FaCalculator>
              </div>
              <div className="stat-title">Menu Items</div>
              <div className="stat-value">{adminStats.menuItems}</div>
              <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaBook className="text-3xl"></FaBook>
              </div>
              <div className="stat-title">Orders</div>
              <div className="stat-value">{adminStats.orders}</div>
              <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AdminHome;