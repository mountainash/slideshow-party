import { PhotoSlideshow } from './components/PhotoSlideshow';
import { FloatingObjects } from './components/FloatingObjects';
import { photos } from './../photos';

function App() {
  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden bg-black">
      <div className="relative z-0 inset-0 w-screen h-screen overflow-hidden">
        <PhotoSlideshow photos={photos} />
      </div>
      <div className="relative z-10 inset-0 w-screen h-screen overflow-hidden">
        <FloatingObjects />
      </div>
    </div>
  );
}

export default App;