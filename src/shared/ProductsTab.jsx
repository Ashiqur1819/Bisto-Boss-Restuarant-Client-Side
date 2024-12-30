import MenuItemCard from "./MenuItemCard";

const ProductsTab = ({items}) => {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {items.map((item) => (
          <MenuItemCard menuItem={item} key={item._id}></MenuItemCard>
        ))}
      </div>
    );
};

export default ProductsTab;