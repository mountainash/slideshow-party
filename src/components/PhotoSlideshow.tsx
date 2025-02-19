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
      className="w-full h-full"
    >
      {photos.map((photo, index) => (
        <SwiperSlide key={index}>
          <img
            src={photo}
            alt="Slidehowphoto"
            className={`w-full h-full object-cover transition-transform duration-300 ${currentEffect}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};