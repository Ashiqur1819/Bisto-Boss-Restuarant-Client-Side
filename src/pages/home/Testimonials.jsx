import SectionTitle from "../../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { SiComma } from "react-icons/si";


const Testimonials = () => {

    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:3000/reviews")
          .then((res) => res.json())
          .then((data) => setReviews(data));
    }, [])

    return (
      <section>
        <div>
          <SectionTitle
            heading={"Testimonials"}
            subHeading={"What Our Clients Say"}
          ></SectionTitle>
        </div>
        <div>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {reviews.map((review) => (
              <SwiperSlide key={review._id}>
                <div className="flex flex-col items-center text-center px-40 py-6 gap-6">
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                  />
                  <div className="flex items-center text-5xl font-bold my-3">
                    <SiComma></SiComma>
                    <SiComma></SiComma>
                  </div>
                  <p className="text-gray-600">{review.details}</p>
                  <h3 className="text-2xl font-semibold text-[#CD9003] uppercase">
                    {review.name}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    );
};

export default Testimonials;