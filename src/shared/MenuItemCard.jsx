import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useCart from "../hooks/useCart";



const MenuItemCard = ({menuItem}) => {
    const { image, name, recipe, price, _id } = menuItem;
    const {user} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const [, refetch] = useCart()

    const handleAddToCart = () => {
      if(user && user.email){
       
        const cartItem = {
          menuId : _id,
          email: user.email,
          name,
          image,
          price
        }

        axios.post("http://localhost:3000/carts", cartItem).then((res) => {
          if(res.data.insertedId){
            Swal.fire({
              position: "center",
              icon: "success",
              title: `${name} has been added to the cart`,
              showConfirmButton: false,
              timer: 2000,
            });
            refetch()
          }
        });

      }else{
         Swal.fire({
           title: "You Are Not Logged In?",
           text: "Please add to cart after login!",
           icon: "warning",
           showCancelButton: true,
           confirmButtonColor: "#3085d6",
           cancelButtonColor: "#d33",
           confirmButtonText: "Go to login!",
         }).then((result) => {
           if (result.isConfirmed) {
             navigate("/login", { state: { from: location } });
           }
         });
      }
    }

    return (
      <div className="card bg-[#F3F3F3] shadow-md rounded-none">
        <img src={image} />
        <div className="card-body text-center">
          <h2 className="text-2xl font-semibold text-center">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center items-end mt-3">
            <button
              onClick={handleAddToCart}
              className="border-b-4 border-[#D99904] rounded-xl px-6 py-2 text-[#D99904] uppercase font-medium hover:border-none hover:bg-gray-800"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    );
};

export default MenuItemCard;