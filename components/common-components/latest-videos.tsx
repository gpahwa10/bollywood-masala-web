"use client";

import { Play, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LATEST_VIDEOS: Array<{
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

    export default function LatestVideos() {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black">
          Latest videos
        </h2>

        <Link
          href="/"
          className="flex items-center gap-1 text-sm sm:text-base text-[#666666] hover:text-primary transition-colors"
        >
          View All
          <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
        </Link>
      </div>

      <ul
        className="list-none p-0 m-0 mt-4 mb-6 flex flex-nowrap gap-3 overflow-x-auto pb-1 min-w-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {LATEST_VIDEOS.map((video) => (
          <li key={video.id} className="shrink-0 min-w-[160px] sm:min-w-[180px] md:min-w-[200px]">
            <LatestVideoCard {...video} />
          </li>
        ))}
      </ul>
    </div>
  );
}


type LatestVideoCardProps = {
  title: string;
  category: string;
  thumbnail: string;
  videoCount?: number;
  isSelected?: boolean;
};

function LatestVideoCard({
  title,
  category,
  thumbnail,
  videoCount,
  isSelected,
}: LatestVideoCardProps) {
  return (
    <article
      className={`
        relative w-full aspect-video rounded-xl overflow-hidden
        ${isSelected ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-[#EFEFEF]" : ""}
      `}
    >
      <Image
        src={thumbnail}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 50vw,
               (max-width: 1024px) 33vw,
               20vw"
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Badge */}
      {videoCount != null && videoCount > 0 && (
        <div className="absolute left-2 top-2 flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 text-[10px] sm:text-xs font-medium text-white">
          <Play className="h-3 w-3 fill-current" />
          <span>
            {videoCount} {videoCount > 1 ? "videos" : "video"}
          </span>
        </div>
      )}

      {/* Text */}
      <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 text-white backdrop-blur-md bg-black/20">
        <p className="font-semibold text-center text-xs sm:text-sm md:text-base truncate">
          {title}
        </p>
        <p className="text-[11px] sm:text-xs md:text-sm text-white/80 text-center truncate">
          {category}
        </p>
      </div>
    </article>
  );
}

