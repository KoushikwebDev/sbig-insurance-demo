// components/footer/MiniAppBanner.tsx

"use client"; // Optional if you're using App Router

import Image from "next/image";

export default function MiniAppBanner() {
  return (
    <section className="bg-[#f5e6fc] py-6 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        
        {/* Text and Icon */}
        <div className="flex items-center gap-4">
          <Image
            src="/mobile-icon-sm.webp"
            alt="Mobile Icon"
            width={80}
            height={80}
            className="h-20 w-auto"
            priority
          />
          <h4 className="text-lg font-semibold">
            Buy, renew & claim your policy anytime, anywhere!
          </h4>
        </div>

        {/* Store Badges */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <Image
            src="/app-store-dark.webp"
            alt="Download on the App Store"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
          <Image
            src="/play-store-dark.webp"
            alt="Get it on Google Play"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </div>
      </div>
    </section>
  );
}
  