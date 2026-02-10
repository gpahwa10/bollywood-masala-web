import Image from "next/image"
const LatestVideos = () => {
    return (
        <div className="min-w-0 overflow-hidden">
            <h1 className="text-xl sm:text-2xl font-bold">Latest Videos</h1>
            <ul className="list-none p-0 m-0 space-y-3 sm:space-y-4 mt-3 sm:mt-4">
                {Array.from({ length: 5 }, (_, i) => (
                    <li key={i}>
                        <LatestVideoCard />
                    </li>
                ))}
            </ul>
        </div>
    )
}

const LatestVideoCard = () => {
    return (
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 min-w-0">
            <div className="p-2 bg-white w-full sm:w-fit rounded-lg shrink-0 overflow-hidden">
                <div className="relative w-full aspect-video sm:w-[200px] md:w-[280px] lg:w-[320px] max-w-full">
                    <Image src="/images/film-card-image.png" alt="Latest Video" width={437} height={246} className="w-full h-full object-cover" />
                </div>
            </div>
            <div className="flex flex-col gap-1.5 sm:gap-2 mt-0 sm:mt-4 min-w-0 flex-1">
                <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold line-clamp-2 sm:line-clamp-3">
                    The Raja Saab Movie Review | Is Prabhas Latest Film Worth Watching?
                </span>
                <span className="text-sm sm:text-base md:text-lg text-gray-500">Bollywoodmasala</span>
                <span className="flex flex-row flex-wrap gap-2 items-center text-gray-500 text-sm sm:text-base">
                    3 views <span className="w-2 h-2 bg-gray-200 rounded-full shrink-0" aria-hidden /> 21 hours ago
                </span>
            </div>
        </div>
    )
}

export default LatestVideos