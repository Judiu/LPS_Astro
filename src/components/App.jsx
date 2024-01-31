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

import { getI18N } from "../i18n/"
const { currentLocale } = Astro
const i18n = getI18N({ currentLocale })

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
        modules={[Parallax, Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="h-screen rounded-2xl"
      >

        <SwiperSlide>
          <div
            slot="container-start"
            className="parallax-bg -z-10"
            style={{
              'background-image': 'url(./FerroscanPasante.jpg)',
            }}
            data-swiper-parallax="-23%"
          ></div>
          <div className="title text-2xl sm:text-8xl text-LPSColor " data-swiper-parallax="-300">
              {i18n?.BENTO_1_TITLE}
          </div>
          <div className="subtitle text-xl sm:text-4xl text-LPSColor" data-swiper-parallax="-200">
              Para Pasantes
          </div>
          <div className="text text-sm sm:text-xl text-LPSColor " data-swiper-parallax="-100">
          <p slot="content" className="">
            El marcaje de los aceros de refuerzo antes de hacer una pasante, permite al momento de realizar el procediemiento no dañar los aceros.
          </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            slot="container-start"
            className="parallax-bg -z-10 object-cover"
            style={{
              'background-image': 'url("./PlanoCAD.jpg")',
            }}
            data-swiper-parallax="-23%"
          ></div>
          <div className="title" data-swiper-parallax="-300">
            Slide 2
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
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
