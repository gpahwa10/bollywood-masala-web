import React from "react";
import { ThumbsUp, Share2, Plus } from "lucide-react";
import Image from "next/image";

const LiveTvPage = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Main live video card */}
      <div className="bg-white rounded-[12px] border border-[#19191926] overflow-hidden">
        {/* Video placeholder */}
        <div className="relative w-full bg-black aspect-[16/9]">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-lg font-semibold">
              Live video placeholder
            </span>
          </div>
        </div>

      </div>

      {/* Video meta + actions */}

        {/* Live badge + title */}
        <div className="flex flex-row gap-2 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-[4px] bg-white px-3 py-1 text-xl font-semibold">
              <span className="h-2 w-2 rounded-full bg-[#DF3234]" />
              LIVE
            </span>
            <span className="text-xl font-medium lg:text-lg sm:text-base">
              Shraddha Kapoor, Sonakshi Sinha-Zaheer Iqbal, Suniel Shetty, Dhanush & others SPOTTED in city
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-medium text-[#DF3234]"
            >
              <ThumbsUp className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-medium text-[#666666]"
            >
              <Share2 className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Channel info + actions */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative h-16 w-16 rounded-full bg-white flex items-center justify-center text-white text-sm font-bold">
              <Image src="/images/logo.svg" alt="Bollywoodmasala" width={26} height={26} className="object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl text-[#191919]">
                Bollywoodmasala
              </span>
            </div>
          </div>

            <button
              type="button"
              style={{
                background:
                  "linear-gradient(96.15deg, #531416 9.79%, #DB3130 53.74%, #531416 97.69%)",
              }}
              className="inline-flex items-center gap-2 rounded-[8px] px-4 py-2 text-sm font-semibold text-white"
            >
              <Plus className="h-4 w-4" />
              Add to Watchlist
            </button>
         
        </div>
   
    </div>
  );
};

export default LiveTvPage;