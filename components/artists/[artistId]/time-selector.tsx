"use client";
import { motion } from "framer-motion";

export default function TimeSelector({
  times,
  selectedTime,
  onSelectTime,
}: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mt-6"
    >
      <h2 className="text-base font-semibold text-gray-800">Time</h2>
      <div className="flex space-x-3 overflow-x-auto mt-3 pb-2 no-scrollbar">
        {times.map((t: string) => (
          <motion.div
            key={t}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => onSelectTime(t)}
            className={`px-5 py-2 rounded-full cursor-pointer transition ${
              selectedTime === t
                ? "bg-orange-500 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {t}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
