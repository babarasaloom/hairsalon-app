"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Heart, Star, Calendar as CalendarIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function BookingDetailsPage() {
  const [selectedDate, setSelectedDate] = useState("15");
  const [selectedTime, setSelectedTime] = useState("11:30");
  const router = useRouter();

  const dates = [
    { day: "Sun", date: "12" },
    { day: "Mon", date: "13" },
    { day: "Tue", date: "14" },
    { day: "Wed", date: "15" },
    { day: "Thu", date: "16" },
    { day: "Fri", date: "17" },
    { day: "Sat", date: "18" },
  ];

  const times = ["10:30", "11:30", "12:30", "01:30", "02:30"];

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      <div className="relative w-full md:w-[390px] h-[844px] bg-white md:rounded-[2.5rem] md:shadow-2xl overflow-hidden">
        {/* Hero Section (background) */}
        <div className="fixed md:absolute top-0 left-0 right-0 h-90 md:h-110 z-0">
          <Image
            src="/images/hairstyling/jabari-timothy-2.jpg"
            alt="Barber"
            fill
            className="object-cover"
          />
          <button
            onClick={() => router.back()}
            className="absolute top-4 left-4 bg-white/90 p-2 rounded-full shadow"
          >
            <ArrowLeft className="w-5 h-5 text-gray-800" />
          </button>
          <button className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow">
            <Heart className="w-5 h-5 text-red-500" />
          </button>
        </div>

        {/* Scrollable Card (slides over hero) */}
        <div className="absolute top-20 md:top-34 bottom-0 left-0 right-0 z-10 overflow-y-auto">
          <div className="bg-white rounded-t-3xl mt-56 p-6">
            {/* Handle */}
            <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4" />

            {/* Artist Info */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-semibold">Richard Anderson</h1>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <Star className="w-4 h-4 text-yellow-500 mr-1" />
                  <span className="font-medium">4.7</span>
                  <span className="ml-1">(116)</span>
                  <span className="ml-2 text-orange-500 font-medium">
                    Pro Barber Shop
                  </span>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex space-x-3 mt-6">
              <button className="px-5 py-2 rounded-full bg-orange-500 text-white text-sm font-medium">
                Booking
              </button>
              <button className="px-5 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium">
                About
              </button>
              <button className="px-5 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium">
                Reviews
              </button>
            </div>

            {/* Dates */}
            <div className="mt-6">
              <h2 className="text-base font-semibold text-gray-800">
                August 2025
              </h2>
              <div className="flex space-x-3 overflow-x-auto mt-3 pb-2">
                {dates.map((d) => (
                  <motion.div
                    key={d.date}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedDate(d.date)}
                    className={`flex flex-col items-center px-3 py-2 rounded-2xl cursor-pointer ${
                      selectedDate === d.date
                        ? "bg-orange-500 text-white"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    <span className="text-xs">{d.day}</span>
                    <span className="font-semibold">{d.date}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Time Slots */}
            <div className="mt-6">
              <h2 className="text-base font-semibold text-gray-800">Time</h2>
              <div className="flex space-x-3 overflow-x-auto mt-3 pb-2">
                {times.map((t) => (
                  <motion.div
                    key={t}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedTime(t)}
                    className={`px-5 py-2 rounded-full cursor-pointer ${
                      selectedTime === t
                        ? "bg-orange-500 text-white"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {t}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Selected Appointment */}
            <div className="mt-6 flex items-center justify-between bg-gray-50 p-4 rounded-xl border">
              <div className="flex items-center space-x-2 text-sm">
                <CalendarIcon className="w-5 h-5 text-gray-600" />
                <span>Wednesday, August 25</span>
              </div>
              <span className="text-sm font-medium text-gray-700">
                {selectedTime} - 12:30
              </span>
            </div>

            {/* Add filler so it can scroll */}
            <div className="h-40 md:h-20" />
          </div>
        </div>

        {/* Fixed Book Button */}
        <div className="fixed md:absolute bottom-0 left-0 right-0 px-4 py-3 bg-white border-t shadow-lg z-20">
          <Link href="/services/1/providers/1/confirm-appointment">
            <motion.div
              whileTap={{ scale: 0.97 }}
              className="w-full bg-orange-500 text-white text-center py-3 rounded-full font-medium text-lg shadow"
            >
              Book Now
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
}
