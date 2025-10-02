"use client";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  onReschedule: () => void;
  onCancel: () => void;
};

export default function ActionButtons({ onReschedule, onCancel }: Props) {
  return (
    <div className="mt-8 space-y-3">
      <motion.div
        whileTap={{ scale: 0.97 }}
        className="bg-yellow-400 rounded-full py-3 text-center font-medium text-white shadow cursor-pointer"
        onClick={onReschedule}
      >
        Reschedule
      </motion.div>

      <motion.div
        whileTap={{ scale: 0.97 }}
        className="bg-white border border-gray-300 rounded-full py-3 text-center font-medium text-gray-700 shadow cursor-pointer"
        onClick={onCancel}
      >
        Cancel Appointment
      </motion.div>

      <Link href="/services">
        <motion.div
          whileTap={{ scale: 0.97 }}
          className="bg-black rounded-full py-3 text-center font-medium text-white shadow"
        >
          Book Another Service
        </motion.div>
      </Link>
    </div>
  );
}
