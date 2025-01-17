import SectionTitle from "../../components/SectionTitle";
import useCart from "../../hooks/useCart";
import { BsTrash } from "react-icons/bs";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
      const axiosSecure = useAxiosSecure();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleDeleteCart = (item) => {
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
        axiosSecure.delete(`/carts/${item._id}`)
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        refetch()
      }
    });
   
  };

  return (
    <div>
      <div>
        <SectionTitle
          heading={"WANNA ADD MORE?"}
          subHeading={"My Cart"}
        ></SectionTitle>
      </div>
      <div className=" p-6 w-11/12 mx-auto mb-12 shadow-xl rounded-md">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-medium uppercase">
            Total Orders: {cart.length}
          </h2>
          <h2 className="text-2xl font-medium uppercase">
            Total Price: ${totalPrice}
          </h2>
          <button disabled={!cart.length} className="btn bg-yellow-600 px-4 py-2 rounded-md text-white font-medium uppercase hover:bg-yellow-500">
            <Link to="/dashboard/payment">Pay</Link>
          </button>
        </div>
        <div className="mt-12">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="bg-yellow-600">
                <tr className="uppercase text-white font-medium ">
                  <th></th>
                  <th>Item Image</th>
                  <th>Item Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={item._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="font-medium">{item.name}</div>
                    </td>
                    <td>
                      <div className="font-medium">$ {item.price}</div>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDeleteCart(item)}
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

export default Cart;
