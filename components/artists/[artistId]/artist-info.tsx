"use client";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function ArtistInfo({ artist }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex items-center justify-between"
    >
      <div>
        <h1 className="text-xl font-semibold">{artist.name}</h1>
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <Star className="w-4 h-4 text-yellow-500 mr-1" />
          <span className="font-medium">{artist.rating}</span>
          <span className="ml-1">({artist.reviews})</span>
          <span className="ml-2 text-orange-500 font-medium">
            {artist.salon}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
