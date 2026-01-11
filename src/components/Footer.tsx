"use client";

import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="h-[2px] bg-[#FF8D4D] mx-4 md:hidden"></div>

      <div className=" px-4 py-4 md:py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start lg:items-center justify-between gap-8 lg:gap-4">
            <div className="flex items-end gap-2">
              <Image
                src="/images/bottom-logo.png"
                alt="Granimals"
                width={64}
                height={64}
                className="w-8 h-8 md:w-12 md:h-12 object-contain"
              />
              <span className="font-extrabold text-[#FF8D4D] text-2xl lg:text-4xl">
                GRANIMALS
              </span>
            </div>

            <div className="flex items-center gap-10 lg:gap-4">
              <a
                href="#"
                className="w-8 h-8 bg-[#FF8D4D] rounded-md flex items-center justify-center hover:bg-[#e67a3a] transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-[#FF8D4D] rounded-md flex items-center justify-center hover:bg-[#e67a3a] transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-[#FF8D4D] rounded-md flex items-center justify-center hover:bg-[#e67a3a] transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
