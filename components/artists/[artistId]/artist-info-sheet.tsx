"use client"
import { motion } from "framer-motion";
import React from "react";
import ArtistInfo from "./artist-info";
import ArtistTabs from "./artist-tabs";

const ArtistInfoSheet = ({
  serviceId,
  artist,
}: {
  serviceId: string;
  artist: any;
}) => {
  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 20 }}
      className="absolute top-20 md:top-34 bottom-0 left-0 right-0 z-10 overflow-y-auto"
    >
      <div className="bg-white rounded-t-3xl mt-56 p-6">
        {/* Handle */}
        <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4" />

        {/* Artist Info */}
        <ArtistInfo artist={artist} />

        <ArtistTabs serviceId={serviceId} artist={artist} />
      </div>
    </motion.div>
  );
};

export default ArtistInfoSheet;
