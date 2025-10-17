"use client";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { useBookingStore } from "@/store/booking";

export default function AppointmentsHeaderIcon() {
  const { bookings } = useBookingStore();

  return (
    <Link href="/confirm-appointment" className="relative">
      <Calendar className="w-6 h-6 text-gray-700" />
      {bookings.length > 0 && (
        <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
          {bookings.length}
        </span>
      )}
    </Link>
  );
}
