import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import MenuItemCard from "../../shared/MenuItemCard";


const RecomendsItem = () => {

    const [menu, setMenu] = useState([])

    useEffect(() => {
      fetch("menu.json")
        .then((res) => res.json())
        .then((data) => {
          const recomendItems = data
            .slice(0, 6)
            .sort((a, b) => b.price - a.price);
          setMenu(recomendItems);
        });
    }, [setMenu]);


    return (
      <section>
        <div>
          <SectionTitle
            heading={"CHEF RECOMMENDS"}
            subHeading={"Should Try"}
          ></SectionTitle>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                menu.map(menuItem => <MenuItemCard menuItem={menuItem} key={menuItem._id}></MenuItemCard>)
            }
        </div>
      </section>
    );
};

export default RecomendsItem;