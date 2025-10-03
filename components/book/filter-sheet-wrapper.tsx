"use client";

import { motion } from "framer-motion";
import FilterSheet from "@/components/(menu)/book/filter-sheet";

type Props = {
  open: boolean;
  onClose: () => void;
  filters: { priceRange: string; duration: string };
  setFilters: (filters: { priceRange: string; duration: string }) => void;
};

export default function FilterSheetWrapper({
  open,
  onClose,
  filters,
  setFilters,
}: Props) {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={open ? { y: 0 } : { y: "100%" }}
      transition={{ type: "tween", duration: 0.3 }}
      className="absolute bottom-0 left-0 right-0 z-50"
    >
      <FilterSheet
        open={open}
        onClose={onClose}
        filters={filters}
        onApply={setFilters}
      />
    </motion.div>
  );
}
