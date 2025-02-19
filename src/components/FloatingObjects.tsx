import React, { useEffect, useRef, useState } from 'react';
import type { FloatingObject } from '../types';

// Function to generate random position within viewport
const getRandomPosition = () => ({
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight
});

// Function to generate random speed
const getRandomSpeed = (minSpeed = 0.5, maxSpeed = 2) => {
  const speed = minSpeed + Math.random() * (maxSpeed - minSpeed);
  return {
    x: (Math.random() - 0.5) * speed,
    y: (Math.random() - 0.5) * speed
  };
};

// Function to create a floating object
const createFloatingObject = (id: string): FloatingObject => ({
  id,
  url: 'https://i.imgur.com/i5HmRD2.png', // Replace with actual transparent PNG URL
  position: getRandomPosition(),
  speed: getRandomSpeed()
});

// Create initial objects
const INITIAL_OBJECTS = Array.from({ length: 5 }, (_, index) => 
  createFloatingObject(String(index + 1))
);

export function FloatingObjects() {
  const [objects, setObjects] = useState<FloatingObject[]>(INITIAL_OBJECTS);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const updatePositions = () => {
      setObjects(prevObjects =>
        prevObjects.map(obj => {
          const newX = obj.position.x + obj.speed.x;
          const newY = obj.position.y + obj.speed.y;

          // Bounce off edges
          const bounceX = newX <= 0 || newX >= window.innerWidth;
          const bounceY = newY <= 0 || newY >= window.innerHeight;

          return {
            ...obj,
            position: {
              x: bounceX ? Math.max(0, Math.min(newX, window.innerWidth)) : newX,
              y: bounceY ? Math.max(0, Math.min(newY, window.innerHeight)) : newY,
            },
            speed: {
              x: bounceX ? -obj.speed.x : obj.speed.x,
              y: bounceY ? -obj.speed.y : obj.speed.y,
            },
          };
        })
      );

      animationFrameRef.current = requestAnimationFrame(updatePositions);
    };

    animationFrameRef.current = requestAnimationFrame(updatePositions);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {objects.map(obj => (
        <img
          key={obj.id}
          src={obj.url}
          alt=""
          className="absolute w-16 h-16 object-contain"
          style={{
            transform: `translate(${obj.position.x}px, ${obj.position.y}px)`,
            transition: 'transform 0.05s linear',
          }}
        />
      ))}
    </div>
  );
}