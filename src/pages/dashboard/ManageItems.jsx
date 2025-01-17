import { BsTrash } from "react-icons/bs";
import SectionTitle from "../../components/SectionTitle";
import useMenu from "../../hooks/useMenu";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const ManageItems = () => {
    const [menu, refetch] = useMenu()
    const axiosSecure = useAxiosSecure()

    const handleDeleteItem = item => {
       Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!",
       }).then(async(result) => {
         if (result.isConfirmed) {
            const res = await axiosSecure.delete(`/menu/${item._id}`)
            console.log(res.data)
            if(res.data.deletedCount > 0){
                refetch()
                 Swal.fire({
                   title: "Deleted!",
                   text: "Item has been deleted.",
                   icon: "success",
                 });
            }
         }
       });
    }
    
    return (
      <div>
        <SectionTitle
          heading={"Manage All Items"}
          subHeading={"Hurry Up!"}
        ></SectionTitle>
        <div>
          <h2 className="text-2xl font-medium uppercase">
            Total Items: {menu.length}
          </h2>
          <div className="mt-3">
            <div className="overflow-x-auto">
              <table className="table table-zebra">
                <thead className="bg-yellow-600">
                  <tr className="text-base uppercase text-white">
                    <th></th>
                    <th className="font-medium">Item Image</th>
                    <th className="font-medium">Item Name</th>
                    <th className="font-medium">Price</th>
                    <th className="font-medium">Update</th>
                    <th className="font-medium">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {menu.map((item, index) => (
                    <tr key={index} className="text-base">
                      <th>{index + 1}</th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img src={item.image} alt="Avatar" />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{item.name}</td>
                      <td>${item.price}</td>
                      <td>
                        <Link to={`/dashboard/updateItem/${item._id}`}>
                          <button className="text-xl bg-yellow-600 p-2 rounded-md text-white">
                            <FaEdit></FaEdit>
                          </button>
                        </Link>
                      </td>
                      <td>
                        <button
                          onClick={() => handleDeleteItem(item)}
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

export default ManageItems;