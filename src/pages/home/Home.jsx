import Abouts from "./Abouts";
import Banner from "./Banner";
import CallUs from "./CallUs";
import Category from "./Category";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import RecomendsItem from "./RecomendsItem";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <div className="px-3 md:px-6 lg:px-10">
          <Category></Category>
        </div>
        <div className="mt-20 px-3 md:px-6 lg:px-10">
          <Abouts></Abouts>
        </div>
        <div className="px-3 md:px-6 lg:px-10">
          <PopularMenu></PopularMenu>
        </div>
        <div className="mt-20 px-3 md:px-6 lg:px-10">
          <CallUs></CallUs>
        </div>
        <div className="px-3 md:px-6 lg:px-10">
          <RecomendsItem></RecomendsItem>
        </div>
        <div className="mt-20 px-3 md:px-6 lg:px-10">
          <Featured></Featured>
        </div>
        <div className="px-3 md:px-6 lg:px-10">
          <Testimonials></Testimonials>
        </div>
      </div>
    );
};

export default Home;