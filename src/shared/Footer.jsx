import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="grid md:grid-cols-2  mt-20">
        <aside className="bg-gray-800 p-10  text-gray-200 flex flex-col items-center justify-center">
          <h3 className="text-2xl font-bold text-white mb-3">Contact Us</h3>
          <p>Mather Bazar, Palashbari, Gaibandha</p>
          <p>+8801931536316</p>
          <p>Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun: 10:00 - 23:00</p>
        </aside>
        <nav className="bg-neutral text-gray-200 flex flex-col items-center justify-center p-10">
          <h3 className="text-2xl font-bold text-white mb-3">Follow Us</h3>
          <p>Join Us On Social Media</p>
          <div className="grid grid-flow-col gap-3 mt-2 text-2xl">
            <FaFacebook></FaFacebook>
            <FaXTwitter></FaXTwitter>
            <FaInstagram></FaInstagram>
          </div>
        </nav>
      </div>
      <div className="footer footer-center bg-black text-gray-400 p-4">
        <aside>
          <p className="capitalize">
            Copyright © {new Date().getFullYear()} - All rights reserved by
            bistroBoss
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
