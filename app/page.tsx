"use client";
import Image from "next/image";
import { Scissors, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function OnboardingPage() {
  return (
    <div className="flex justify-center items-center bg-white min-h-screen">
      {/* Phone Frame */}
      <div className="relative w-full md:w-[390px] h-screen md:h-[844px] bg-black md:rounded-[2.5rem] md:shadow-2xl overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hairstyle/marlon-schmeiski.jpg"
            alt="Barber"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent" />
        </div>

        {/* Content (bottom section) */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 space-y-4">
          <div>
            <h1 className="text-3xl font-bold text-white leading-snug">
              Discover the beauty in you today
            </h1>
            <p className="text-sm text-gray-200 mt-2">
              Discover the beauty within you and shine with confidence,
              elegance, and a style that’s uniquely yours.
            </p>
          </div>

          {/* CTA Card */}
          <Link href="services">
            <motion.div
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-between bg-black/50 backdrop-blur-md border border-gray-700 rounded-full px-4 py-3"
            >
              <div className="flex items-center space-x-2">
                <div className="bg-orange-500 text-white p-2.5 rounded-full">
                  <Scissors className="w-5 h-5" />
                </div>
                <span className="text-white font-medium">Get Started</span>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-300" />
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
}
