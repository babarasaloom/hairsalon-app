"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar as CalendarIcon } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { artists } from "@/constants/artists";
import ArtistHero from "@/components/artists/[artistId]/artist-hero";
import ArtistInfo from "@/components/artists/[artistId]/artist-info";
import BookingTabs from "@/components/artists/[artistId]/booking-tabs";
import DateSelector from "@/components/artists/[artistId]/date-selector";
import TimeSelector from "@/components/artists/[artistId]/time-selector";
import AppointmentSummary from "@/components/artists/[artistId]/appointment-summary";
import BookButton from "@/components/artists/[artistId]/book-button";

export default function BookingDetailsPage() {
  const { artistId: id } = useParams();
  const router = useRouter();
  const artist = artists.find((a) => a.id.toString() === id);

  if (!artist) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600">Artist not found.</p>
      </div>
    );
  }

  const [selectedDate, setSelectedDate] = useState("15");
  const [selectedTime, setSelectedTime] = useState("11:30");
  const [activeTab, setActiveTab] = useState<"Booking" | "About" | "Reviews">(
    "Booking"
  );

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
        {/* Hero */}
        <ArtistHero artist={artist} router={router} />

        {/* Sheet */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          className="absolute top-20 md:top-34 bottom-0 left-0 right-0 z-10 overflow-y-auto"
        >
          <div className="bg-white rounded-t-3xl mt-56 p-6">
            {/* Handle */}
            <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4" />

            {/* Artist Info */}
            <ArtistInfo artist={artist} />

            {/* Tabs */}
            <BookingTabs activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* Tab Content */}
            <div className="mt-6 min-h-[300px]">
              <AnimatePresence mode="wait">
                {activeTab === "Booking" && (
                  <motion.div
                    key="booking"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <DateSelector
                      dates={dates}
                      selectedDate={selectedDate}
                      onSelectDate={setSelectedDate}
                    />
                    <TimeSelector
                      times={times}
                      selectedTime={selectedTime}
                      onSelectTime={setSelectedTime}
                    />
                    <AppointmentSummary selectedTime={selectedTime} />
                  </motion.div>
                )}

                {activeTab === "About" && (
                  <motion.div
                    key="about"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-600 leading-relaxed space-y-4"
                  >
                    <p>
                      {artist.name} is a highly skilled professional
                      specializing in {artist.specialties.join(", ")}. With
                      years of experience in both modern and traditional styles,{" "}
                      {artist.name} is passionate about helping clients look
                      their best.
                    </p>
                    <p>
                      Based at{" "}
                      {/*                       <span className="text-orange-500 font-medium">
                        {artist.salon}
                      </span> */}
                      , they bring creativity and precision to every
                      appointment.
                    </p>
                  </motion.div>
                )}

                {activeTab === "Reviews" && (
                  <motion.div
                    key="reviews"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    {/* {artist.reviewsList?.length ? (
                      artist.reviewsList.map((review: any, idx: number) => (
                        <div
                          key={idx}
                          className="p-4 bg-gray-50 rounded-xl border"
                        >
                          <p className="text-sm text-gray-700">
                            {review.comment}
                          </p>
                          <p className="mt-2 text-xs text-gray-500">
                            — {review.author}
                          </p>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500">No reviews yet.</p>
                    )} */}
                    <p className="text-gray-500">No reviews yet.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="h-40 md:h-20" />
          </div>
        </motion.div>

        {/* Fixed Book Button */}
        {activeTab === "Booking" && <BookButton artistId={artist.id} />}
      </div>
    </div>
  );
}
