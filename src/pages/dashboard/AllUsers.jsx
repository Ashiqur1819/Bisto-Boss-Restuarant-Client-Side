import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { BsTrash } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = email => {
    axiosSecure.patch(`/users/${email}`)
    .then(() => {
        Swal.fire({
          title: `Make admin successful`,
          icon: "success",
          draggable: true,
        })
        refetch()
    })
    .catch(() => {
        toast.error("Something went wrong! Please try again later.")
    })
  }

  const handleDeleteUser = (email) => {
    const axiosSecure = useAxiosSecure();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${email}`);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        refetch();
      }
    });
  };

  return (
    <div>
      <SectionTitle
        heading={"Manage All Users"}
        subHeading={"How Many??"}
      ></SectionTitle>
      <div>
        <h2 className="text-2xl font-medium uppercase">
          Total Users: {users.length}
        </h2>
        <div className="mt-3">
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead className="bg-yellow-600">
                <tr className="text-base uppercase text-white">
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index} className="text-base">
                    <th>{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      {user.role === "admin" ? (
                        <><p className="bg-green-50 text-center font-medium text-green-500 p-2 rounded-md">Admin</p></>
                      ) : (
                        <>
                          <button
                            onClick={() => handleMakeAdmin(user.email)}
                            className="text-xl bg-yellow-600 p-2 rounded-md text-white"
                          >
                            <FaUsers></FaUsers>
                          </button>
                        </>
                      )}
                    </td>
                    <td>
                      <button
                        onClick={() => handleDeleteUser(user.email)}
                        className="text-xl bg-red-600 p-2 rounded-md text-white"
                      >
                        <BsTrash></BsTrash>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
