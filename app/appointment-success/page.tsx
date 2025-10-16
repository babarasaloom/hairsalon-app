"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function AppointmentSuccessPage() {
  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      {/* Mobile Frame */}
      <div className="w-full md:w-[390px] h-screen md:h-[844px] bg-white flex flex-col items-center justify-center md:rounded-[2.5rem] md:shadow-2xl relative p-6">
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="mb-6"
        >
          <CheckCircle className="w-24 h-24 text-green-500" />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-gray-800 text-center"
        >
          Congratulations!
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 text-center mt-3 max-w-xs"
        >
          Your appointment has been successfully confirmed. We look forward to
          seeing you soon!
        </motion.p>

        {/* Actions */}
        <div className="mt-10 w-full flex flex-col gap-y-3">
          <Link href="/appointments">
            <motion.div
              whileTap={{ scale: 0.97 }}
              className="w-full bg-yellow-400 text-white text-center py-3 rounded-full font-medium text-lg shadow"
            >
              View Appointment
            </motion.div>
          </Link>

          <Link href="/services">
            <motion.div
              whileTap={{ scale: 0.97 }}
              className="w-full border border-gray-300 text-gray-600 text-center py-3 rounded-full font-medium text-lg"
            >
              Back to Home
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
}
