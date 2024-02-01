import React from 'react';
import { Carousel } from '@material-tailwind/react';
import ldrp1 from './ldrp1.png';
import ldrp2 from './ldrp2.jpg';
import ldrp3 from './ldrp3.png';

function CarouselComponent() {
  return (
    <Carousel className="rounded-xl" autoplay autoplayInterval={1000} infinite>
      <img
        src={ldrp1}
        alt="Landscape with mountains and river"
        className="mt-10 object-cover rounded-xl w-full h-[40rem]"
      />
      <img
        src={ldrp2}
        alt="Sunset over a lake with trees"
        className="mt-10 object-cover rounded-xl w-full h-[40rem]"
      />
      <img
        src={ldrp3}
        alt="Colorful flowers in a garden"
        className="mt-10 object-cover rounded-xl w-full h-[40rem]"
      />
    </Carousel>
  );
}

export default CarouselComponent;
