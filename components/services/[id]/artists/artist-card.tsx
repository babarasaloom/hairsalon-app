"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Artist } from "@/definitions/artists";

type Props = {
  serviceId: string;
  artist: Artist;
};

export default function ArtistCard({ serviceId, artist }: Props) {
  const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-2xl shadow p-3"
      variants={fadeVariants}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <Link href={`/services/${serviceId}/artists/${artist.id}`}>
        <div className="rounded-xl overflow-hidden h-36">
          <Image
            src={artist.image}
            alt={artist.name}
            width={400}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-row justify-between mt-2">
          <div>
            <div className="">
              <p className="text-sm font-medium">{artist.name}</p>
              <p className="text-xs text-gray-500">
                {artist.specialties.join(", ")}
              </p>
            </div>
            {/* Rating + Reviews */}
            <div className="flex items-center mt-1 text-xs text-gray-600">
              <Star className="w-4 h-4 text-yellow-400 mr-1" />
              <span>{artist.rating}</span>
              <span className="ml-1">({artist.reviews} reviews)</span>
            </div>
          </div>

          {/* Price + Availability */}
          <div className="flex items-center items-start justify-between">
            <span className="text-sm font-semibold">{artist.price}</span>
            {/* <span
            className={`text-xs px-2 py-1 rounded-full ${
              artist.availability === "Available Today"
                ? "bg-green-100 text-green-600"
                : artist.availability === "Tomorrow"
                ? "bg-yellow-100 text-yellow-600"
                : artist.availability === "Next Week"
                ? "bg-blue-100 text-blue-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            {artist.availability}
          </span> */}
          </div>
        </div>

        {/* <div className="flex justify-end mt-3">
          <button className="w-8 h-8 rounded-full bg-yellow-400 text-white flex items-center justify-center shadow">
            <ArrowRight size={20} />
          </button>
        </div> */}
      </Link>
    </motion.div>
  );
}
