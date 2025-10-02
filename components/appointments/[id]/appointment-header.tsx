"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AppointmentHeader() {
  return (
    <div className="px-4 pt-6 pb-4 flex items-center space-x-3">
      <Link href="/appointments">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <ArrowLeft className="w-5 h-5 text-gray-700" />
        </button>
      </Link>
      <h1 className="text-lg font-bold text-gray-800">My Appointment</h1>
    </div>
  );
}
