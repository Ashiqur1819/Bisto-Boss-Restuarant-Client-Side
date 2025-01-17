
import SectionTitle from "../../components/SectionTitle";
import MenuItem from "../../shared/MenuItem";
import useMenu from "../../hooks/useMenu";


const PopularMenu = () => {

    const [menu] = useMenu()

    const popularMenu = menu?.filter(item => item.category === "popular");

    return (
      <section>
        <div>
          <SectionTitle
            heading={"From Our Menu"}
            subHeading={"Check It Out"}
          ></SectionTitle>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {popularMenu?.map((menuItem) => (
            <MenuItem menuItem={menuItem} key={menuItem._id}></MenuItem>
          ))}
        </div>
        <div className="flex items-center justify-center mt-12">
          <button className="border-b-4 border-gray-800 rounded-xl px-6 py-2 uppercase text-gray-600 font-medium hover:border-yellow-500">
            View Full Menu
          </button>
        </div>
      </section>
    );
};

export default PopularMenu;