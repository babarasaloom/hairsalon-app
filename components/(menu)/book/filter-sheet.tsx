"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState, useEffect } from "react";

type FilterSheetProps = {
  open: boolean;
  onClose: () => void;
  filters: {
    priceRange: string;
    duration: string;
  };
  onApply: (filters: { priceRange: string; duration: string }) => void;
};

export default function FilterSheet({
  open,
  onClose,
  filters,
  onApply,
}: FilterSheetProps) {
  const [priceRange, setPriceRange] = useState(filters.priceRange);
  const [duration, setDuration] = useState(filters.duration);

  useEffect(() => {
    if (open) {
      setPriceRange(filters.priceRange);
      setDuration(filters.duration);
    }
  }, [open, filters]);

  const handleApply = () => {
    onApply({ priceRange, duration });
    onClose();
  };

  const handleClear = () => {
    setPriceRange("Any");
    setDuration("Any");
    onApply({ priceRange: "Any", duration: "Any" });
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/40 flex justify-center items-end z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="bg-white w-full md:w-[390px] rounded-t-3xl p-6 shadow-xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drag Handle */}
            <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4"></div>

            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleClear}
                  className="text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  Clear
                </button>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Price Range
              </h3>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                <option>Any</option>
                <option>$0 - $20</option>
                <option>$20 - $50</option>
                <option>$50+</option>
              </select>
            </div>

            {/* Duration */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Duration
              </h3>
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                <option>Any</option>
                <option>30 min</option>
                <option>45 min</option>
                <option>1 hr</option>
              </select>
            </div>

            {/* Apply Button */}
            <button
              onClick={handleApply}
              className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-yellow-500 to-yellow-400 shadow-md hover:from-yellow-600 hover:to-yellow-500 transition"
            >
              Apply Filters
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
