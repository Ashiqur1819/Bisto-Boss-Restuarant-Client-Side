import { useContext, useEffect, useRef, useState } from "react";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import bgImg from "../../assets/others/authentication.png"
import loginImg from "../../assets/others/authentication2.png"
import { FaFacebook } from "react-icons/fa6";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import SocialLogin from "../../shared/SocialLogin";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const captchaRef = useRef()
const [disabled, setDisabled] = useState(true)
const {userLogin, setUser} = useContext(AuthContext)
const navigate = useNavigate()
const location = useLocation()
const from = location?.state?.from?.pathname || "/"

const handleUserLogin = e => {
  e.preventDefault();

  const form = e.target;
  const email = form.email.value
  const password = form.password.value

  // Login
  userLogin(email, password)
    .then((result) => {
      console.log(result)
      setUser(result.user);
      Swal.fire({
        title: "Login Successful!",
        icon: "success",
        draggable: true,
      });
      navigate(from); // Important
    })
    .catch((error) => console.log(error));
}

  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;

    if(validateCaptcha(user_captcha_value)){
        setDisabled(false)
        toast.success("Captcha Validate!");
    }
    else{
        setDisabled(true);
       return toast.error("Invalid Captcha!");
    }
    
  }

  useEffect(() => {
    loadCaptchaEnginge(6)
  }, [])

  const bgStyle = {
    backgroundImage: `url(${bgImg})`,
    height: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div>
      <Helmet>
        <title>LOGIN | BISTRO BOSS</title>
      </Helmet>
      <div style={bgStyle}>
        <div className="w-10/12 mx-auto border lg:flex items-center gap-12 py-12">
          <div>
            <img src={loginImg} alt="" />
          </div>
          <div className="card bg-transparent w-full mx-auto max-w-lg rounded-none">
            <h2 className="text-3xl md:text-4xl font-bold text-center mt-6 text-gray-800">
              Login
            </h2>
            <form
              onSubmit={handleUserLogin}
              className="card-body px-8 py-0 bg-transparent mt-6"
            >
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
                <label className="mt-1">
                  <Link
                    to="/forget_password"
                    href="#"
                    className="label-text font-medium text-sm text-gray-500 hover:text-gray-400"
                  >
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">
                    <LoadCanvasTemplate></LoadCanvasTemplate>
                  </span>
                </label>
                <input
                  type="text"
                  name="captcha"
                  ref={captchaRef}
                  placeholder="Enter captcha here"
                  className="input input-bordered rounded-none"
                  required
                />
                <button
                  type="button"
                  className="mt-5 py-2 px-6 text-lg bg-blue-400  text-white cursor-pointer font-semibold hover:bg-blue-500 "
                  onClick={handleValidateCaptcha}
                >
                  Validate
                </button>
              </div>
              <div className="form-control mt-3">
                <input
                  disabled={disabled}
                  type="submit"
                  value="Login"
                  className="btn rounded-none py-2 px-6 text-lg bg-yellow-400  text-white cursor-pointer font-semibold hover:bg-yellow-500 "
                />
              </div>
            </form>
            <div className="px-8">
              <p className="text-center mt-6 font-medium text-yellow-600">
                New here?{" "}
                <Link className="underline" to="/signup">
                  Create a New Account
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

export default Login;
