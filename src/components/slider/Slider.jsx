import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./Slider.css"
import Slidercard from '../slidercard/Slidercard';


// import image1 from "../../assets/images/image.png"
export default ({image1, image2, image3, image4, image5, text1, text2, text3, text4, text5}) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
     <SwiperSlide key={1}> <Slidercard image={image1} text={text1}/>  </SwiperSlide>
     <SwiperSlide key={2}> <Slidercard image={image2} text={text1}/> </SwiperSlide>
     <SwiperSlide key={2}> <Slidercard image={image1} text={text1}/> </SwiperSlide>
     <SwiperSlide key={2}> <Slidercard image={image2} text={text1}/> </SwiperSlide>
     <SwiperSlide key={2}> <Slidercard image={image1} text={text1}/> </SwiperSlide>
{/* <SwiperSlide key={3}>Hello</SwiperSlide> */}

    </Swiper>
  );
};