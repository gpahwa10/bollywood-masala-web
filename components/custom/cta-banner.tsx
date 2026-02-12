import Image from "next/image";

const CtaBanner = () => {
  return (
    <div
      className="w-full rounded-lg flex flex-col lg:flex-row items-center justify-between gap-6 px-[60px] py-[42px]"
      style={{
        background:
          "linear-gradient(89.95deg, #191919 17.15%, rgba(127, 13, 13, 0.91) 41.25%, #191919 85.13%)",
      }}
    >
      {/* TEXT */}
      <div className="flex flex-col gap-2 text-center lg:text-left order-1">
        <span className="flex flex-row items-center justify-center lg:justify-start text-lg sm:text-xl md:text-2xl font-bold text-white gap-2">
          Stay connected on the go!
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={24}
            height={38}
            className="sm:w-[30px] sm:h-[48px] shrink-0"
          />
        </span>

        <p className="text-sm sm:text-base text-[#999999] max-w-full">
          Download the Bollywoodmasala app for real-time gossip & breaking news.
        </p>
      </div>

      {/* BUTTONS */}
      <div className="flex flex-row items-center justify-center gap-2 shrink-0 order-2">
        <Image
          src="/images/app-store.svg"
          alt="app-store"
          width={120}
          height={86}
          className="w-[100px] h-auto sm:w-[120px] md:w-[140px]"
        />
        <Image
          src="/images/play-store.svg"
          alt="google-play"
          width={120}
          height={86}
          className="w-[100px] h-auto sm:w-[120px] md:w-[140px]"
        />
      </div>
    </div>
  );
};

export default CtaBanner;
