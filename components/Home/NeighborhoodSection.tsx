"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  GraduationCap,
  Hospital,
  Utensils,
  TreePine,
  TrainFront,
  ArrowRight,
  MapPin,
} from "lucide-react";

/** ---- Types ---- */
type CategoryKey = "schools" | "hospitals" | "restaurants" | "parks" | "rail";
type Marker = {
  id: string;
  cat: CategoryKey;
  /** position as % of the map image (0..100). Keeps it provider-agnostic. */
  x: number;
  y: number;
  label?: string;
};

type Data = {
  title: string;
  subtitle?: string;
  /** static map image (can be Mapbox/Google Static Maps) */
  mapImg: string;
  /** Optional Google Maps place link */
  googleMapsUrl?: string;
  /** project (main) pin */
  project: { x: number; y: number; name: string };
  /** circular radius in pixels (visual only) */
  radiusPx?: number;
  markers: Marker[];
};

const ICONS: Record<CategoryKey, any> = {
  schools: <GraduationCap className="h-5 w-5" />,
  hospitals: <Hospital className="h-5 w-5" />,
  restaurants: <Utensils className="h-5 w-5" />,
  parks: <TreePine className="h-5 w-5" />,
  rail: <TrainFront className="h-5 w-5" />,
};

/** ---- Demo DATA (replace with yours) ---- */
const DATA: Data = {
  title: "Explore your neighborhood",
  subtitle: "Location",
  mapImg: "https://ik.imagekit.io/jamlkxwow/image%20(23)%201.png", // placeholder
  googleMapsUrl: "https://maps.google.com/?q=Sector+117+Mohali",
  project: { x: 40, y: 44, name: "HIGHLAND MAYFIELD" },
  radiusPx: 520,
  markers: [
    { id: "s1", cat: "schools", x: 26, y: 56, label: "School A" },
    { id: "s2", cat: "schools", x: 28, y: 41, label: "School B" },
    { id: "s3", cat: "schools", x: 72, y: 65, label: "School C" },
    { id: "h1", cat: "hospitals", x: 61, y: 34, label: "Hospital" },
    { id: "r1", cat: "restaurants", x: 67, y: 58, label: "Cafe" },
    { id: "p1", cat: "parks", x: 54, y: 52, label: "Central Park" },
    { id: "rail1", cat: "rail", x: 83, y: 72, label: "Railway" },
  ],
};

/** ---- Pill button ---- */
function FilterItem({
  icon,
  label,
  active,
  onClick,
}: {
  icon: any;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center justify-between gap-3 rounded-md px-4 py-4 text-left ring-1 ring-gray-200 transition hover:bg-gray-50 ${
        active ? "bg-white shadow-sm" : "bg-white/70"
      }`}
    >
      <span className="flex items-center gap-3 text-gray-800">
        <span className="text-gray-700">{icon}</span>
        <span>{label}</span>
      </span>
    </button>
  );
}

/** ---- Marker pin (small) ---- */
function SmallPin({ color = "#e11d48" }: { color?: string }) {
  return (
    <span
      className="block h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full shadow"
      style={{ background: color }}
    />
  );
}

/** ---- Main Component ---- */
export default function NeighborhoodSection({ data = DATA }: { data?: Data }) {
  const [activeCat, setActiveCat] = useState<CategoryKey>("schools");

  const counts = useMemo(() => {
    const map = {
      schools: 0,
      hospitals: 0,
      restaurants: 0,
      parks: 0,
      rail: 0,
    } as Record<CategoryKey, number>;
    data.markers.forEach((m) => (map[m.cat] += 1));
    return map;
  }, [data.markers]);

  return (
    <section className="w-full bg-[#F4F4F4] py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Title */}
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
          {data.subtitle ?? "Location"}
        </p>
        <h2 className="mt-2 max-w-xl font-serif text-5xl md:text-6xl text-gray-900">
          {data.title}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-12">
          {/* Map */}
          <div className="relative md:col-span-9 rounded-xl overflow-hidden bg-white ring-1 ring-black/5">
            {/* Map image */}
            <div className="relative h-[560px] w-full">
              <Image
                src={data.mapImg}
                alt="Map"
                fill
                className="object-cover opacity-60"
                sizes="(min-width: 1024px) 70vw, 100vw"
                priority={false}
              />

              {/* radius circle (visual) */}
              <div
                className="pointer-events-none absolute rounded-full border-2 border-dotted border-gray-300/80"
                style={{
                  width: data.radiusPx ?? 520,
                  height: data.radiusPx ?? 520,
                  left: `calc(50% - ${(data.radiusPx ?? 520) / 2}px)`,
                  top: `calc(50% - ${(data.radiusPx ?? 520) / 2}px)`,
                }}
              />

              {/* Project block area */}
              <div
                className="absolute -translate-x-1/2 -translate-y-1/2 rounded bg-rose-300/35 border border-rose-400/70"
                style={{
                  left: `${data.project.x}%`,
                  top: `${data.project.y}%`,
                  width: 150,
                  height: 110,
                }}
              />

              {/* Project pin + label */}
              <div
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${data.project.x}%`,
                  top: `${data.project.y}%`,
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-800 text-white shadow">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span className="rounded bg-white px-3 py-1 text-xs font-semibold tracking-wide shadow">
                    {data.project.name}
                  </span>
                </div>
              </div>

              {/* Category markers */}
              {data.markers
                .filter((m) => m.cat === activeCat)
                .map((m) => (
                  <div
                    key={m.id}
                    className="absolute"
                    style={{ left: `${m.x}%`, top: `${m.y}%` }}
                    title={m.label}
                  >
                    <SmallPin />
                  </div>
                ))}

              {/* floating arrow (decorative) */}
              <div className="pointer-events-none absolute right-[18%] top-1/2 -translate-y-1/2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300/80 text-gray-700 shadow">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>

              {/* View in Google Maps */}
              {data.googleMapsUrl && (
                <div className="absolute left-1/2 bottom-6 -translate-x-1/2">
                  <a
                    href={data.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded bg-white px-4 py-2 text-sm shadow ring-1 ring-black/5 hover:bg-gray-50"
                  >
                    <Image
                      src="https://ik.imagekit.io/jamlkxwow/image%2010474.png"
                      alt="GMaps"
                      width={18}
                      height={18}
                    />
                    View in Google Maps
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Filters */}
          <aside className="md:col-span-3">
            <div className="sticky top-6 rounded-xl bg-white p-3 shadow ring-1 ring-black/5">
              <div className="max-h-[460px] space-y-3 overflow-y-auto pr-1">
                {(
                  [
                    ["schools", "Schools"],
                    ["hospitals", "Hospitals"],
                    ["restaurants", "Restaurants"],
                    ["parks", "Parks"],
                    ["rail", "Railway Station"],
                  ] as [CategoryKey, string][]
                ).map(([key, label]) => {
                  const active = activeCat === key;
                  return (
                    <FilterItem
                      key={key}
                      icon={ICONS[key]}
                      label={`${label} ${
                        counts[key] ? `(${counts[key]})` : ""
                      }`}
                      active={active}
                      onClick={() => setActiveCat(key)}
                    />
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
