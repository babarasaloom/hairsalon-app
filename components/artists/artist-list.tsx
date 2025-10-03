"use client";

import { motion, AnimatePresence } from "framer-motion";
import ArtistCard from "./artist-card";
import { Artist } from "@/definitions/artists";

type Props = {
  category: string;
  artists: Artist[];
};

export default function ArtistList({ category, artists }: Props) {
  const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence mode="wait">
      {artists.length > 0 ? (
        <motion.div
          variants={fadeVariants}
          key={artists.map((a) => a.id).join("-")}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mt-3 grid grid-cols-2 gap-3 no-scrollbar"
        >
          {artists.map((a: Artist) => (
            <ArtistCard key={a.id} artist={a} />
          ))}
        </motion.div>
      ) : (
        <motion.p
          key="empty"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="text-gray-500 text-sm text-center mt-10"
        >
          No artists found in {category}.
        </motion.p>
      )}
    </AnimatePresence>
  );
}
