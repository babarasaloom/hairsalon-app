import { AnimatePresence, motion } from "framer-motion";
import BookingTabs from "./booking-tabs";
import { useState } from "react";
import ArtistServices from "./artist-services";

export default function ArtistTabs({ artist }: any) {
  const [selectedTime, setSelectedTime] = useState("11:30");
  const [activeTab, setActiveTab] = useState<"Services" | "About" | "Reviews">(
    "Services"
  );

  const reviews = [
    {
      author: "John Doe",
      comment: "This is a review",
    },
  ];

  return (
    <>
      <BookingTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="mt-6 min-h-[300px]">
        <AnimatePresence mode="wait">
          {activeTab === "Services" && (
            <motion.div
              key="booking"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ArtistServices
                artistId={artist.id}
                selectedTime={selectedTime}
              />
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
                {artist.name} is a highly skilled professional specializing in{" "}
                {artist.specialties.join(", ")}. With years of experience in
                both modern and traditional styles, {artist.name} is passionate
                about helping clients look their best.
              </p>
              <p>
                Based at{" "}
                {/*                       <span className="text-orange-500 font-medium">
                        {artist.salon}
                      </span> */}
                , they bring creativity and precision to every appointment.
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
              {reviews.length ? (
                reviews.map((review: any, idx: number) => (
                  <div key={idx} className="p-4 bg-gray-50 rounded-xl border">
                    <p className="text-sm text-gray-700">{review.comment}</p>
                    <p className="mt-2 text-xs text-gray-500">
                      — {review.author}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No reviews yet.</p>
              )}
              <p className="text-gray-500">No reviews yet.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="h-40 md:h-20" />
    </>
  );
}
