"use client";
import { Calendar as CalendarIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function AppointmentSummary({ selectedTime }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mt-6 flex items-center justify-between bg-gray-50 p-4 rounded-xl border"
    >
      <div className="flex items-center space-x-2 text-sm">
        <CalendarIcon className="w-5 h-5 text-gray-600" />
        <span>Wednesday, August 25</span>
      </div>
      <span className="text-sm font-medium text-gray-700">
        {selectedTime} - 12:30
      </span>
    </motion.div>
  );
}
