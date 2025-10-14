"use client";
import ServiceCard from "@/components/(menu)/book/service-card";
import { services } from "@/constants/services";
import { motion } from "framer-motion";

export default function ArtistServices({
  artistId,
  selectedTime,
}: {
  artistId: string;
  selectedTime: string;
}) {
  const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const serviceList = services.slice(4);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      // className="mt-6 flex items-center justify-between bg-gray-100 p-4 rounded-xl"
      className="flex flex-col gap-4"
    >
      {serviceList.map((s) => (
        <motion.div
          key={s.id}
          variants={fadeVariants}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <ServiceCard artistId={artistId} service={s} />
        </motion.div>
      ))}
    </motion.div>
  );
}
