import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./Gallery.css";

export const Gallery = () => {
  const dataImages = useSelector(state => state.carousel.images);
  const images = dataImages.map(i => <SwiperSlide key={i.id}>{<img src={i.url} alt="" />}</SwiperSlide>);

  return (
    <div className={"gallery_container"}>
      <Swiper
        slidesPerView={3}
        spaceBetween={12}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className={"mySwiper"}
      >
        {images}
      </Swiper>
    </div>
  );
};
