"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Booking } from "@/definitions/booking";
import { ArrowRight } from "lucide-react";

type Props = {
  booking: Booking;
  onCancel: (booking: Booking) => void;
};

export default function AppointmentCard({ booking, onCancel }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow flex overflow-hidden">
      {/* Service Image */}
      <div className="w-24 h-24 relative flex-shrink-0">
        <Image
          src={booking.image}
          alt={booking.service}
          width={96}
          height={96}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Info */}
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-gray-800">{booking.service}</h3>
          <p className="text-sm text-gray-500">{booking.provider}</p>
          <p className="text-sm text-gray-500">{booking.date}</p>
          <p className="text-sm text-gray-500">{booking.time}</p>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between mt-2">
          <Link href={`/appointments/${booking.service}`} passHref>
            <motion.button
              whileTap={{ scale: 0.97 }}
              className="bg-yellow-400 text-white text-sm px-4 py-2 rounded-full shadow"
            >
              View
            </motion.button>
          </Link>
          <motion.button
            whileTap={{ scale: 0.97 }}
            className="bg-red-500 text-white text-sm px-4 py-2 rounded-full shadow"
            onClick={() => onCancel(booking)}
          >
            Cancel
          </motion.button>
        </div>
      </div>
    </div>
  );
}
