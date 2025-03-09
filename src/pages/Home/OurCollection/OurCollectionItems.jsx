import { dataOurCollection } from "../../../constants/DataOurCollection";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Autoplay } from "swiper/modules";

const OurCollectionItems = () => {
  return (
    <div className="flex justify-center items-center ">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="w-full max-w-5xl px-4 md:px-8"
      >
        {dataOurCollection.map((src, index) => (
          <SwiperSlide key={index} className="max-w-xs">
            <img
              src={src.src}
              alt={`NFT ${index}`}
              className=" object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurCollectionItems;
