// components/ContactForm.tsx
"use client";
import React from "react";
import { useForm } from "react-hook-form";

export type ContactFormValues = {
  name: string;
  phone: string;
  email: string;
  city: string;
  queryType: string;
};

type Props = {
  onSubmit?: (values: ContactFormValues) => void | Promise<void>;
};

const QUERY_TYPES = [
  "General Enquiry",
  "Request a Call Back",
  "Book a Site Visit",
  "Pricing",
  "Other",
];

const Input = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <label className="block">
    <span className="text-sm text-gray-700">{label}</span>
    {children}
    <span className="mt-1 block h-px w-full bg-gray-300" />
  </label>
);

export default function ContactForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      city: "",
      queryType: QUERY_TYPES[0],
    },
  });

  const submit = async (values: ContactFormValues) => {
    console.log("Contact form:", values);
    alert("Form submitted successfully!");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="space-y-8">
      <div className="grid grid-cols-1 gap-8">
        <Input label="Name">
          <input
            {...register("name", { required: "Name is required" })}
            className="block w-full bg-transparent outline-none py-2"
            placeholder="Your name"
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
          )}
        </Input>

        <div className="grid grid-cols-1 md:grid-cols-2 md:col-span-1 gap-8 md:gap-8">
          <Input label="Phone Number">
            <input
              {...register("phone", {
                required: "Phone is required",
                pattern: {
                  value: /^[0-9+\-\s()]{7,}$/,
                  message: "Enter a valid phone number",
                },
              })}
              className="block w-full bg-transparent outline-none py-2"
              placeholder="+91 98765 43210"
              aria-invalid={!!errors.phone}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-600">
                {errors.phone.message}
              </p>
            )}
          </Input>

          <Input label="Email ID">
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Enter a valid email",
                },
              })}
              className="block w-full bg-transparent outline-none py-2"
              placeholder="you@example.com"
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            )}
          </Input>
        </div>

        <Input label="City">
          <input
            {...register("city")}
            className="block w-full bg-transparent outline-none py-2"
            placeholder="Your city"
          />
        </Input>

        <Input label="Query Type">
          <select
            {...register("queryType")}
            className="block w-full bg-transparent outline-none py-2 appearance-none pr-6"
          >
            {QUERY_TYPES.map((q) => (
              <option key={q} value={q}>
                {q}
              </option>
            ))}
          </select>
        </Input>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="https://wa.me/919072090720?text=Hello%2C%20I'd%20like%20to%20know%20more%20about%20Highland%20Lifespaces"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center border border-gray-400 px-6 py-3 text-sm tracking-wide hover:bg-gray-50"
        >
          CONNECT ON WHATSAPP
        </a>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center hover:cursor-pointer bg-teal-800 text-white px-6 py-3 text-sm tracking-wide hover:bg-teal-900 disabled:opacity-60"
        >
          REQUEST A CALL BACK
        </button>
      </div>
    </form>
  );
}
