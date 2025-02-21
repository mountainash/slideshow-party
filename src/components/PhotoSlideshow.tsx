import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

const cssEffects = ['blur', 'hue', 'saturate', 'brightness', 'omgwtfbbq'];

export const PhotoSlideshow: React.FC<{ photos: string[] }> = ({ photos }) => {

  const [currentEffect, setCurrentEffect] = useState('');

  const getRandomEffect = () => {
    const randomIndex = Math.floor(Math.random() * cssEffects.length);
    return cssEffects[randomIndex];
  };

  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      onSlideChange={() => {
        setCurrentEffect(getRandomEffect());
      }}
      className="w-full h-full flex items-center justify-center bg-black"
    >
      {photos.map((photo, index) => (
        <SwiperSlide key={index} className="flex items-center justify-center">
          <img
            src={photo}
            alt="Slidehowphoto"
            // loading="lazy"
            className={`block max-h-full max-w-full object-contain m-auto ${currentEffect}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};