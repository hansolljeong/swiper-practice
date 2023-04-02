// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Test.css";

// import required modules
import { Mousewheel, Pagination } from "swiper";
import ASwiperLastSection from "../components/ASwiperLastSection";

export default function Test() {
  window.addEventListener("scroll", function () {
    console.log(window.scrollY);
  });

  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        speed={1000}
        mousewheel={{ releaseOnEdges: false }}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>
          <ASwiperLastSection
            children={<div>Slide 3</div>}
          ></ASwiperLastSection>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
