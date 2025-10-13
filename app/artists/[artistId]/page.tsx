"use client";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { artists } from "@/constants/artists";
import ArtistHero from "@/components/artists/[artistId]/artist-hero";
import ArtistInfo from "@/components/artists/[artistId]/artist-info";
import ArtistTabs from "@/components/artists/[artistId]/artist-tabs";

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

            <ArtistTabs artist={artist} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
