import NetworkCard from "./network-card"

const DistributionNetwork = () => {
    const networks =[
        {
            image: "/images/networks/airtel_xstream.svg",
            name: "Airtel XStream"
        },
        {
            image: "/images/networks/channel-box.svg",
            name: "Channel Box"
        },
        {
            image: "/images/networks/cloud-tv.svg",
            name: "Cloud TV"
        },
        {
            image: "/images/networks/DistroTV.svg",
            name: "DistroTV"
        },
        {
            image: "/images/networks/free-tv.svg",
            name: "Free TV"
        },
        {
            image: "/images/networks/jio-tv-plus.svg",
            name: "Jio TV Plus"
        },
        {
            image: "/images/networks/jio-tv.svg",
            name: "Jio TV"
        },
        {
            image: "/images/networks/lg.svg",
            name: "LG"
        },
        {
            image: "/images/networks/Limex.svg",
            name: "Limex"
        },
        {
            image: "/images/networks/One-tv.svg",
            name: "One TV"
        },
        {
            image: "/images/networks/runr-tv.svg",
            name: "Runr TV"
        },
        {
            image: "/images/networks/Samsung.svg",
            name: "Samsung"
        },
        {
            image: "/images/networks/Sony.svg",
            name: "Sony"
        },
        {
            image: "/images/networks/swift-logo.svg",
            name: "Swift"
        },
        {
            image: "/images/networks/tata-play-binge.svg",
            name: "Tata Play Binge"
        },
        {
            image: "/images/networks/tata-play.svg",
            name: "Tata Play"
        },
        {
            image: "/images/networks/tcl.svg",
            name: "TCL"
        },
        {
            image: "/images/networks/vi-tv.svg",
            name: "VI TV"
        },
        {
            image: "/images/networks/VU-Logo.svg",
            name: "VU"
        },
        {
            image: "/images/networks/xiaomi.svg",
            name: "Xiaomi"
        },
    ];
    return (
        <div className="flex flex-col gap-2 bg-white rounded-lg p-4 sm:p-5 md:p-6 my-4 overflow-hidden">
            <h1 className="text-xl sm:text-2xl font-bold text-black">Global Distribution Network</h1>
            <h4 className="text-sm sm:text-base font-regular text-[#666666]">Over 500 Million Devices Worldwide</h4>
            <div className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-3 sm:gap-4">
                {
                    networks.map((network) => (
                        <NetworkCard key={network.name} image={network.image} name={network.name} />
                    ))
                }
            </div>
            <p className="text-sm sm:text-base font-regular text-[#666666]">Bollywoodmasala is also available on over 200 brands of smart TVs including Sony, LG, Samsung, Xiaomi, TCL, Vu, and many more. Catch us on your favorite OTT platforms and cable networks anytime, anywhere.</p>
        </div>
    )
}

export default DistributionNetwork