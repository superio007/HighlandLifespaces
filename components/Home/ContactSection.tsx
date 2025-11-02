// app/components/ContactSection.tsx
"use client";
import Image from "next/image";
import ContactForm, { ContactFormValues } from "./ContactForm";
import PropertyMark from "@/assets/PropertyMark.png";

export default function ContactSection() {

  return (
    <section className="relative w-full">
      {/* Map background */}
      <div className="relative h-screen w-full overflow-hidden">
        <Image
          src="https://ik.imagekit.io/jamlkxwow/image%2010502.png"
          alt="Contact Map"
          fill
        />
        {/* subtle overlay for readability */}
        <div className="absolute inset-0 bg-white/10" />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid h-full grid-cols-1 md:grid-cols-2 items-start md:items-center gap-8">
          {/* Left: Card with form */}
          <div className="bg-white/95 backdrop-blur-sm p-8 md:p-12 shadow-md max-w-xl">
            <h2 className="font-serif text-5xl md:text-6xl text-gray-900 mb-8">
              Contact us
            </h2>
            <ContactForm />
          </div>

          {/* Right: Marker + info card */}
          <div className="relative hidden md:block">
            {/* Pin */}
            <Image
              src={PropertyMark}
              alt="PropertyMark"
              className="w-[400px] absolute top-1/2 bottom-0 right-3"
            />

            {/* End info card */}
          </div>
        </div>
      </div>
    </section>
  );
}
