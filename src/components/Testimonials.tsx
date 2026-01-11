"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const videoTestimonials = [
  { id: 1, thumbnail: "/images/v1.png", name: "Aaryan Vadhan" },
  { id: 2, thumbnail: "/images/v2.png", name: "Debashish" },
  { id: 3, thumbnail: "/images/v3.png", name: "SRIKANT", subtitle: "ACL WARRIOR" },
  { id: 4, thumbnail: "/images/v4.png", name: "ANUJ KHARAT", subtitle: "ACL WARRIOR" },
];

const chatTestimonials = [
  { id: 1, image: "/images/c1.png" },
  { id: 2, image: "/images/c2.png" },
  { id: 3, image: "/images/c3.png" },
  { id: 4, image: "/images/c4.png" },
];

export default function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (chatScrollRef.current) {
      const scrollLeft = chatScrollRef.current.scrollLeft;
      const itemWidth = chatScrollRef.current.offsetWidth * 0.75;
      const newSlide = Math.round(scrollLeft / itemWidth);
      setActiveSlide(newSlide);
    }
  };

  const scrollToSlide = (index: number) => {
    if (chatScrollRef.current) {
      const itemWidth = chatScrollRef.current.offsetWidth * 0.75;
      chatScrollRef.current.scrollTo({
        left: index * itemWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-6 md:py-10 bg-white md:bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1">
          They came, they believed,{" "}
          <span className="text-[#FF8D4D]">they conquered their pain</span>
        </h2>
        <p className="text-[#2d2d2d] font-mono mb-4 md:mb-6 text-base">
          Hear it from the Granimals
        </p>

        <div className="md:hidden overflow-x-auto scrollbar-hide -mx-4 px-4 mb-4">
          <div className="flex gap-3" style={{ width: "max-content" }}>
            {videoTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="relative rounded-xl overflow-hidden bg-gray-100 group cursor-pointer shadow-md w-[45vw] flex-shrink-0"
              >
                <Image
                  src={testimonial.thumbnail}
                  alt={testimonial.name}
                  width={400}
                  height={500}
                  className="w-full h-auto object-contain"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-md">
                    <svg
                      className="w-4 h-4 text-gray-800 ml-0.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 right-2">
                  <span className="text-white text-xs font-semibold drop-shadow-lg block">
                    {testimonial.name}
                  </span>
                  {testimonial.subtitle && (
                    <span className="text-[#FF8D4D] text-[10px] font-semibold drop-shadow-lg block">
                      {testimonial.subtitle}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4 md:mb-6">
          {videoTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative rounded-xl overflow-hidden bg-gray-100 group cursor-pointer shadow-md hover:shadow-lg transition-shadow"
            >
              <Image
                src={testimonial.thumbnail}
                alt={testimonial.name}
                width={400}
                height={500}
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <svg
                    className="w-5 h-5 text-gray-800 ml-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-2 left-2 right-2">
                <span className="text-white text-sm font-semibold drop-shadow-lg block">
                  {testimonial.name}
                </span>
                {testimonial.subtitle && (
                  <span className="text-[#FF8D4D] text-xs font-semibold drop-shadow-lg block">
                    {testimonial.subtitle}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div
          ref={chatScrollRef}
          onScroll={handleScroll}
          className="md:hidden overflow-x-auto scrollbar-hide -mx-4 px-4 mb-4"
        >
          <div className="flex gap-3" style={{ width: "max-content" }}>
            {chatTestimonials.map((chat) => (
              <div
                key={chat.id}
                className="rounded-xl overflow-hidden bg-gray-900 shadow-md w-[75vw] flex-shrink-0"
              >
                <Image
                  src={chat.image}
                  alt="Chat testimonial"
                  width={400}
                  height={800}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 md:hidden mt-4">
          {chatTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                activeSlide === index ? "bg-[#3FB3F5]" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-3">
          {chatTestimonials.map((chat) => (
            <div
              key={chat.id}
              className="rounded-xl overflow-hidden bg-gray-900 shadow-md hover:shadow-lg transition-shadow"
            >
              <Image
                src={chat.image}
                alt="Chat testimonial"
                width={400}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
