"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Amenity = {
  key: string;
  label: string;
  img: string;
  icon: string;
};

const amenities: Amenity[] = [
  {
    key: "clubhouse",
    label: "Clubhouse",
    img: "https://ik.imagekit.io/jamlkxwow/70ce0051ff1660b4fd019ba8e1247b6b8ee809d0%20(1).png",
    icon: "https://ik.imagekit.io/jamlkxwow/Vector.png",
  },
  {
    key: "sports",
    label: "Sports Hub",
    img: "https://ik.imagekit.io/jamlkxwow/17359631cb338533bb41630e1116ad9558bb37aa%20(1).jpg",
    icon: "https://ik.imagekit.io/jamlkxwow/Frame%202085662979.png",
  },
  {
    key: "ballroom",
    label: "Ballroom",
    img: "https://ik.imagekit.io/jamlkxwow/70ce0051ff1660b4fd019ba8e1247b6b8ee809d0%20(1).png",
    icon: "https://ik.imagekit.io/jamlkxwow/Vector%20(1).png",
  },
  {
    key: "cowork",
    label: "Co-working Space",
    img: "https://ik.imagekit.io/jamlkxwow/70ce0051ff1660b4fd019ba8e1247b6b8ee809d0%20(1).png",
    icon: "https://ik.imagekit.io/jamlkxwow/Vector%20(2).png",
  },
  {
    key: "kids",
    label: "Kids Play Area",
    img: "https://ik.imagekit.io/jamlkxwow/17359631cb338533bb41630e1116ad9558bb37aa%20(1).jpg",
    icon: "https://ik.imagekit.io/jamlkxwow/Frame%202085662980.png",
  },
  {
    key: "fitness",
    label: "Fitness Centre",
    img: "https://ik.imagekit.io/jamlkxwow/70ce0051ff1660b4fd019ba8e1247b6b8ee809d0%20(1).png",
    icon: "https://ik.imagekit.io/jamlkxwow/Frame%202085662979%20(1).png",
  },
  {
    key: "hostings",
    label: "Hostings",
    img: "https://ik.imagekit.io/jamlkxwow/70ce0051ff1660b4fd019ba8e1247b6b8ee809d0%20(1).png",
    icon: "https://ik.imagekit.io/jamlkxwow/Group.png",
  },
  {
    key: "pool",
    label: "Pools & Leisure",
    img: "https://ik.imagekit.io/jamlkxwow/17359631cb338533bb41630e1116ad9558bb37aa%20(1).jpg",
    icon: "https://ik.imagekit.io/jamlkxwow/Vector%20(3).png",
  },
];

export default function AmenitiesShowcase() {
  const [active, setActive] = useState<Amenity>(amenities[0]);
  const [prev, setPrev] = useState<Amenity | null>(null);
  const [fading, setFading] = useState(false);

  const changeAmenity = (a: Amenity) => {
    if (a.key === active.key) return;
    setPrev(active);
    setActive(a);
    setFading(true);
  };

  useEffect(() => {
    if (!fading) return;
    const t = setTimeout(() => setFading(false), 500);
    return () => clearTimeout(t);
  }, [fading]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background images */}
      <div className="absolute inset-0">
        <Image
          key={active.img}
          src={active.img}
          alt={active.label}
          fill
          priority
          className="object-cover transition-opacity duration-500"
          sizes="100vw"
        />
        {prev && fading && (
          <Image
            key={prev.img + "-prev"}
            src={prev.img}
            alt={prev.label}
            fill
            className="object-cover opacity-0 transition-opacity duration-500"
            sizes="100vw"
          />
        )}
      </div>

      {/* Amenity bar (full width) */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="flex justify-center bg-black/30 backdrop-blur-md">
          {/* Scrollable wrapper */}
          <div
            className="w-full overflow-x-auto scrollbar-none"
            style={{ scrollbarWidth: "none" }}
          >
            <ul
              className="
          flex sm:grid sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8
          divide-x divide-white/20 text-center
          min-w-[600px] sm:min-w-0
        "
            >
              {amenities.map((a) => (
                <li key={a.key} className=" w-full sm:w-auto">
                  <button
                    onClick={() => changeAmenity(a)}
                    className={`flex flex-col items-center hover:cursor-pointer justify-center gap-2 py-4 sm:py-5 w-full transition-all duration-200
                ${
                  a.key === active.key
                    ? "text-white scale-105"
                    : "text-white/70 hover:text-white"
                }`}
                  >
                    <Image
                      src={a.icon}
                      alt={a.label}
                      width={26}
                      height={26}
                      className="object-contain"
                    />
                    <span className="text-xs sm:text-sm whitespace-nowrap">
                      {a.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
