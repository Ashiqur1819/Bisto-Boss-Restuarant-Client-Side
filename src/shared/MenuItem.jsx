

const MenuItem = ({menuItem}) => {
    const { image, name, recipe, price } = menuItem;
    return (
      <div className="flex items-center gap-6">
        <img
          style={{ borderRadius: "0 200px 200px 200px" }}
          src={image}
          className="w-24 h-24 object-cover"
          alt=""
        />
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold uppercase text-gray-700">
              {name}-----------------
            </h3>
            <p className="text-[#D99904] font-medium text-lg">${price}</p>
          </div>
          <p className="pr-12 text-gray-500">{recipe}</p>
        </div>
      </div>
    );
};

export default MenuItem;