import Image from "next/image"
const LatestVideos = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold">Latest Videos</h1>
            <ul className="list-none p-0 m-0 space-y-4">
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
        <div className="flex flex-row gap-4">
            <div className="p-2 bg-white w-fit rounded-lg">
                <Image src="/images/film-card-image.png" alt="Latest Video" width={437} height={246} />
            </div>
            <div className="flex flex-col gap-2 mt-4">
                <span className="text-2xl font-bold">
                    The Raja Saab Movie Review | Is Prabhas Latest Film Worth Watching?
                </span>
                <span className="text-lg text-gray-500">Bollywoodmasala</span>
                <span className="flex flex-row gap-2 items-center text-gray-500">3 views <div className="w-2 h-2 bg-gray-200 rounded-full"></div> 21 hours ago</span>
            </div>
        </div>
    )
}

export default LatestVideos