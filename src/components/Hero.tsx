"use client";

import Image from "next/image";

const categories = [
  {
    icon: "/images/fitness-enthusiasts.svg",
    title: "Fitness",
    subtitle: "Enthusiasts",
  },
  {
    icon: "/images/working-professionals.svg",
    title: "Working",
    subtitle: "Professionals",
  },
  {
    icon: "/images/professional-athletes.svg",
    title: "Professional",
    subtitle: "Athletes",
  },
  {
    icon: "/images/anyone-with-pain.svg",
    title: "Anyone",
    subtitle: "with pain",
  },
];

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute -top-20 right-0 z-30 md:hidden">
        <Image
          src="/images/chakra-mobile.png"
          alt=""
          width={300}
          height={300}
          className="w-40 h-auto object-contain opacity-90"
        />
      </div>

      <div className="absolute -top-60 right-0 hidden md:block">
        <div className="relative">
          <Image
            src="/images/flag-group.png"
            alt=""
            width={1053}
            height={1844}
            className="w-96 md:w-[650px] lg:w-[780px] h-auto object-contain"
          />
          <Image
            src="/images/squats.png"
            alt="Person doing squats"
            width={600}
            height={600}
            className="absolute bottom-60 right-25 w-48 md:w-72 lg:w-96 h-auto object-contain rounded-2xl"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-14 md:pt-32">
        <div className="flex flex-col max-w-[320px] md:max-w-none">
          <p className="text-[#5FB758] text-xl md:text-2xl lg:text-3xl font-extrabold lg:font-bold">
            This Independence Day,
          </p>
          <h1 className="text-[#FF8D4D] text-4xl md:text-3xl lg:text-4xl font-extrabold lg:font-bold">
            declare your freedom <br className="hidden md:block" />
            from pain once and for all
          </h1>
          <p className="font-mono text-base md:text-lg">
            Get rid of your pain consulting best-in-class physiotherapists
          </p>

          <div className="flex items-start gap-4 md:gap-8 mt-6 md:mt-8 lg:font-light">
            <div className="text-left">
              <p className="text-[24px] md:text-[30px] font-bold lg:font-light font-poppins">
                <span className="text-[#FF8D4D]">50</span>
                <span className="text-[#5FB758]">+</span>
              </p>
              <p className="text-gray-700 text-[12px] md:text-[14px] font-mono">
                Countries
              </p>
            </div>
            <Image
              src="/images/divider.png"
              alt=""
              width={2}
              height={50}
              className="h-14 md:h-16 w-auto object-contain"
            />
            <div className="text-left">
              <p className="text-[24px] md:text-[30px] font-bold lg:font-light font-poppins">
                <span className="text-[#FF8D4D]">9000</span>
                <span className="text-[#5FB758]">+</span>
              </p>
              <p className="text-gray-700 text-[12px] md:text-[14px] font-mono">
                Patients all
                <br />
                over the world
              </p>
            </div>
            <Image
              src="/images/divider.png"
              alt=""
              width={2}
              height={50}
              className="h-14 md:h-16 w-auto object-contain"
            />
            <div className="text-left">
              <p className="text-[24px] md:text-[30px] font-bold lg:font-light font-poppins">
                <span className="text-[#FF8D4D]">95</span>
                <span className="text-[#5FB758]">%</span>
              </p>
              <p className="text-gray-700 text-[12px] md:text-[14px] font-mono">
                Success Rate
                <br />
                For Patients
              </p>
            </div>
          </div>

          <div className="relative md:hidden -mx-4">
            <Image
              src="/images/flag-mobile.png"
              alt=""
              width={600}
              height={1000}
              className="absolute -top-30 left-0 w-full object-cover z-0"
            />
            <Image
              src="/images/squats.png"
              alt="Person doing squats"
              width={600}
              height={700}
              className="relative z-10 w-[92%] mx-auto mt-5 h-auto object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 py-5 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold mb-2 md:mb-10">
            Who is this <span className="text-[#FF8D4D]">Treatment</span> for
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6 lg:gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex bg-white px-2 py-1 md:px-5 md:py-3 rounded-2xl items-center gap-2 lg:gap-4 shadow-[0px_4px_24px_0px_rgba(0,0,0,0.08)]"
              >
                <Image
                  src={category.icon}
                  alt={`${category.title} ${category.subtitle}`}
                  width={60}
                  height={60}
                  className="w-10 h-10 md:w-14 md:h-14 object-contain shrink-0"
                />
                <p className="text-sm md:text-base text-gray-700 font-mono font-semibold leading-tight">
                  {category.title}
                  <br />
                  {category.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
