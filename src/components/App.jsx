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
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 6500,
          disableOnInteraction: true,
        }}
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="h-screen rounded-2xl"
      >
        <SwiperSlide className=' justify-center items-center '>
          <img src="/FerroscanPasante.jpg" className='absolute object-cover blur-sm' alt="" />          
          <bottom class="bg-black text-white absolute">
              hola  soy el bottom
          </bottom>
          <div class="animated-title">
            <div class="text-top uppercase text-black font-bold">
              <div>
                <a href="">Ferroscan</a>
                <span>Para Pasantes</span>
              </div>
            </div>
            <div class="text-bottom text-LPSColor font-bold">
              <div>Con el Ferroscan PS-300 podra realizar demarcacion de los aceros de refuerzo in-situ para posteriores pasantes, con la finalidad de no afectar los aceros de refuerzo del elemento a perforar.</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Render.jpg" className='absolute object-cover blur-sm' alt="" />
          <div class="animated-title">
            <div class="text-top uppercase ">
              <div>
                <span>Ferroscan</span>
                <span>Para Pasantes</span>
              </div>
            </div>
            <div class="text-bottom">
              <div>Detección precisa: El sistema sirve para detectar de manera sonora, visualizar, determinar la profundidad y estimar el diámetro de metales ferrosos, tales como varillas de refuerzo, y no ferrosos dentro de una armadura de concreto</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Ferroscan2.webp" className='absolute object-cover blur-sm' alt="" />
          <div class="animated-title">
            <div class="text-top">
              <div>
                <span>mimicking</span>
                <span>apple's design</span>
              </div>
            </div>
            <div class="text-bottom">
              <div>for the win!</div>
            </div>
          </div>
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
