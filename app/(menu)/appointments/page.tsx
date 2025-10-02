"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Bell, Calendar, Heart, Home, Search, User2 } from "lucide-react";
import { useState } from "react";
import { Booking } from "@/definitions/booking";

const mockUpcoming: Booking[] = [
  {
    service: "Men’s Haircut",
    provider: "Richard Anderson",
    date: "Wed, Aug 25",
    time: "11:30 - 12:30",
    price: "$25",
    location: "123 Main Street, Cape Town",
    image: "/images/hairstyling/joao-paulo-de-souza-oliveira.jpg",
  },
];

const mockCancelled: Booking[] = [
  {
    service: "Beard Trim",
    provider: "Alex Johnson",
    date: "Tue, Aug 20",
    time: "09:00 - 09:30",
    price: "$15",
    location: "123 Main Street, Cape Town",
    image: "/images/hairstyling/justin-essah.jpg",
  },
];

const mockHistory: Booking[] = [
  {
    service: "Women’s Haircut",
    provider: "Jessica Felicio",
    date: "Fri, Aug 15",
    time: "14:00 - 15:00",
    price: "$30",
    location: "123 Main Street, Cape Town",
    image: "/images/hairstyling/alexander-mass.jpg",
  },
];

export default function AppointmentsListPage() {
  const [activeTab, setActiveTab] = useState<
    "upcoming" | "cancelled" | "history"
  >("upcoming");
  const [upcoming, setUpcoming] = useState<Booking[]>(mockUpcoming);
  const [cancelled, setCancelled] = useState<Booking[]>(mockCancelled);
  const [history, setHistory] = useState<Booking[]>(mockHistory);

  return (
    <div className="px-4 pt-6 pb-20 overflow-y-auto h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 flex justify-center items-center rounded-full overflow-hidden border border-gray-200">
            <Image
              src="/images/hairstyling/jessica-felicio.jpg"
              alt="Profile"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-bold text-lg">Your Appointments</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex bg-gray-100 rounded-full p-1 mb-6">
        {["upcoming", "cancelled", "history"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`flex-1 py-2 text-sm font-medium rounded-full transition ${
              activeTab === tab
                ? "bg-yellow-400 text-white shadow"
                : "text-gray-600"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Appointment Cards */}
      <div className="space-y-4">
        {activeTab === "upcoming" &&
          (upcoming.length === 0 ? (
            <p className="text-gray-500 text-center mt-10">
              No upcoming appointments.
            </p>
          ) : (
            upcoming.map((booking, index) => (
              <motion.div
                key={index}
                whileTap={{ scale: 0.98 }}
                className="bg-white rounded-2xl shadow p-4 flex gap-4"
              >
                <div className="w-20 h-20 rounded-xl overflow-hidden">
                  <Image
                    src={booking.image}
                    alt={booking.service}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">
                    {booking.service}
                  </p>
                  <p className="text-sm text-gray-500">{booking.provider}</p>
                  <p className="text-sm text-gray-500">
                    {booking.date} • {booking.time}
                  </p>
                  <p className="text-sm font-semibold text-yellow-500">
                    {booking.price}
                  </p>
                  <div className="flex gap-2 mt-2">
                    <Link href={`/appointments/${index}`}>
                      <button className="bg-yellow-400 text-white text-xs px-3 py-1.5 rounded-full shadow">
                        View
                      </button>
                    </Link>
                    <button className="bg-red-500 text-white text-xs px-3 py-1.5 rounded-full shadow">
                      Cancel
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          ))}

        {activeTab === "cancelled" &&
          (cancelled.length === 0 ? (
            <p className="text-gray-500 text-center mt-10">
              No cancelled appointments.
            </p>
          ) : (
            cancelled.map((booking, index) => (
              <motion.div
                key={index}
                whileTap={{ scale: 0.98 }}
                className="bg-gray-50 border border-red-200 rounded-2xl p-4 flex gap-4"
              >
                <div className="w-20 h-20 rounded-xl overflow-hidden">
                  <Image
                    src={booking.image}
                    alt={booking.service}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-700">
                    {booking.service}
                  </p>
                  <p className="text-sm text-gray-500">{booking.provider}</p>
                  <p className="text-sm text-gray-500">
                    {booking.date} • {booking.time}
                  </p>
                  <span className="inline-block mt-2 text-xs font-medium text-red-500 bg-red-100 px-2 py-1 rounded-full">
                    Cancelled
                  </span>
                </div>
              </motion.div>
            ))
          ))}

        {activeTab === "history" &&
          (history.length === 0 ? (
            <p className="text-gray-500 text-center mt-10">
              No past appointments.
            </p>
          ) : (
            history.map((booking, index) => (
              <motion.div
                key={index}
                whileTap={{ scale: 0.98 }}
                className="bg-white rounded-2xl shadow p-4 flex gap-4"
              >
                <div className="w-20 h-20 rounded-xl overflow-hidden">
                  <Image
                    src={booking.image}
                    alt={booking.service}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">
                    {booking.service}
                  </p>
                  <p className="text-sm text-gray-500">{booking.provider}</p>
                  <p className="text-sm text-gray-500">
                    {booking.date} • {booking.time}
                  </p>
                  <span className="inline-block mt-2 text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                    Completed
                  </span>
                </div>
              </motion.div>
            ))
          ))}
      </div>
    </div>
  );
}
