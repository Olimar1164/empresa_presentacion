// src/app/components/Gallery.tsx
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';

const Gallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      alt: "Bosque con luz natural"
    },
    {
      url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
      alt: "Paisaje montañoso"
    },
    {
      url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
      alt: "Lago en calma"
    }
  ];

  return (
    <div className="relative max-w-4xl mx-auto">
      <Swiper
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 5000 }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper h-[400px] rounded-lg"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image 
                src={image.url} 
                alt={image.alt}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;