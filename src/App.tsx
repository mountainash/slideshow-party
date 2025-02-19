import React from 'react';
import { PhotoSlideshow } from './components/PhotoSlideshow';
import { FloatingObjects } from './components/FloatingObjects';
import type { Photo } from './types';

// This will be replaced with your JSON file
const SAMPLE_PHOTOS: Photo[] = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7',
    title: 'Party Lights',
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec',
    title: 'DJ Set',
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745',
    title: 'Dance Floor',
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745',
    title: 'Dance Floor',
  },
  {
    id: '5',
    url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745',
    title: 'Dance Floor',
  },
  {
    id: '6',
    url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745',
    title: 'Dance Floor',
  },
];

function App() {
  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden bg-black">
      <div className="relative z-0 inset-0 w-screen h-screen overflow-hidden">
        <PhotoSlideshow photos={SAMPLE_PHOTOS} />
      </div>
      {/* <div className="relative z-10 inset-0 w-screen h-screen overflow-hidden">
        <FloatingObjects />
      </div> */}
    </div>
  );
}

export default App;