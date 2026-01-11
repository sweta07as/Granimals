"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="relative w-full z-20 h-[140px] md:h-[160px] lg:h-[200px]">
      <Image
        src="/images/top-orange.png"
        alt=""
        fill
        className="object-cover object-bottom hidden md:block"
        priority
      />

      <Image
        src="/images/top-orange-mobile.png"
        alt=""
        fill
        className="object-cover object-bottom md:hidden"
        priority
      />

      <div className="absolute top-2 md:top-4 lg:top-4 left-2 md:left-8 lg:left-16 z-10 flex items-start gap-3 md:gap-4 lg:gap-6">
        <Image
          src="/images/badge-15off.png"
          alt="15% OFF on all our Rehab Program"
          width={254}
          height={368}
          className="w-30 h-auto md:w-36 lg:w-48 object-contain"
        />
        <div className="flex flex-col gap-0 mt-5 md:mt-5 lg:mt-5">
          <p className="text-[14px] md:text-xl lg:text-[30px] text-white font-medium leading-tight">
            on all our
          </p>
          <p className="text-[14px] md:text-2xl lg:text-[40px] text-white font-bold leading-tight">
            Rehab Program
          </p>
        </div>
      </div>

      <div className="absolute top-2 md:top-4 lg:top-6 right-2 md:right-4 lg:right-8 z-10">
        <Image
          src="/images/top-logo.png"
          alt="Granimals Logo"
          width={119}
          height={124}
          className="w-10 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
        />
      </div>
    </header>
  );
}
