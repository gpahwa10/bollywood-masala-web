import Image from "next/image"
    interface NetworkCardProps {
        image: string;
        name: string;
    }
    const NetworkCard = ({ image, name }: NetworkCardProps) => {
    return (
        <div className="flex flex-col w-full min-h-[90px] sm:min-h-[105px] md:h-[115px] gap-1 sm:gap-2 bg-[#F6F6F6] rounded-lg items-center justify-center p-2 sm:p-0">
            <Image
                src={image}
                alt={name}
                width={91}
                height={42}
                className="w-12 h-6 sm:w-16 sm:h-8 md:w-[91px] md:h-[42px] object-contain"
            />
           <h3 className="text-xs sm:text-sm md:text-base font-bold text-black text-center line-clamp-2">{name}</h3>
        </div>
    )
}

export default NetworkCard