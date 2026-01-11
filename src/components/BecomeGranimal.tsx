"use client";

import { useState } from "react";
import Image from "next/image";

export default function BecomeGranimal() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    city: "",
    country: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="become-granimal" className="relative z-20 py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-stretch">
          <div className="hidden lg:block relative rounded-2xl overflow-hidden">
            <Image
              src="/images/run.png"
              alt="Exercise"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-extrabold text-gray-900">
                BECOME A
              </h2>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-extrabold text-[#FF8D4D]">
                GRANIMAL
              </h2>
              <p className="text-gray-600 mt-3 text-base md:text-lg font-mono">
                Book a consultation with our experts now to get started
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="flex gap-2 mb-6">
                <div className="flex-1 h-1.5 bg-[#FF8D4D] rounded-full"></div>
                <div className="flex-1 h-1.5 bg-gray-200 rounded-full"></div>
                <div className="flex-1 h-1.5 bg-gray-200 rounded-full"></div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#FF8D4D] text-sm font-medium mb-1.5">
                      First Name*
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Enter your first name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#FF8D4D] focus:border-transparent bg-white text-gray-800 placeholder-gray-400 text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[#FF8D4D] text-sm font-medium mb-1.5">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Enter your Last name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#FF8D4D] focus:border-transparent bg-white text-gray-800 placeholder-gray-400 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#FF8D4D] text-sm font-medium mb-1.5">
                      Whatsapp Number*
                    </label>
                    <div className="flex">
                      <div className="flex items-center px-3 bg-white border border-r-0 border-gray-200 rounded-l-full gap-1.5">
                        <Image
                          src="/images/India.png"
                          alt="India"
                          width={24}
                          height={16}
                          className="w-6 h-4 object-contain"
                        />
                        <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Enter your whatsapp number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="flex-1 px-4 py-3 border border-gray-200 rounded-r-full focus:outline-none focus:ring-2 focus:ring-[#FF8D4D] focus:border-transparent bg-white text-gray-800 placeholder-gray-400 text-sm min-w-0"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#FF8D4D] text-sm font-medium mb-1.5">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your mail ID"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#FF8D4D] focus:border-transparent bg-white text-gray-800 placeholder-gray-400 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#FF8D4D] text-sm font-medium mb-1.5">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      placeholder="Enter your city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#FF8D4D] focus:border-transparent bg-white text-gray-800 placeholder-gray-400 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-[#FF8D4D] text-sm font-medium mb-1.5">
                      Country
                    </label>
                    <div className="relative">
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#FF8D4D] focus:border-transparent bg-white appearance-none cursor-pointer text-sm ${formData.country ? 'text-gray-800' : 'text-gray-400'}`}
                      >
                        <option value="" disabled className="text-gray-400">
                          Select Pain Area
                        </option>
                        <option value="india">India</option>
                        <option value="usa">USA</option>
                        <option value="uk">UK</option>
                        <option value="canada">Canada</option>
                        <option value="australia">Australia</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-xs md:text-sm text-gray-600 pt-2">
                  By clicking the button you agree to Granimals&apos;{" "}
                  <a href="#" className="text-[#FF8D4D] hover:underline">Terms & Conditions</a>
                </p>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 py-3 px-8 bg-[#FF8D4D] hover:bg-[#e67a3a] text-white font-semibold rounded-full transition-colors duration-200 text-sm"
                >
                  Submit
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
