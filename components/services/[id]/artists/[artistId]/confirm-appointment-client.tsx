"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Scissors, User, Calendar, Clock, Trash2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ConfirmButton } from "@/components/ui/buttons";
import ServiceCard from "@/components/(menu)/book/service-card";
import { useBookingStore } from "@/store/booking";
import { services } from "@/constants/services";
import type { Service } from "@/definitions/services";

type Props = {
  serviceId: string;
  artistId: string;
  service?: Service;
};

export default function ConfirmAppointmentClient({
  serviceId,
  artistId,
  service,
}: Props) {
  const { bookings, removeBooking } = useBookingStore();
  const recommended: Service[] = services.slice(0, 3);

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      {/* Mobile Frame */}
      <div className="w-full md:w-[390px] h-screen md:h-[844px] bg-white md:rounded-[2.5rem] md:shadow-2xl md:overflow-hidden relative">
        <div className="px-4 pt-6 pb-28 overflow-y-auto h-full">
          {/* Header */}
          {/* <div className="flex items-center justify-between mb-6"> */}
          <div className="absolute top-0 left-0 right-0 bg-white flex items-center justify-between p-4 z-10 ">
            <p className="font-bold text-lg">Confirm Appointments</p>
          </div>
          <div className="h-10"></div>
          {/* Bookings List */}
          <AnimatePresence mode="popLayout">
            {bookings.length > 0 ? (
              bookings.map((b, idx) => {
                const matchedService =
                  services.find((s) => s.id.toString() === b.serviceId) ||
                  service;

                return (
                  <motion.div
                    key={`${b.serviceId}-${b.artist.id}-${idx}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.25 }}
                    className="bg-white rounded-xl p-3 mb-4 border border-gray-100 shadow-sm hover:shadow-md transition"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={b.artist.image}
                          alt={b.artist.name}
                          width={100}
                          height={100}
                          className="object-cover w-full h-full"
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                              {matchedService?.name || "Selected Service"}
                            </h3>
                            <p className="text-xs text-gray-500">
                              by {b.artist.name}
                            </p>
                          </div>
                          <button
                            onClick={() =>
                              removeBooking(b.serviceId, b.artist.id)
                            }
                            className="p-1 text-gray-400 hover:text-red-500 transition"
                            title="Remove booking"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="flex items-center gap-1 mt-2 text-xs text-gray-600">
                          <Calendar className="w-3 h-3 text-orange-500" />
                          <span>{b.selectedDate}</span>
                          <span className="mx-1">•</span>
                          <Clock className="w-3 h-3 text-orange-500" />
                          <span>{b.selectedTime}</span>
                        </div>

                        <div className="flex items-center gap-1 mt-1 text-xs text-gray-700">
                          <Scissors className="w-3 h-3 text-orange-500" />
                          <span>{matchedService?.price || "$25"}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <motion.p
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-gray-500 text-center py-10"
              >
                No appointments yet.
              </motion.p>
            )}
          </AnimatePresence>

          {/* Confirm Button */}
          {bookings.length > 0 && (
            <div className="mt-4">
              <ConfirmButton {...{ serviceId, artistId }} />
            </div>
          )}

          {/* Recommended Services */}
          <div className="flex items-center justify-between mb-3 mt-6">
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
            {recommended.map((s: Service) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
