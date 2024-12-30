import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import OurProducts from "../pages/products/OurProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/products/",
        element: <OurProducts></OurProducts>,
      },
      {
        path: "/products/:category",
        element: <OurProducts></OurProducts>,
      },
    ],
  },
]);

export default router;