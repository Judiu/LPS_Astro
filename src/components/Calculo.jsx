import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';

// import required modules
import { Parallax, Autoplay, Pagination, Navigation } from 'swiper/modules';

import { getI18N } from "../i18n"
const { currentLocale } = Astro
const i18n = getI18N({ currentLocale })

export default function Calculo() {
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
        modules={[Parallax, Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="h-screen rounded-2xl "
        
      > 
        {/* Swiper 1 */}
        <SwiperSlide>          
          <div className="grid grid-cols-2">
            <div>
              <div>
                <div className="title text-2xl sm:text-6xl font-bold text-LPSColor uppercase" data-swiper-parallax="-300">
                  {i18n?.BENTO_5_TITLE}
                </div>
                <div className="subtitle text-xl sm:text-4xl text-LPSColor" data-swiper-parallax="-200">
                  Para Pasantes Estructurales
                </div>
                <div className="text text-sm sm:text-xl text-LPSColor " data-swiper-parallax="-100">
                  <p slot="content" className="">
                    El marcaje de los aceros de refuerzo antes de hacer una pasante, permite al momento de realizar el procediemiento no dañar los aceros.
                  </p>
                </div>
              </div>
              <div
                slot="container-start"
                className="parallax-bg -z-10 blur-lg"
                style={{
                  'background-image': 'url(./FerroscanPasante.jpg)',
                }}
                data-swiper-parallax="-23%"
              ></div>
            </div>
            <div>
              <img src="./FerroscanPasante.jpg" alt="" class="image-text-lado"/>
            </div>
          </div>
        </SwiperSlide>
        {/* Swiper 2 */}
        <SwiperSlide>
          <div className="grid grid-cols-2">
            <div>
              <div>
                <div className="title text-2xl sm:text-8xl font-bold text-LPSColor uppercase" data-swiper-parallax="-300">
                  {i18n?.BENTO_1_TITLE}
                </div>
                <div className="subtitle text-xl sm:text-4xl text-LPSColor" data-swiper-parallax="-200">
                  Para Patologias Estructurales
                </div>
                <div className="text text-sm sm:text-xl text-LPSColor " data-swiper-parallax="-100">
                  <p slot="content" className="">
                  Ferroscan es una herramienta no destructiva que permite evaluar de manera cuantitativa la “Salud Estructural” de los diferentes elementos de una estructura
                  </p>
                </div>
              </div>
              <div
                slot="container-start"
                className="parallax-bg -z-10 blur-lg"
                style={{
                  'background-image': 'url(./Hilti_Ferroscan.png)',
                }}
                data-swiper-parallax="-23%"
              ></div>
            </div>
            <div>
              <img src="./Hilti_Ferroscan.png" alt="" class="image-text-lado"/>
              <script>
                
              </script>
            </div>
          </div>
        </SwiperSlide>
        {/* Swiper 3 */}
        <SwiperSlide>
          <div className="grid grid-cols-2">
            <div>
              <div>
                <div className="title text-2xl sm:text-8xl font-bold text-LPSColor uppercase" data-swiper-parallax="-300">
                  {i18n?.BENTO_1_TITLE}
                </div>
                <div className="subtitle text-xl sm:text-4xl text-LPSColor" data-swiper-parallax="-200">
                  Para Informes Estructurales
                </div>
                <div className="text text-sm sm:text-xl text-LPSColor " data-swiper-parallax="-100">
                  <p slot="content" className="">
                  
                  </p>
                </div>
              </div>
              <div
                slot="container-start"
                className="parallax-bg -z-10 blur-lg"
                style={{
                  'background-image': 'url(./Hilti_Ferroscan_Informe.png)',
                }}
                data-swiper-parallax="-23%"
              ></div>
            </div>
            <div>
              <img src="./Hilti_Ferroscan_Informe.png" alt="" class="image-text-lado"/>
              <script>
                
              </script>
            </div>
          </div>
        </SwiperSlide>
        <div className="autoplay-progress z-10" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper >
      
    </>
  );
}

