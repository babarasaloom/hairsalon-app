"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Booking } from "@/definitions/booking";

type Props = {
  onClose: () => void;
  booking: Booking;
};

export default function RescheduleSheet({ onClose }: Props) {
  const [selectedDate, setSelectedDate] = useState("Aug 25");
  const [selectedTime, setSelectedTime] = useState("11:30");

  const dates = ["Aug 25", "Aug 26", "Aug 27", "Aug 28", "Aug 29"];
  const times = ["09:00", "10:30", "11:30", "13:00", "15:00", "16:30"];

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
          <h2 className="text-lg font-semibold">Reschedule</h2>
          <button onClick={onClose}>
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <h3 className="text-sm font-medium text-gray-700 mb-3">Select Date</h3>
        <div className="flex space-x-3 overflow-x-auto pb-2 mb-6">
          {dates.map((date) => (
            <button
              key={date}
              onClick={() => setSelectedDate(date)}
              className={`px-4 py-2 rounded-xl text-sm font-medium flex-shrink-0 ${
                selectedDate === date
                  ? "bg-yellow-400 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {date}
            </button>
          ))}
        </div>

        <h3 className="text-sm font-medium text-gray-700 mb-3">Select Time</h3>
        <div className="grid grid-cols-3 gap-3 mb-6">
          {times.map((time) => (
            <button
              key={time}
              onClick={() => setSelectedTime(time)}
              className={`py-2 rounded-xl text-sm font-medium ${
                selectedTime === time
                  ? "bg-yellow-400 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {time}
            </button>
          ))}
        </div>

        <motion.button
          whileTap={{ scale: 0.97 }}
          className="w-full bg-yellow-400 text-white font-medium py-3 rounded-full shadow"
          onClick={() => {
            onClose();
            alert(`Rescheduled to ${selectedDate} at ${selectedTime}`);
          }}
        >
          Confirm New Time
        </motion.button>
      </motion.div>
    </>
  );
}
