import { Outlet, useLocation } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";


const MainLayout = () => {

    const location = useLocation()
    const isLogin =
      location.pathname.includes("login") ||
      location.pathname.includes("signup"); 

    return (
      <div className="max-w-screen-xl mx-auto">
        <header>{isLogin || <Navbar></Navbar>}</header>
        <main>
          <Outlet></Outlet>
        </main>
        <footer>{isLogin || <Footer></Footer>}</footer>
      </div>
    );
};

export default MainLayout;