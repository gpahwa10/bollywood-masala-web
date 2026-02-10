import Image from "next/image"
const CtaBanner = () => {
    return (
        <div
            className="w-full rounded-lg flex flex-row items-center justify-between px-10 py-16"
            style={{
                background: "linear-gradient(89.95deg, #191919 17.15%, rgba(127, 13, 13, 0.91) 41.25%, #191919 85.13%)",
            }}
        >
            <div className="flex flex-col gap-2">
                <span className="flex flex-row items-center text-2xl font-bold text-white gap-2">Stay connected on the go!<Image src="/images/logo.svg" alt="arrow-right" width={30} height={48} /></span>
                <p className="text-md/6 font-regular text-gray-300 max-w-full">Download the Bollywoodmasala app for real-time gossip & breaking news.</p>
            </div>
            <div className="flex flex-row items-center gap-2">
                <Image src="/images/app-store.svg" alt="app-store" width={140} height={100} />
                <Image src="/images/play-store.svg" alt="google-play" width={140} height={100} />
            </div>
        </div>
    )
}

export default CtaBanner 