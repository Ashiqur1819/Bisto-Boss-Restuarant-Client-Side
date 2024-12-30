import SectionTitle from "../../components/SectionTitle";
import useMenu from "../../hooks/useMenu";
import Cover from "../../shared/Cover";
import MenuItem from "../../shared/MenuItem";
import dessertBgImg from "../../assets/menu/dessert-bg.jpeg"
import pizzaBgImg from "../../assets/menu/pizza-bg.jpg"
import saladBgImg from "../../assets/menu/salad-bg.jpg"
import soupBgImg from "../../assets/menu/soup-bg.jpg"
import { Link } from "react-router-dom";


const MenuCategory = () => {

    const {menu} = useMenu();

    const offeredMenu = menu.filter((item) => item.category === "offered");
    const dessertMenu = menu.filter((item) => item.category === "dessert");
    const pizzaMenu = menu.filter((item) => item.category === "pizza");
    const saladMenu = menu.filter((item) => item.category === "salad");
    const soupMenu = menu.filter((item) => item.category === "soup");

    return (
      <section>
        <div>
          <div>
            <SectionTitle
              heading={"TODAY'S OFFER"}
              subHeading={"Don't miss"}
            ></SectionTitle>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {offeredMenu.map((menuItem) => (
              <MenuItem menuItem={menuItem} key={menuItem._id}></MenuItem>
            ))}
          </div>
          <div className="flex items-center justify-center mt-12">
            <Link
              to="/products"
              className="border-b-4 border-gray-800 rounded-xl px-6 py-2 uppercase text-gray-600 text-base font-medium hover:border-yellow-500"
            >
              ORDER YOUR FAVOURITE FOOD
            </Link>
          </div>
        </div>
        <div className="mt-20">
          <Cover
            bgImg={dessertBgImg}
            title={"DESSERTS"}
            subTitle={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          ></Cover>
          <div className="grid md:grid-cols-2 gap-12 mt-20">
            {dessertMenu.map((menuItem) => (
              <MenuItem menuItem={menuItem} key={menuItem._id}></MenuItem>
            ))}
          </div>
          <div className="flex items-center justify-center mt-12">
            <Link
              to="/products/dessert"
              className="border-b-4 border-gray-800 rounded-xl px-6 py-2 uppercase text-gray-600 text-base font-medium hover:border-yellow-500"
            >
              ORDER YOUR FAVOURITE FOOD
            </Link>
          </div>
        </div>
        <div className="mt-20">
          <Cover
            bgImg={pizzaBgImg}
            title={"Pizza"}
            subTitle={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          ></Cover>
          <div className="grid md:grid-cols-2 gap-12 mt-20">
            {pizzaMenu.map((menuItem) => (
              <MenuItem menuItem={menuItem} key={menuItem._id}></MenuItem>
            ))}
          </div>
          <div className="flex items-center justify-center mt-12">
            <Link
              to="/products/pizza"
              className="border-b-4 border-gray-800 rounded-xl px-6 py-2 uppercase text-gray-600 text-base font-medium hover:border-yellow-500"
            >
              ORDER YOUR FAVOURITE FOOD
            </Link>
          </div>
        </div>
        <div className="mt-20">
          <Cover
            bgImg={saladBgImg}
            title={"salads"}
            subTitle={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          ></Cover>
          <div className="grid md:grid-cols-2 gap-12 mt-20">
            {saladMenu.map((menuItem) => (
              <MenuItem menuItem={menuItem} key={menuItem._id}></MenuItem>
            ))}
          </div>
          <div className="flex items-center justify-center mt-12">
            <Link
              to="/products/salad"
              className="border-b-4 border-gray-800 rounded-xl px-6 py-2 uppercase text-gray-600 text-base font-medium hover:border-yellow-500"
            >
              ORDER YOUR FAVOURITE FOOD
            </Link>
          </div>
        </div>
        <div className="mt-20">
          <Cover
            bgImg={soupBgImg}
            title={"soups"}
            subTitle={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          ></Cover>
          <div className="grid md:grid-cols-2 gap-12 mt-20">
            {soupMenu.map((menuItem) => (
              <MenuItem menuItem={menuItem} key={menuItem._id}></MenuItem>
            ))}
          </div>
          <div className="flex items-center justify-center mt-12">
            <Link
              to="/products/soup"
              className="border-b-4 border-gray-800 rounded-xl px-6 py-2 uppercase text-gray-600 text-base font-medium hover:border-yellow-500"
            >
              ORDER YOUR FAVOURITE FOOD
            </Link>
          </div>
        </div>
      </section>
    );
};

export default MenuCategory;