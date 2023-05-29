import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import { Box, Divider } from '@chakra-ui/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export default function PropertyThumbSlider({ photos }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {photos.map((image) => (
          <SwiperSlide key={image}>
            <img src={image} alt="single propert pictures" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Divider marginY="1rem" />
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {photos.map((image) => (
          <SwiperSlide key={image}>
            <img src={image} alt="single propert pictures" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
