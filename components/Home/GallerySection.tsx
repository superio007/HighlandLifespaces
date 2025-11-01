"use client";
import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const galleryData = {
  Exterior: [
    "https://ik.imagekit.io/jamlkxwow/Exterior1.jpg",
    "https://ik.imagekit.io/jamlkxwow/Exterior2.jpg",
    "https://ik.imagekit.io/jamlkxwow/Exterior3.jpg",
  ],
  Interior: [
    "https://ik.imagekit.io/jamlkxwow/Exterior2.jpg",
    "https://ik.imagekit.io/jamlkxwow/Exterior1.jpg",
    "https://ik.imagekit.io/jamlkxwow/Exterior3.jpg",
  ],
  VirtualTour: [
    "https://ik.imagekit.io/jamlkxwow/Exterior3.jpg",
    "https://ik.imagekit.io/jamlkxwow/Exterior2.jpg",
    "https://ik.imagekit.io/jamlkxwow/Exterior1.jpg",
  ],
};

const GallerySection = () => {
  const [activeTab, setActiveTab] =
    useState<keyof typeof galleryData>("Exterior");

  const handlePrev = () => {
    const keys = Object.keys(galleryData) as (keyof typeof galleryData)[];
    const currentIndex = keys.indexOf(activeTab);
    const prevTab = keys[(currentIndex - 1 + keys.length) % keys.length];
    setActiveTab(prevTab);
  };

  const handleNext = () => {
    const keys = Object.keys(galleryData) as (keyof typeof galleryData)[];
    const currentIndex = keys.indexOf(activeTab);
    const nextTab = keys[(currentIndex + 1) % keys.length];
    setActiveTab(nextTab);
  };

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Section heading */}
        <p className="uppercase tracking-[0.2em] text-gray-400 text-xs mb-2">
          Gallery
        </p>
        <h2 className="text-4xl md:text-6xl font-serif mb-10">
          Take a glance at our craft
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-10 mb-12 border-b border-white/10 pb-2">
          {Object.keys(galleryData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as keyof typeof galleryData)}
              className={`relative pb-1 text-lg transition-all ${
                activeTab === tab
                  ? "text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="md:col-span-2 relative aspect-video overflow-hidden rounded-lg">
            <Image
              src={galleryData[activeTab][0]}
              alt={`${activeTab} 1`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src={galleryData[activeTab][1]}
                alt={`${activeTab} 2`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src={galleryData[activeTab][2]}
                alt={`${activeTab} 3`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-center gap-4">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
