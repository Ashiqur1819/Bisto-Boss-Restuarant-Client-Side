import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover";
import ourProductBg from "../../assets/shop/banner2.jpg";
import useMenu from "../../hooks/useMenu";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import ProductsTab from "../../shared/ProductsTab";
import { useParams } from "react-router-dom";


const OurProducts = () => {

  const categories = ["salad", "pizza", "soup", "dessert", "drinks"]
  const {category} = useParams()
  const initialIndex = categories.indexOf(category)
  const  [menu]  = useMenu();
  const [tabIndex, setTabindex] = useState(initialIndex)

  const drinksMenu = menu.filter((item) => item.category === "drinks");
  const dessertMenu = menu.filter((item) => item.category === "dessert");
  const pizzaMenu = menu.filter((item) => item.category === "pizza");
  const saladMenu = menu.filter((item) => item.category === "salad");
  const soupMenu = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <Helmet>
        <title>PRODUCTS | BISTRO BOSS</title>
      </Helmet>
      <div>
        <Cover
          bgImg={ourProductBg}
          title={"OUR Products"}
          subTitle={"Would you like to try a dish?"}
        ></Cover>
      </div>
      <div className="mt-20 px-3 md:px-6 lg:px-10">
        <Tabs defaultIndex={tabIndex == -1 ? 0 : tabIndex} onSelect={(index) => setTabindex(index)}>
          <TabList
            className={" uppercase font-semibold text-center text-gray-800"}
          >
            <Tab>salad</Tab>
            <Tab>pizza</Tab>
            <Tab>soups</Tab>
            <Tab>desserts</Tab>
            <Tab>drinks</Tab>
          </TabList>

          <TabPanel>
            <ProductsTab items={saladMenu}></ProductsTab>
          </TabPanel>
          <TabPanel>
            <ProductsTab items={pizzaMenu}></ProductsTab>
          </TabPanel>
          <TabPanel>
            <ProductsTab items={soupMenu}></ProductsTab>
          </TabPanel>
          <TabPanel>
            <ProductsTab items={dessertMenu}></ProductsTab>
          </TabPanel>
          <TabPanel>
            <ProductsTab items={drinksMenu}></ProductsTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurProducts;
