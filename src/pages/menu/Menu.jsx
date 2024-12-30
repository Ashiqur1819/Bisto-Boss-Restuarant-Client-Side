import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover";
import menuBgImg from "../../assets/menu/banner3.jpg"
import MenuCategory from "./MenuCategory";


const Menu = () => {
    return (
      <div>
        <Helmet>
          <title>MENU | BISTRO BOSS</title>
        </Helmet>
        <div>
          <div>
            <Cover
              bgImg={menuBgImg}
              title={"OUR MENU"}
              subTitle={"Would you like to try a dish?"}
            ></Cover>
          </div>
          <div className="px-3 md:px-6 lg:px-10">
            <MenuCategory></MenuCategory>
          </div>
        </div>
      </div>
    );
};

export default Menu;