// app/page.tsx

import Image from "next/image";

export default function HomePage() {
  return (
    <main className="relative flex flex-col min-h-screen text-white overflow-hidden">
      {/* Background Image Container */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/Ancient_Egypt.png')" }}
      >
        {/* Optional: Add a subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Header Navigation */}
      <header className="relative z-10 w-full p-6 flex justify-between items-center">
        <div className="text-2xl font-serif font-bold text-[#4c4c8e]">
          LNKPR-AH
        </div>
        <nav className="flex items-center space-x-8 text-sm text-gray-300">
          <a href="#" className="hover:text-white transition-colors">
            Services
          </a>
          <a href="#" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Contact
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col flex-grow items-center justify-center text-center px-4 -mt-16">
        <h1 className="text-5xl font-bold text-[#4c4c8e] mb-8 drop-shadow-md">
          Discover the Future of Sound Engineering
        </h1>
        <div className="w-full max-w-4xl">
          <Image
            src="/studio.png"
            alt="Modern sound engineering studio"
            width={1024}
            height={576}
            className="rounded-lg shadow-2xl"
            priority // Load this image first as it's LCP
          />
                  </div>
      </div>
    </main>
  );
}