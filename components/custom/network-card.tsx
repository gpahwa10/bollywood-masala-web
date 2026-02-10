import Image from "next/image"
    interface NetworkCardProps {
        image: string;
        name: string;
    }
    const NetworkCard = ({ image, name }: NetworkCardProps) => {
    return (
        <div className="flex flex-col w-full h-[105px] gap-2 bg-[#F6F6F6] rounded-lg items-center justify-center">
            <Image
                src={image}
                alt="network-card"
                width={91}
                height={42}
            />
           <h3 className="text-md font-bold text-black">{name}</h3>
        </div>
    )
}

export default NetworkCard