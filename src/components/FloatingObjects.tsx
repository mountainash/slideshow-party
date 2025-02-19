import { useEffect, useRef, useState } from 'react';

// Function to generate random position within viewport
const getRandomPosition = () => ({
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight
});

const emojis = ['🎉', '🪩', '🕺', '🎈', '🎊', '🎶', '🎵', '🎤', '🎧', '🎼', '🎸', '🎷', '🥁', '🎺', '🎻', '🪕', '🪗', '🎫', '🎪', '🎭', '🎨', '🎬', '🎤', '🎥', '🎦', '🎟', '🎮', '🎯', '🎳', '🎰', '🎱', '🎲', '🎴', '🃏', '🀄', '🎨', '🖼', '🎭', '🎪', '🎤', '🎧', '🎼', '🎹', '🥁', '🎷', '🎺', '🎸', '🎻', '🪕', '🪗', '🎫', '🎟', '🎬', '🎥', '🎦', '🎧', '🎤', '🎼'];

// Function to generate random speed
const getRandomSpeed = (minSpeed = 0.5, maxSpeed = 2) => {
  const speed = minSpeed + Math.random() * (maxSpeed - minSpeed);
  return {
    x: (Math.random() - 0.5) * speed,
    y: (Math.random() - 0.5) * speed
  };
};

// Function to get random emojis
const getRandomEmojis = (count: number) => {
  const shuffled = [...emojis].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

// Function to create floating objects with emojis
const createFloatingObjects = () => {
  return getRandomEmojis(4).map((emoji, index) => ({
    id: `${index}-${emoji}`,
    emoji,
    position: getRandomPosition(),
    speed: getRandomSpeed()
  }));
};

export function FloatingObjects() {
  const [objects, setObjects] = useState(createFloatingObjects());
  const animationFrameRef = useRef<number>();

  // Update emojis every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setObjects(createFloatingObjects());
    }, 15000);

    return () => clearInterval(interval);
  }, []);

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
      {objects.map((obj) => (
        <div
          key={obj.id}
          className="absolute text-6xl hue"
          style={{
            transform: `scale(1.25) translate(${obj.position.x}px, ${obj.position.y}px)`,
            transition: 'transform 0.05s linear',
          }}
        >
          {obj.emoji}
        </div>
      ))}
    </div>
  );
}