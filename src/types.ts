export type Photo = {
  id: string;
  url: string;
  title: string;
};

export interface FloatingObject {
  id: string;
  url: string;
  position: { x: number; y: number };
  speed: { x: number; y: number };
}

export type AnimationType = 'blur' | 'hue' | 'saturate' | 'brightness' | 'omgwtfbbq';