"use client";

import { motion } from "framer-motion";
import FeaturedOffer from "@/components/(menu)/book/featured-offer";

export default function FeaturedOfferWrapper() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
      className="mb-4"
    >
      <FeaturedOffer />
    </motion.div>
  );
}
