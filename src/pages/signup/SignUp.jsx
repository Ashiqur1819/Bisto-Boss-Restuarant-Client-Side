import {
  FaEye,
  FaEyeSlash,
  FaFacebook,
  FaGithub,
  FaGoogle,
} from "react-icons/fa";
import bgImg from "../../assets/others/authentication.png";
import loginImg from "../../assets/others/authentication2.png";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../shared/SocialLogin";
import { toast } from "react-toastify";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createNewUser, updateUserProfile, setUser, setLoading } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleUserSignup = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const userInfo = { name, email };

    // Sign up
    createNewUser(email, password)
      .then((result) => {
        setUser(result.user);

        updateUserProfile({ displayName: name, photoURL: photo }).then(() => {
          setUser((prev) => ({ ...prev, displayName: name, photoURL: photo }));
          setLoading(false);
        })

        // send user data to backend
        axiosPublic.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              title: "Signup Successful!",
              icon: "success",
              draggable: true,
            });
          }
        });
        navigate("/");
      })
      .catch(() => {
        toast.error("User already exist!");
      });
  };

  const bgStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div>
      <Helmet>
        <title>SIGNUP | BISTRO BOSS</title>
      </Helmet>
      <div style={bgStyle}>
        <div className="w-10/12 mx-auto border lg:flex lg:flex-row-reverse items-center gap-12 py-12">
          <div>
            <img src={loginImg} alt="" />
          </div>
          <div className="card bg-transparent w-full mx-auto max-w-lg rounded-none">
            <h2 className="text-3xl md:text-4xl font-bold text-center mt-6 text-gray-800">
              Signup
            </h2>
            <form
              onSubmit={handleUserSignup}
              className="card-body px-8 py-0 bg-transparent mt-6"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-base text-gray-700">
                    Name:
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered rounded-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-base text-gray-700">
                    Photo URL:
                  </span>
                </label>
                <input
                  type="url"
                  name="photo"
                  placeholder="Enter your photo url"
                  className="input input-bordered rounded-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-base text-gray-700">
                    Email:
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered rounded-none"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text font-semibold text-base text-gray-700">
                    Password:
                  </span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered rounded-none"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-[57px] text-gray-500"
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </button>
              </div>
              <div className="form-control mt-3">
                <input
                  type="submit"
                  value="Singup"
                  className="btn rounded-none py-2 px-6 text-lg bg-yellow-500  text-white cursor-pointer font-semibold hover:bg-yellow-400 "
                />
              </div>
            </form>
            <div className="px-8">
              <p className="text-center mt-6 font-medium text-yellow-600">
                Already registered?{" "}
                <Link to="/login" className="underline">
                  Go to log in
                </Link>
              </p>
              <p className="text-center mt-2 font-medium text-gray-600">
                Or sign in with
              </p>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
