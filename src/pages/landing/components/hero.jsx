import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const imageUrls = [

  '../../../assets/images/images6.jpg',
  '../../../assets/images/images1.jpg',
  '../../../assets/images/images2.jpg',
  '../../../assets/images/images3.jpg',
  '../../../assets/images/images4.jpg',
  '../../../assets/images/images5.jpg',
  '../../../assets/images/images7.jpg'
  
];

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {imageUrls.map((url, index) => (
          <SwiperSlide key={index}>
            <img src={url} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}