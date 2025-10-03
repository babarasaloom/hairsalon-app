"use client";

import { motion, AnimatePresence } from "framer-motion";
import ServiceCard from "@/components/(menu)/book/service-card";
import { Service } from "@/definitions/services";

type Props = {
  services: Service[];
};

export default function ServiceList({ services }: Props) {
  const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence mode="wait">
      {services.length > 0 ? (
        <motion.div
          key={services.map((s) => s.id).join("-")} // key ensures re-render animation on category change
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col gap-4"
        >
          {services.map((s) => (
            <motion.div
              key={s.id}
              variants={fadeVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <ServiceCard service={s} />
            </motion.div>
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
          No services found. Try adjusting your filters.
        </motion.p>
      )}
    </AnimatePresence>
  );
}
