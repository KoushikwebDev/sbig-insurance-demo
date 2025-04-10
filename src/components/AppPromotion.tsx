// components/footer/AppPromotion.tsx

"use client"; // optional for App Router only

import Image from "next/image";

export default function AppPromotion() {
  return (
    <section className="bg-[#f5e6fc] py-10 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 items-center gap-8 text-center md:text-left">
        
        {/* Text & Store Badges */}
        <div>
          <h2 className="text-2xl font-bold">
            Access and manage all your{" "}
            <span className="text-[#af2dc0]">Insurance Needs</span> in one place,
            right at your <span className="text-[#af2dc0]">Fingertips.</span>
          </h2>
          <p className="mt-4 font-semibold">Download Our App</p>
          <div className="flex gap-4 mt-4 justify-center md:justify-start">
            <Image
              src="/playstorewebp.webp"
              alt="Download on the App Store"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            <Image
              src="/playstore.webp" 
              alt="Get it on Google Play"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>
        </div>

        {/* Phone Image */}
        <div className="flex justify-center">
          <Image
            src="/phoneimage.webp"
            alt="Mobile App Preview"
            width={200}
            height={288}
            className="h-72 w-auto"
            priority
          />
        </div>

        {/* QR Code & Rating */}
        <div className="text-center md:text-right">
          <p className="font-semibold mb-2">
            Scan and Download<br /> SBI General App
          </p>
          <Image
            src="/scanner-qr.jpg"
            alt="QR Code for App"
            width={128}
            height={128}
            className="mx-auto md:ml-auto h-32 w-auto"
          />
          <p className="text-2xl font-bold text-[#af2dc0] mt-2">4.5/5*</p>
        </div>
      </div>
    </section>
  );
}
