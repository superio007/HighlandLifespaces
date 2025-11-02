"use client";
import Image from "next/image";
import HeroBannerImg from "@/assets/HeroBanner.webp";
import BannerBuildingImg from "@/assets/BannerBuilding.webp";

type Stat = {
  key: string;
  value: string; // big text (e.g., "On-Going")
  caption: string; // small label (e.g., "PROJECT STATUS")
};

const stats: Stat[] = [
  { key: "status", value: "On-Going", caption: "PROJECT STATUS" },
  { key: "location", value: "Mohali", caption: "LOCATION" },
  { key: "price", value: "₹3.23 Cr", caption: "STARTING PRICE" },
  { key: "unit", value: "3bhk. Villas", caption: "UNIT TYPE" },
  { key: "completion", value: "20th December", caption: "COMPLETION" },
  { key: "area", value: "15 Acres", caption: "AREA" },
];

const HeroBanner = () => {
  return (
    <section className="relative md:h-screen h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <Image
        src={HeroBannerImg}
        alt="Hero Banner"
        fill
        priority
        className="object-cover object-center -z-10"
      />

      {/* Dark gradient overlay to improve contrast */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-black/20 via-black/30 to-black/70" />

      {/* Content (add your hero copy here) */}
      <div className="relative z-10 container mx-auto px-6 md:px-20 py-12 flex flex-col md:flex-row items-center justify-center w-full h-full">
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          <h1 className="text-3xl md:text-7xl text-white font-[YourSerif]">
            Highland Mayfield
          </h1>
          <p className="text-white text-md">
            Highland Mayfields embodies meticulous design and a commitment to{" "}
            <br />
            excellence. From the grand lobby to personalized services, every
            detail <br /> enhances your living experience. It's more than a
            residence-It's a symbol <br /> of refined, functional elegance
          </p>
          <button className="uppecase hover:cursor-pointer text-lg bg-[#005e5e] text-white py-3 px-12 w-max">
            Enquire Now
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src={BannerBuildingImg}
            alt="Banner Building"
            className="absolute -right-116 w-400 -top-32 z-0"
          />
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="absolute bottom-0 left-0 w-full z-50 px-4 sm:px-6 md:px-20 pb-4 sm:pb-6">
        <div className="mx-auto w-full rounded-none md:rounded-xl">
          {/* Wrapper enables horizontal scroll on mobile */}
          <div className="overflow-x-auto " style={{ scrollbarWidth: "none" }}>
            <ul
              className="
          flex sm:grid sm:w-full text-center
          sm:grid-cols-3 lg:grid-cols-6
          divide-y divide-white/10 sm:divide-y-0 lg:divide-x lg:divide-white/20
          min-w-[600px] sm:min-w-0
        "
            >
              {stats.map((s) => (
                <li key={s.key} className="px-6 sm:px-4 w-[50%] sm:w-auto">
                  <div className="flex flex-col items-center justify-center py-4 sm:py-5">
                    <span className="text-base sm:text-lg md:text-xl lg:text-2xl text-white whitespace-nowrap">
                      {s.value}
                    </span>
                    <span className="mt-1 sm:mt-2 text-[10px] md:text-xs tracking-[0.12em] text-white/60 uppercase whitespace-nowrap">
                      {s.caption}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
