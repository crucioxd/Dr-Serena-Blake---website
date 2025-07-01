export default function HeroSection() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F3F0E8]">
      {/* Responsive Navbar */}
      <div className="pt-4 px-4 pb-4 sm:pt-[50px] sm:pl-[50px] sm:pb-[40px]">
        <img
          src="/logo-transparent-png.png"
          alt="Logo"
          className="w-40 sm:w-[280px] h-auto"
        />
      </div>

      {/* Hero Content */}
      <div className="relative flex-1">
        {/* Responsive Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/wall.jpg"
            alt="Ocean waves"
            className="w-full mt-[-2rem] h-full object-cover object-center"
          />
        </div>

        {/* Text Content */}
        <div className="font-serif relative z-10 flex flex-col items-center justify-center h-full text-center text-white pt-16 pb-20 px-4 sm:mt-[90px]">
          <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-4 sm:mb-6">
            Psychological Care for
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-light mb-6 sm:mb-8">
            Healing, Growth, and Resilience
          </p>
          <p className="max-w-4xl text-sm sm:text-base md:text-lg text-white mb-6 sm:mb-8">
            Serving adults in Los Angeles and throughout California via
            in-person and secure telehealth sessions.
          </p>
          <div
            className="
              w-full max-w-xs sm:max-w-sm md:w-96
              h-14 sm:h-16 md:h-20
              bg-[#9BB7B7] 
              rounded-full
              flex 
              items-center 
              justify-center
              hover:bg-[#7FA0A0]
              transition-colors
              duration-300
              cursor-pointer
              mt-8 sm:mt-20
            "
          >
            <span
              className="
                text-white 
                font-light 
                uppercase 
                tracking-wider
                text-sm sm:text-base md:text-lg
              "
            >
              Schedule a Consultation
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
