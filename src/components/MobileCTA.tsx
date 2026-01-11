"use client";

export default function MobileCTA() {
  const scrollToForm = () => {
    const formSection = document.getElementById("become-granimal");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#2D2D2D] px-6 py-5 lg:hidden">
      <p className="text-white text-xl font-bold mb-4">
        Consult our rehab advisor<br />today!
      </p>
      <button
        onClick={scrollToForm}
        className="w-full py-4 bg-[#FF8D4D] hover:bg-[#e67a3a] text-white font-semibold rounded-full transition-colors text-lg"
      >
        Book a physio consultation
      </button>
    </div>
  );
}
