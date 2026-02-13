'use client';

import { useRef } from 'react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function HeroCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);

  const images = [
    '/images/categories/category-1.png',
    '/images/categories/category-2.png',
    '/images/categories/category-3.png',
    '/images/categories/category-4.png',
    '/images/categories/category-5.png',
    '/images/categories/category-6.png',
    '/images/categories/category-7.png',
    '/images/categories/category-8.png',
  ];
  const router = useRouter();
  return (
    <div className="relative overflow-visible py-8 px-4 sm:px-5 md:px-6 max-w-[1200px] mx-auto min-h-[260px] sm:min-h-[320px] md:min-h-[340px]">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        effect="coverflow"
        loop
        centeredSlides
        slidesPerView="auto"
        allowTouchMove={false}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 120,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="!overflow-visible"
        style={{ paddingBottom: '2.5rem' }}
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            onClick={() => router.push(`/category/${index + 1}`)}
            className="!w-[407px] !h-[297px] rounded-[12px] shadow-[0_0_44px_0_#0000004D] cursor-pointer overflow-hidden"
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-fill"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom nav buttons – change ChevronLeft/ChevronRight to your own icons */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-[calc(50%-203.5px)] top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white border-0 shadow-md text-gray-800 hover:bg-gray-50 transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-[calc(50%-203.5px)] top-1/2 translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white border-0 shadow-md text-gray-800 hover:bg-gray-50 transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
