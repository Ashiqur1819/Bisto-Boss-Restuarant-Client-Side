

const MenuItemCard = ({menuItem}) => {
    const { image, name, recipe } = menuItem;
    return (
      <div className="card bg-[#F3F3F3] shadow-md rounded-none">
        <img src={image} />
        <div className="card-body text-center">
          <h2 className="text-2xl font-semibold text-center">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center items-end mt-3">
            <button className="border-b-4 border-[#D99904] rounded-xl px-6 py-2 text-[#D99904] uppercase font-medium hover:border-none hover:bg-gray-800">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    );
};

export default MenuItemCard;