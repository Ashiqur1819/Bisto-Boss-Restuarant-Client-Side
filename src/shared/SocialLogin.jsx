import { useContext } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const SocialLogin = () => {

    const {loginWithGoogle} = useAuth()
    const navigate = useNavigate()

    const handleLoginWithGoogle = () => {
        loginWithGoogle()
        .then(res => {
            // send data to backend
            const name = res?.user?.displayName
            const email = res?.user?.email
            const userInfo = {
                name, email
            }
            const axiosPublic = useAxiosPublic();
            axiosPublic.post("/users", userInfo)
            .then(() => {
              toast.success("Login Successful!")
                navigate("/")
            })
        })
    }

    return (
      <div className="flex items-center justify-center gap-6 mt-3">
        <button className="text-xl border border-gray-400 p-2 rounded-full">
          <FaFacebook></FaFacebook>
        </button>
        <button onClick={handleLoginWithGoogle} className="text-xl border border-gray-400 p-2 rounded-full">
          <FaGoogle></FaGoogle>
        </button>
        <button className="text-xl border border-gray-400 p-2 rounded-full">
          <FaGithub></FaGithub>
        </button>
      </div>
    );
};

export default SocialLogin;