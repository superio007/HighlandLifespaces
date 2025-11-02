"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/* ----------------------------- Types ----------------------------- */
export type UnitStats = {
  carpetArea: string;
  superArea: string;
  balconyArea: string;
};

export type UnitItem = {
  label: string; // e.g., "2 BHK"
  image: string; // image URL
  downloadUrl?: string; // optional file to download
  stats: UnitStats; // numbers shown on left
};

export type PlanGroup = {
  label: string; // e.g., "Master plan"
  units: UnitItem[]; // 1/2/3 BHK options for this plan
};

export type FloorPlanData = {
  plans: PlanGroup[];
};

/* ------------------------- UI Subcomponent ------------------------ */
function Tabs({
  items,
  activeIndex,
  onChange,
}: {
  items: string[];
  activeIndex: number;
  onChange: (i: number) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
      {items.map((label, i) => {
        const active = i === activeIndex;
        return (
          <button
            key={label}
            onClick={() => onChange(i)}
            className={`relative px-3 py-2 hover:cursor-pointer text-lg md:text-xl transition-colors ${
              active ? "text-gray-900" : "text-gray-500 hover:text-gray-800"
            }`}
            aria-pressed={active}
          >
            <span>{label}</span>
            {active && (
              <span className="absolute -bottom-1 left-0 right-0 mx-auto h-0.5 w-8 bg-gray-900" />
            )}
          </button>
        );
      })}
    </div>
  );
}

/* --------------------------- Main Component --------------------------- */
function FloorPlanShowcase({
  data,
  className,
}: {
  data: FloorPlanData;
  className?: string;
}) {
  const [planIndex, setPlanIndex] = useState(0);
  const [unitIndex, setUnitIndex] = useState(0);

  const activePlan = data.plans[planIndex];
  const unit = activePlan.units[unitIndex];

  // keep unitIndex valid when the plan changes
  useEffect(() => {
    if (unitIndex > activePlan.units.length - 1) setUnitIndex(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [planIndex, activePlan.units.length]);

  const handleDownload = () => {
    if (!unit.downloadUrl) return;
    const a = document.createElement("a");
    a.href = unit.downloadUrl;
    a.download = unit.label.replace(/\s+/g, "_") + "_FloorPlan";
    a.click();
  };

  return (
    <section
      className={`w-full bg-[#F4F4F4] py-10 md:py-14 ${className ?? ""}`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Tabs row */}
        <div className="flex flex-wrap justify-center items-center gap-6 pb-6">
          <Tabs
            items={data.plans.map((p) => p.label)}
            activeIndex={planIndex}
            onChange={(i) => {
              setPlanIndex(i);
              setUnitIndex(0);
            }}
          />
          <Tabs
            items={activePlan.units.map((u) => u.label)}
            activeIndex={unitIndex}
            onChange={setUnitIndex}
          />
        </div>

        {/* Card layout */}
        <div className="grid grid-cols-1 gap-8 rounded-xl bg-white p-6 md:grid-cols-12 md:p-10">
          {/* Left info */}
          <div className="md:col-span-4">
            <div className="space-y-8">
              <div>
                <p className="text-[11px] tracking-[0.18em] text-gray-500 uppercase">
                  Carpet Area
                </p>
                <p className="mt-2 font-serif text-3xl md:text-4xl text-gray-900">
                  {unit.stats.carpetArea}
                </p>
                <div className="mt-4 h-px w-full bg-gray-200" />
              </div>

              <div>
                <p className="text-[11px] tracking-[0.18em] text-gray-500 uppercase">
                  Super Area
                </p>
                <p className="mt-2 font-serif text-3xl md:text-4xl text-gray-900">
                  {unit.stats.superArea}
                </p>
                <div className="mt-4 h-px w-full bg-gray-200" />
              </div>

              <div>
                <p className="text-[11px] tracking-[0.18em] text-gray-500 uppercase">
                  Balcony Area
                </p>
                <p className="mt-2 font-serif text-3xl md:text-4xl text-gray-900">
                  {unit.stats.balconyArea}
                </p>
              </div>

              <button
                onClick={handleDownload}
                disabled={!unit.downloadUrl}
                className="mt-4 inline-flex items-center justify-center rounded border border-gray-400 px-5 py-3 text-sm tracking-wide disabled:cursor-not-allowed disabled:opacity-50"
              >
                DOWNLOAD FLOOR PLAN
              </button>
            </div>
          </div>

          {/* Right image */}
          <div className="md:col-span-8">
            <div className="relative aspect-video w-full overflow-hidden rounded-md ring-1 ring-black/10">
              <Image
                src={unit.image}
                alt={`${activePlan.label} - ${unit.label}`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 66vw, 100vw"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Inline DATA ------------------------------ */
const DATA: FloorPlanData = {
  plans: [
    {
      label: "Master plan",
      units: [
        {
          label: "1 BHK",
          image: "https://ik.imagekit.io/jamlkxwow/image%2052.png",
          downloadUrl: "/files/1bhk-master.pdf",
          stats: {
            carpetArea: "58.35 Sq.Ft",
            superArea: "₹2.10 Cr",
            balconyArea: "72.00 Sqm",
          },
        },
        {
          label: "2 BHK",
          image: "https://ik.imagekit.io/jamlkxwow/image%2052.png",
          downloadUrl: "/files/2bhk-master.pdf",
          stats: {
            carpetArea: "89.23 – 89.45 Sq.Ft",
            superArea: "₹3.23 Cr",
            balconyArea: "110.39 Sqm",
          },
        },
        {
          label: "3 BHK",
          image: "https://ik.imagekit.io/jamlkxwow/image%2052.png",
          downloadUrl: "/files/3bhk-master.pdf",
          stats: {
            carpetArea: "124.00 Sq.Ft",
            superArea: "₹4.80 Cr",
            balconyArea: "140.50 Sqm",
          },
        },
      ],
    },
    {
      label: "Floor plan",
      units: [
        {
          label: "1 BHK",
          image: "https://ik.imagekit.io/jamlkxwow/image%2052.png",
          downloadUrl: "/files/1bhk-floor.pdf",
          stats: {
            carpetArea: "55.00 Sq.Ft",
            superArea: "₹1.95 Cr",
            balconyArea: "65.00 Sqm",
          },
        },
        {
          label: "2 BHK",
          image: "https://ik.imagekit.io/jamlkxwow/image%2052.png",
          downloadUrl: "/files/2bhk-floor.pdf",
          stats: {
            carpetArea: "92.10 Sq.Ft",
            superArea: "₹3.40 Cr",
            balconyArea: "112.00 Sqm",
          },
        },
        {
          label: "3 BHK",
          image: "https://ik.imagekit.io/jamlkxwow/image%2052.png",
          downloadUrl: "/files/3bhk-floor.pdf",
          stats: {
            carpetArea: "128.00 Sq.Ft",
            superArea: "₹5.10 Cr",
            balconyArea: "146.00 Sqm",
          },
        },
      ],
    },
  ],
};

/* -------------------------- Default Export (one file) -------------------------- */
// Use this default export anywhere in your app. Everything lives in this file.
export default function FloorPlan() {
  return (
    <>
      <div className="h-screen container mx-auto px-6 md:px-20 py-20">
        <FloorPlanShowcase data={DATA} />
      </div>
    </>
  );
}
