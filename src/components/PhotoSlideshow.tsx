import React, { useState, useEffect } from 'react';
import type { Photo, AnimationType } from '../types';
import '../styles/animations.css';

const ANIMATIONS: AnimationType[] = ['blur', 'hue', 'saturate', 'brightness', 'omgwtfbbq'];

export const PhotoSlideshow: React.FC<{ photos: Photo[] }> = ({ photos }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [currentAnimation, setCurrentAnimation] = useState<AnimationType>('blur');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
      setCurrentAnimation(ANIMATIONS[Math.floor(Math.random() * ANIMATIONS.length)]);
    }, 3000);

    return () => clearInterval(timer);
  }, [photos.length]);

  const currentPhoto = photos[currentPhotoIndex];

  return (
    <div className="w-full h-full">
      <img
        src={currentPhoto.url}
        alt={currentPhoto.title}
        className={`w-full h-full object-cover ${currentAnimation}`}
      />
    </div>
  );
};