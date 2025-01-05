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
export default ({sliderData = [], onClick, value}) => {
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

{sliderData.map((slide) => (
        <SwiperSlide > <Slidercard image = {`/images/${slide.images[0].filename}`}
        text = {slide.title} value = {slide.title} data = {slide}
        onClick={onClick}/>  </SwiperSlide>
              
              ))}

     {/* <SwiperSlide > <Slidercard image={image} text={text}/>  </SwiperSlide>
     <SwiperSlide > <Slidercard image={image} text={text}/>  </SwiperSlide>
     <SwiperSlide > <Slidercard image={image} text={text}/>  </SwiperSlide>
     <SwiperSlide > <Slidercard image={image} text={text}/>  </SwiperSlide>
     <SwiperSlide > <Slidercard image={image} text={text}/>  </SwiperSlide> */}
    
{/* <SwiperSlide key={3}>Hello</SwiperSlide> */}

    </Swiper>
  );
};