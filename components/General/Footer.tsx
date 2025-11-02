"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { Globe, Mail, Phone, MoveRight } from "lucide-react";

import HighlandLifespacesLogo from "@/assets/HighlandLifespacesLogo.webp";
import facebooklogo from "@/assets/facebooklogo.svg";
import instagramlogo from "@/assets/instagramlogo.svg";
import twitterlogo from "@/assets/twitterlogo.svg";
import linkedinlogo from "@/assets/linkedinlogo.svg";
import LOGOLINES from "@/assets/LOGOLINES.svg";

type NewsletterForm = { email: string };

const Footer = () => {
  const { register, handleSubmit, reset } = useForm<NewsletterForm>();

  const onSubmit = (data: NewsletterForm) => {
    alert("Newsletter subscribed successfully!");
    console.log(data);
    reset();
  };

  return (
    <footer className="relative">
      <div className="container mx-auto">
        <div className="relative">
          <div className="grid bg-[#1c1b20] p-6 md:px-20 md:pt-12 grid-cols-1 gap-12 items-center justify-center md:grid-cols-12">
            {/* Left column */}
            <div className="md:col-span-5 space-y-6">
              <Image
                src={HighlandLifespacesLogo}
                alt="Highland Lifespaces Logo"
                width={200}
                height={200}
                priority
              />
              <p className="max-w-md text-sm leading-6 text-neutral-400">
                Explore how Highland Lifespaces can transform <br /> your
                residential, commercial, or industrial <br /> aspirations into
                reality.
              </p>

              <div>
                <h3 className="mb-4 text-sm font-semibold text-white uppercase tracking-wide">
                  Contact us
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-3">
                    <Globe color="#fff" size={16} />
                    <a
                      href="https://highlandlifespaces.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70"
                    >
                      highlandlifespaces.com
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail color="#fff" size={16} />
                    <a
                      href="mailto:marketing@highlandlifespaces.com"
                      className="text-white/70"
                    >
                      marketing@highlandlifespaces.com
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone color="#fff" size={16} />
                    <a href="tel:90720-90720" className="text-white/70">
                      90720-90720
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Middle column */}
            <div className="md:col-span-3 grid grid-cols-2 gap-8">
              <div>
                <h3 className="mb-4 text-sm font-semibold text-white uppercase tracking-wide">
                  Project
                </h3>
                <ul className="space-y-3 text-sm text-neutral-400">
                  <li>
                    <a className="text-white/70" href="#">
                      Residential
                    </a>
                  </li>
                  <li>
                    <a className="text-white/70" href="#">
                      Commercial
                    </a>
                  </li>
                  <li>
                    <a className="text-white/70" href="#">
                      Industrial
                    </a>
                  </li>
                  <li>
                    <a className="text-white/70" href="#">
                      Hospitality
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-sm font-semibold text-white uppercase tracking-wide">
                  Links
                </h3>
                <ul className="space-y-3 text-sm text-neutral-400">
                  <li>
                    <a className="text-white/70" href="#">
                      About us
                    </a>
                  </li>
                  <li>
                    <a className="text-white/70" href="#">
                      Insight Center
                    </a>
                  </li>
                  <li>
                    <a className="text-white/70" href="#">
                      Newsletter
                    </a>
                  </li>
                  <li>
                    <a className="text-white/70" href="#">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right column: Newsletter */}
            <div className="md:col-span-4 relative z-20">
              <div className="rounded-2xl bg-neutral-900/60 ring-1 ring-neutral-800 p-6">
                <h3 className="text-base font-semibold text-white">
                  Subscribe for our newsletters
                </h3>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                  <div className="flex overflow-hidden ring-1 ring-inset ring-neutral-800 focus-within:ring-neutral-600 rounded-md">
                    <input
                      {...register("email", { required: true })}
                      type="email"
                      placeholder="E-mail"
                      aria-label="E-mail"
                      className="flex-1 bg-[#34343C] px-4 py-3 text-sm text-neutral-200 placeholder-neutral-500 outline-none"
                      required
                    />
                    <button
                      type="submit"
                      className="grid place-items-center bg-[#34343C] px-4"
                      aria-label="Submit newsletter"
                    >
                      <MoveRight size={16} color="#fff" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Decorative lines */}
          <Image
            src={LOGOLINES}
            alt="Decorative lines"
            className="absolute right-0 bottom-0 z-10 pointer-events-none"
            width={320}
            height={120}
          />
        </div>

        {/* Bottom bar */}
        <div className="p-6 bg-[#232227] md:px-20 flex flex-col items-center justify-between gap-6 border-t border-neutral-800 pt-6 md:flex-row">
          <div className="flex items-center justify-center gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="grid place-items-center rounded-full ring-1 ring-neutral-800 hover:bg-neutral-800"
            >
              <Image
                src={instagramlogo}
                alt="Instagram"
                width={40}
                height={40}
              />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="grid place-items-center rounded-full ring-1 ring-neutral-800 hover:bg-neutral-800"
            >
              <Image src={facebooklogo} alt="Facebook" width={40} height={40} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="grid place-items-center rounded-full ring-1 ring-neutral-800 hover:bg-neutral-800"
            >
              <Image src={linkedinlogo} alt="LinkedIn" width={40} height={40} />
            </a>
            <a
              href="#"
              aria-label="X"
              className="grid place-items-center rounded-full ring-1 ring-neutral-800 hover:bg-neutral-800"
            >
              <Image
                src={twitterlogo}
                alt="X (Twitter)"
                width={40}
                height={40}
              />
            </a>
          </div>
          <p className="text-xs text-white/70">© 2025 — Copyright</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
