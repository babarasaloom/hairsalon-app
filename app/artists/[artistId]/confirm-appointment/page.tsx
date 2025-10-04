"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Bell,
  Scissors,
  User,
  Calendar,
  Clock,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { services } from "@/constants/services";

export default function ConfirmAppointmentPage() {
  const booking = {
    service: "Men’s Haircut",
    provider: "Richard Anderson",
    date: "Wednesday, August 25",
    time: "11:30 - 12:30",
    price: "$25",
    image: "/haircut1.jpg",
  };

  // pick only a few to show subtly
  const recommended = services.slice(0, 3);

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      {/* Mobile Frame */}
      <div className="w-full md:w-[390px] h-[844px] bg-white md:rounded-[2.5rem] md:shadow-2xl md:overflow-hidden relative">
        {/* Scrollable Content */}
        <div className="px-4 pt-6 pb-28 overflow-y-auto h-full">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <p className="font-bold text-lg">Confirm Appointment</p>
          </div>

          {/* Appointment Card */}
          <div className="bg-white rounded-2xl p-4 shadow mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-gray-800">Summary</h2>
              <span className="text-lg font-semibold text-yellow-500">
                {booking.price}
              </span>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Scissors className="w-5 h-5 text-orange-500" />
                <span className="font-medium">{booking.service}</span>
              </div>
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-orange-500" />
                <span>{booking.provider}</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-orange-500" />
                <span>{booking.date}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-orange-500" />
                <span>{booking.time}</span>
              </div>
            </div>
          </div>

          {/* Confirm Button */}
          <Link href="/artists/1/appointment-success">
            <motion.div
              whileTap={{ scale: 0.97 }}
              className="bg-yellow-400 rounded-2xl py-3 text-center font-medium text-white shadow-lg mb-8"
            >
              Confirm Appointment
            </motion.div>
          </Link>

          {/* Subtle Other Services */}
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-md font-semibold text-gray-800">
              You may also like
            </h2>
            <Link
              href="/services"
              className="text-xs text-yellow-600 font-medium"
            >
              See all
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            {recommended.map((s) => (
              <Link key={s.id} href={`/services/${s.id}`}>
                <motion.div
                  whileTap={{ scale: 0.98 }}
                  className="bg-white rounded-xl shadow-sm flex items-center p-3"
                >
                  {/* Thumbnail */}
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={s.image}
                      alt={s.name}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Details */}
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium">{s.name}</p>
                    <p className="text-xs text-gray-500">{s.price}</p>
                  </div>

                  {/* Action */}
                  <button className="w-8 h-8 rounded-full bg-yellow-400 text-white flex items-center justify-center shadow">
                    <ArrowRight size={16} />
                  </button>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
