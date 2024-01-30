import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        slidesPerView={1}
        effect={'fade'}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          type: 'progressbar',
          clickable: true,
        }}
        navigation={true}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="h-screen rounded-2xl"
      >
        <SwiperSlide className=' justify-center items-center'>
          <img src="/Patologia.jpg" className='absolute object-cover' alt="" />
          <a href="" className='text-2xl sm:text-4xl py-6 text-LPSColor z-10 font-bold'>Slide 1</a>
          <div className='absolute block text-LPSColor'>
            <h5 className=' translate-y-10'>Hola Mundo</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Render.jpg" className='absolute object-cover' alt="" />
          <a href="" className='text-6xl text-LPSColor z-10 font-bold'>Slide 2</a>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Ferroscan2.webp" className='absolute object-cover' alt="" />
          <a href="" className='text-6xl text-LPSColor z-10 font-bold'>Slide 3</a>
        </SwiperSlide>
        <div className="autoplay-progress z-10" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
