"use client";
import { motion } from "framer-motion";

export default function DateSelector({
  dates,
  selectedDate,
  onSelectDate,
}: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mt-6"
    >
      <h2 className="text-base font-semibold text-gray-800">August 2025</h2>
      <div className="flex justify-between overflow-x-auto mt-3 pb-2 no-scrollbar">
        {dates.map((d: any) => (
          <motion.div
            key={d.date}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => onSelectDate(d.date)}
            className={`flex flex-col gap-y-2 items-center p-2 rounded-2xl cursor-pointer transition ${
              selectedDate === d.date
                ? "bg-orange-500 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            <span className="text-xs">{d.day}</span>
            <span
              className={`text-sm font-semibold p-1 ${
                selectedDate === d.date ? "bg-white text-black rounded-xl" : ""
              }`}
            >
              {d.date}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
