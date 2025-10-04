"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BookButton({ artistId }: { artistId: number }) {
  return (
    <div className="fixed md:absolute bottom-0 left-0 right-0 px-4 py-3 bg-white border-t shadow-lg z-20">
      <Link href={`/artists/${artistId}/confirm-appointment`}>
        <motion.div
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.02 }}
          className="w-full bg-orange-500 text-white text-center py-3 rounded-full font-medium text-lg shadow transition"
        >
          Book Now
        </motion.div>
      </Link>
    </div>
  );
}
