"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedOffer() {
  return (
    <div className="relative mb-6 z-1">
      <Image
        src="/images/hairstyling/good-faces.jpg"
        alt="Featured Service"
        width={400}
        height={200}
        className="rounded-2xl object-cover w-full h-40"
      />
      <div className="absolute inset-0 bg-black/40 rounded-2xl flex flex-col justify-center p-4 text-white">
        <h2 className="font-bold text-lg">Special Offer</h2>
        <p className="text-sm">Get 20% off coloring this week</p>
        <Link href="/services/2">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="mt-3 bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold shadow"
          >
            Book Now →
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
