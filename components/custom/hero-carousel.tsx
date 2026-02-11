'use client';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useRouter } from 'next/navigation';

export function HeroCarousel() {
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
    <div className="overflow-visible py-8 px-4 sm:px-5 md:px-6 max-w-[1200px] mx-auto min-h-[260px] sm:min-h-[320px] md:min-h-[340px]">
      <Swiper
        effect="coverflow"
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
        pagination
        navigation
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="!overflow-visible"
        style={{ paddingBottom: '2.5rem' }}
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            onClick={() => router.push(`/category/${index + 1}`)}
            className="!w-[260px] !h-[146px] sm:!w-[340px] sm:!h-[191px] md:!w-[420px] md:!h-[236px] lg:!w-[527px] lg:!h-[297px] rounded-xl shadow-[0_0_44px_0_#0000004D] cursor-pointer overflow-hidden"
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover aspect-video"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
