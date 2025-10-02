"use client";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Booking } from "@/definitions/booking";

type Props = {
  onClose: () => void;
  booking: Booking;
};

export default function CancelSheet({ onClose, booking }: Props) {
  return (
    <>
      <motion.div
        className="absolute inset-0 bg-black/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 20, stiffness: 120 }}
        className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-xl p-6"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Cancel Appointment</h2>
          <button onClick={onClose}>
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <p className="text-sm text-gray-600 mb-6">
          Are you sure you want to cancel your appointment with{" "}
          <span className="font-medium">{booking.provider}</span> on{" "}
          <span className="font-medium">{booking.date}</span> at{" "}
          <span className="font-medium">{booking.time}</span>?
        </p>

        <div className="space-y-3">
          <motion.button
            whileTap={{ scale: 0.97 }}
            className="w-full bg-red-500 text-white font-medium py-3 rounded-full shadow"
            onClick={() => {
              onClose();
              alert("Appointment Cancelled");
            }}
          >
            Yes, Cancel Appointment
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.97 }}
            className="w-full bg-gray-100 text-gray-700 font-medium py-3 rounded-full shadow"
            onClick={onClose}
          >
            Keep Appointment
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}
