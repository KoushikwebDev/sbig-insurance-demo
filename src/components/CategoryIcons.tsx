"use client"; // Add this if you're using Next.js App Router (for client-side interactivity)

import { useState } from "react";
import Image from "next/image";

const categories = [
  { name: "Health", image: "/categoryIcons/health-logo.webp" },
  { name: "Car", image: "/categoryIcons/car-logo.webp" },
  { name: "Bike", image: "/categoryIcons/bike-logo.webp" },
  { name: "Cyber", image: "/categoryIcons/cyber-logo.webp" },
  { name: "Home", image: "/categoryIcons/home-logo.webp" },
  { name: "Travel", image: "/categoryIcons/travell-logo.webp" },
];

export default function CategoryIcons() {
  const [activeCategory, setActiveCategory] = useState("Health");

  const handleClick = (name: string) => {
    setActiveCategory(name);
    console.log("Selected Category:", name); // Optional: use this for tracking
  };

  return (
    <section className="flex justify-center space-x-6 mt-8">
      {categories.map(({ name, image }) => {
        const isActive = activeCategory === name;

        return (
          <button
            key={name}
            onClick={() => handleClick(name)}
            className="flex flex-col items-center text-center text-sm font-medium text-gray-700 focus:outline-none"
          >
            <div
              className={`w-14 h-14 flex items-center justify-center rounded-full shadow-md transition-all duration-200 ${
                isActive ? "border-2 border-purple-600" : "bg-white"
              }`}
            >
              <Image src={image} alt={name} width={24} height={24} />
            </div>
            <span className={isActive ? "text-purple-600" : ""}>{name}</span>
          </button>
        );
      })}
    </section>
  );
}
