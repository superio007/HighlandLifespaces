// app/components/FAQSection.tsx
"use client";

import { useState } from "react";

type FAQ = {
  q: string;
  a: string;
};

const FAQS: FAQ[] = [
  {
    q: "Why standards do Highland Lifespaces adhere to when building Highland Mayfield?",
    a: "Highland Mayfield follows premium construction practices, sourcing high-grade materials and employing industry-certified methods to ensure durability, safety, and long-term value. Our design philosophy blends functionality, modern aesthetics, and sustainability to deliver homes that stand the test of time.",
  },
  {
    q: "How much does property in Highland Mayfield cost?",
    a: "Pricing varies by unit type, floor, and facing. Contact our sales team for current price sheets, offers, and flexible payment plans.",
  },
  {
    q: "What is the possession timeline for Highland Mayfield?",
    a: "Current phases are on schedule. Typical possession timelines range between 18–30 months depending on the tower and configuration.",
  },
  {
    q: "What are the benefits of investing in Highland Mayfield if I am an NRI?",
    a: "We offer NRI-friendly documentation, bank tie-ups, property management assistance, and high-yield rental potential in a fast-growing micro-market.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first open

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i)); // single-open behavior
  };

  return (
    <section className="w-full bg-white">
      <div className="mx-auto container px-6 md:px-20 py-20">
        {/* Overline */}
        <p className="text-center text-xs tracking-[0.2em] text-gray-500 uppercase">
          Project Progress
        </p>

        {/* Title */}
        <h2 className="mt-4 text-center font-serif text-4xl md:text-6xl lg:text-7xl leading-tight text-gray-900">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="mt-10 divide-y divide-gray-200">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="py-6">
                {/* Question row */}
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  className="group flex w-full items-center justify-between text-left"
                >
                  <span className="block text-lg md:text-xl text-gray-900">
                    {item.q}
                  </span>

                  {/* +/- icon */}
                  <span
                    className="ml-6 flex h-6 w-6 items-center justify-center text-gray-700"
                    aria-hidden="true"
                  >
                    {/* simple plus/minus using pseudo lines */}
                    <span className="relative block h-0.5 w-4 bg-gray-800">
                      {/* vertical bar for plus; hide when open */}
                      <span
                        className={`absolute left-1/2 top-1/2 h-4 w-0.5 -translate-x-1/2 -translate-y-1/2 bg-gray-800 transition-opacity ${
                          isOpen ? "opacity-0" : "opacity-100"
                        }`}
                      />
                    </span>
                  </span>
                </button>

                {/* Answer */}
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
                    isOpen ? "opacity-100 max-h-80" : "opacity-0 max-h-0"
                  }`}
                >
                  {/* Divider to mirror the mock when open */}
                  <div className="mt-4 h-px bg-gray-200" />
                  <p className="mt-4 pl-5 text-sm leading-6 text-gray-600 md:pl-8">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
