// src/app/components/Hero.tsx
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    <div className="relative h-screen">
      {/* Carrusel de fondo */}
      <div className="absolute inset-0">
        <Swiper
          pagination={{ clickable: true }}
          navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
          autoplay={{ delay: 5000 }}
          modules={[Pagination, Navigation, Autoplay]}
          className="h-full w-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-black/50 pointer-events-none" />
                <Image 
                  src={image.url} 
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="pointer-events-none"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navegación y contenido */}
      <div className="relative z-10 pointer-events-none flex flex-col justify-between h-full">
        <div className="container-section py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between text-white gap-4 sm:gap-0">
            <div className="font-bold text-xl sm:text-2xl pointer-events-auto">
              Empresa XYZ
            </div>
            
            <div className="flex space-x-4 sm:space-x-6 pointer-events-auto">
              <button
                onClick={() => scrollToSection('servicios')}
                className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors px-2"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('equipo')}
                className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors px-2"
              >
                Equipo
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors px-2"
              >
                Contacto
              </button>
            </div>
          </div>
        </div>

        {/* Texto principal responsivo */}
        <div className="flex-grow flex items-center justify-center text-center text-white px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              SOMOS LÍDERES EN SOLUCIONES ESTRATÉGICAS
            </h1>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Entregamos proyectos de seguridad integrados, en sectores donde es necesaria 
              la protección de infraestructura crítica de empresas y personas, 
              aseguramos su continuidad operacional.
            </p>
          </div>
        </div>

        {/* Controles de navegación */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default Hero;