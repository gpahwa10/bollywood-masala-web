"use client";

import { Play, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FEATURED_VIDEOS: Array<{
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  videoCount?: number;
  isSelected?: boolean;
}> = [
  {
    id: 1,
    title: "Akshaye Khanna",
    category: "History, Drama",
    thumbnail: "/images/video-thumbnails/Image.png",
    videoCount: 1,
  },
  {
    id: 2,
    title: "Alia Bhatt",
    category: "Upcoming Movie Pralay",
    thumbnail: "/images/video-thumbnails/Image (1).png",
  },
  {
    id: 3,
    title: "Kapil Sharma",
    category: "Public Review",
    thumbnail: "/images/video-thumbnails/Image (2).png",
    videoCount: 5,
  },
  {
    id: 4,
    title: "Virat Kohli",
    category: "Virat Bios",
    thumbnail: "/images/video-thumbnails/Image (3).png",
  },
  {
    id: 5,
    title: "Aparshakti Khurana",
    category: "Closeup",
    thumbnail: "/images/video-thumbnails/Image (4).png",
    videoCount: 3,
  },
  {
    id: 6,
    title: "Sohum Shah",
    category: "SHOCKING comment",
    thumbnail: "/images/video-thumbnails/Image (5).png",
    videoCount: 2,
    isSelected: true,
  },
];

export default function FeaturedVideos() {
  return (
    <div className="min-w-0 overflow-hidden">
      <div className="flex flex-row items-center justify-between min-w-0 gap-4">
        <h2 className="text-xl sm:text-2xl font-bold text-black shrink-0">
          Featured videos
        </h2>
        <Link
          href="/"
          className="flex flex-row items-center gap-1 text-sm sm:text-base text-[#666666] hover:text-primary transition-colors shrink-0"
        >
          View All
          <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 text-primary shrink-0" />
        </Link>
      </div>
      <ul className="list-none p-0 m-0 flex flex-row flex-nowrap gap-3 sm:gap-4 mt-3 sm:mt-4 overflow-x-auto min-w-0 pb-1 mb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {FEATURED_VIDEOS.map((video) => (
          <li key={video.id} className="shrink-0">
            <FeaturedVideoCard
              title={video.title}
              category={video.category}
              thumbnail={video.thumbnail}
              videoCount={video.videoCount}
              isSelected={video.isSelected}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

type FeaturedVideoCardProps = {
  title: string;
  category: string;
  thumbnail: string;
  videoCount?: number;
  isSelected?: boolean;
};

function FeaturedVideoCard({
  title,
  category,
  thumbnail,
  videoCount,
  isSelected,
}: FeaturedVideoCardProps) {
  return (
    <article
      className={`
        relative w-[180px] sm:w-[200px] md:w-[240px] aspect-video rounded-xl overflow-hidden
        ${isSelected ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-[#EFEFEF]" : ""}
      `}
    >
      <Image
        src={thumbnail}
        alt=""
        fill
        className="object-cover"
        sizes="(max-width: 640px) 180px, (max-width: 768px) 200px, 240px"
      />
      {/* Bottom gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
        aria-hidden
      />
      {/* Video count badge - top left */}
      {videoCount != null && videoCount > 0 && (
        <div className="absolute left-2 top-2 flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 text-xs font-medium text-white">
          <Play className="h-3 w-3 fill-current" />
          <span>{videoCount} video</span>
        </div>
      )}
      {/* Text overlay - bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 p-3 text-white backdrop-blur-[16px] bg-[#0000001A]"
      >
        <p className="font-bold text-center text-sm sm:text-base leading-tight truncate">
          {title}
        </p>
        <p className="text-xs sm:text-sm text-white/80 text-center mt-0.5 truncate">
          {category}
        </p>
      </div>
    </article>
  );
}
