// app/components/SustainabilitySection.tsx
"use client";

import Image from "next/image";
import {
  Droplets,
  Sun,
  Fan,
  Wind,
  ShowerHead,
  Download,
  CircleSlash2,
} from "lucide-react";

type Feature = {
  icon: any;
  title: string;
  subtitle?: string;
};

type Doc = {
  badge: string;
  year: string;
  title: string;
  href?: string; // optional download link
};

const FEATURES: Feature[] = [
  { icon: <Droplets className="w-6 h-6" />, title: "Rainwater harvesting" },
  { icon: <Sun className="w-6 h-6" />, title: "Solar facilities" },
  {
    icon: <CircleSlash2 className="w-6 h-6" />,
    title: "High-efficiency HVAC systems",
  },
  {
    icon: <Wind className="w-6 h-6" />,
    title: "Natural ventilation",
    subtitle: "interior design",
  },
  {
    icon: <ShowerHead className="w-6 h-6" />,
    title: "Water-saving fixtures",
    subtitle: "and appliances",
  },
];

const DOCS: Doc[] = [
  { badge: "Certificate", year: "2024", title: "IGBC Net Zero Waste" },
  { badge: "Report", year: "2024", title: "Zero Waste + Energy Homes" },
  { badge: "Report", year: "2024", title: "Environmental Clearance" },
  { badge: "REPORT", year: "2024", title: "Zero Waste + Energy Homes" },
];

const SustainabilitySection = () => {
  return (
    <section className="w-full bg-white">
      <div className="container px-6 md:px-20 py-20 mx-auto ">
        {/* Overline */}
        <p className="text-center text-xs tracking-[0.2em] text-gray-500 uppercase">
          Sustainability
        </p>

        {/* Headline */}
        <h2 className="mt-4 text-center font-serif text-4xl md:text-6xl lg:text-7xl leading-tight text-gray-900">
          Built to respect the Planet
        </h2>

        {/* Main content */}
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Left: image block */}
          <div className="relative">
            {/* Background color slab for the look in your mock */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[60%] w-[88%] bg-teal-800" />
            <div className="relative z-10">
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src="https://ik.imagekit.io/jamlkxwow/Frame%202085663090.png"
                  alt="Green building with vertical gardens"
                  fill
                  className="object-cover"
                  priority={false}
                />
              </div>
            </div>
          </div>

          {/* Right: features list */}
          <div className="flex flex-col justify-center">
            <ul className="divide-y divide-gray-200">
              {FEATURES.map((f, i) => (
                <li key={i} className="flex items-center justify-between py-6">
                  <div className="flex items-center gap-6">
                    <div className="rounded-full border border-indigo-300 p-3 text-indigo-700">
                      {f.icon}
                    </div>
                    <div className="text-left">
                      <p className="text-gray-900">{f.title}</p>
                      {f.subtitle && (
                        <p className="text-gray-500">{f.subtitle}</p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Documents row */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {DOCS.map((d, i) => (
            <a
              key={i}
              href={d.href ?? "#"}
              className="group rounded-md bg-teal-50 px-5 py-4 ring-1 ring-teal-100 transition hover:bg-teal-100"
            >
              <div className="mb-4 flex items-center justify-between text-xs">
                <span className="rounded-sm bg-gray-200 px-2 py-1 uppercase tracking-wide text-gray-700">
                  {d.badge}
                </span>
                <span className="text-gray-600">{d.year}</span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gray-900">{d.title}</p>
                <Download className="h-5 w-5 text-gray-500 transition group-hover:translate-y-0.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
