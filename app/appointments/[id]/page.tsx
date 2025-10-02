"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import AppointmentHeader from "@/components/appointments/[id]/appointment-header";
import AppointmentDetails from "@/components/appointments/[id]/appointment-details";
import ActionButtons from "@/components/appointments/[id]/action-buttons";
import RescheduleSheet from "@/components/appointments/[id]/reschedule-sheet";
import CancelSheet from "@/components/appointments/[id]/cancel-sheet";
import { Booking } from "@/definitions/booking";

export default function ViewAppointmentPage() {
  const [showReschedule, setShowReschedule] = useState(false);
  const [showCancel, setShowCancel] = useState(false);

  const booking: Booking = {
    service: "Men’s Haircut",
    provider: "Richard Anderson",
    date: "Wednesday, August 25",
    time: "11:30 - 12:30",
    price: "$25",
    location: "123 Main Street, Cape Town",
    image: "/images/hairstyling/elise-wilcox.jpg",
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      <div className="w-full md:w-[390px] h-[844px] bg-white flex flex-col md:rounded-[2.5rem] md:shadow-2xl relative overflow-hidden">
        {/* Header */}
        <AppointmentHeader />

        {/* Content */}
        <div className="px-4 py-6 overflow-y-auto flex-1">
          <AppointmentDetails booking={booking} />

          <ActionButtons
            onReschedule={() => setShowReschedule(true)}
            onCancel={() => setShowCancel(true)}
          />
        </div>

        {/* Bottom Sheets */}
        <AnimatePresence>
          {showReschedule && (
            <RescheduleSheet
              onClose={() => setShowReschedule(false)}
              booking={booking}
            />
          )}
          {showCancel && (
            <CancelSheet
              onClose={() => setShowCancel(false)}
              booking={booking}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
