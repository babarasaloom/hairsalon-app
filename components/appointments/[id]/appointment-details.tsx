"use client";
import Image from "next/image";
import { Scissors, User, Calendar, Clock, MapPin } from "lucide-react";
import { Booking } from "@/definitions/booking";

type Props = {
  booking: Booking;
};

export default function AppointmentDetails({ booking }: Props) {
  return (
    <>
      {/* Service Image */}
      <div className="w-full h-48 rounded-2xl overflow-hidden shadow">
        <Image
          src={booking.image}
          alt={booking.service}
          width={400}
          height={200}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Appointment Info */}
      <div className="mt-6 bg-white rounded-2xl p-4 shadow space-y-4">
        <h2 className="text-base font-semibold text-gray-800">
          Appointment Details
        </h2>

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
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-orange-500" />
            <span>{booking.location}</span>
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <span className="text-gray-600">Total</span>
          <span className="text-lg font-semibold text-yellow-500">
            {booking.price}
          </span>
        </div>
      </div>
    </>
  );
}
