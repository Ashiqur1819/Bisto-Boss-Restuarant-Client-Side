import SectionTitle from "../../components/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg"

const Featured = () => {
  const featuredBg = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${featuredImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <section style={featuredBg} className="p-24 text-white bg-fixed">
      <div className="-mt-20">
        <SectionTitle
          heading={"From Our Menu"}
          subHeading={"Check It Out"}
        ></SectionTitle>
      </div>
      <div className="flex items-center gap-12">
        <div>
          <img src={featuredImg} className="rounded-md" alt="" />
        </div>
        <div className="space-y-3">
          <h4 className="text-2xl font-semibold">September 29, 2024</h4>
          <h3 className="text-lg uppercase text-gray-100">
            WHERE CAN I GET SOME?
          </h3>
          <p className="text-gray-200">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
            beatae quas iste repudiandae fuga consequatur, sed nostrum ab
            eveniet quaerat accusantium ducimus nihil ad sapiente? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Ipsa officiis amet
            quibusdam quo. Facilis, sit.
          </p>
        <div className="card-actions items-end mt-3">
          <button className="border-b-4 border-[#D99904] rounded-xl px-6 py-2 text-[#D99904] uppercase font-medium  hover:bg-white">
            Add To Cart
          </button>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;