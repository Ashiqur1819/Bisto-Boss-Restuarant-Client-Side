import bg from "../../assets/home/chef-service.jpg"

const Abouts = () => {
    const bgImg = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg})`,

      height: "500px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    };

    return (
        <div style={bgImg} className="flex items-center justify-center bg-fixed">
            <div className="bg-white text-gray-800 w-10/12 mx-auto p-24 text-center">
                <h2 className="text-4xl font-semibold uppercase mb-3">Bistro Boss</h2>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nihil labore laudantium doloribus officia, natus architecto quia et maiores modi consectetur molestiae. Autem cumque consequatur eveniet quod, id consectetur iste non dolorum, tempora labore doloribus voluptatum ratione quibusdam aperiam temporibus dolores dolore nostrum, mollitia deleniti eos natus quia est deserunt.</p>
            </div>
        </div>
    );
};

export default Abouts;