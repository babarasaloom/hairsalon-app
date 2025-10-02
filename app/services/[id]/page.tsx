"use client";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/constants/services";
import { motion } from "framer-motion";
import { ArrowLeft, Heart } from "lucide-react";

export default function ServiceDetailsPage() {
  const { id } = useParams();
  const service = services.find((s) => s.id.toString() === id);
  const router = useRouter();

  if (!service) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Service not found.</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      <div className="relative w-full md:w-[390px] h-[844px] bg-white md:rounded-[2.5rem] md:shadow-2xl overflow-hidden">
        {/* Hero Section (background) */}
        <div className="fixed md:absolute top-0 left-0 right-0 h-120 z-0">
          <Image
            src={service.image}
            alt={service.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          <div className="absolute bottom-10 left-4 text-white">
            <h1 className="text-2xl font-bold">{service.name}</h1>
            <p className="text-lg font-semibold text-yellow-300">
              {service.price}
            </p>
          </div>
          <button
            onClick={() => router.back()}
            className="absolute top-4 left-4 bg-white/80 backdrop-blur-md p-2 rounded-full text-sm shadow"
          >
            {/* ← Back */}
            <ArrowLeft className="w-5 h-5 text-gray-800" />
          </button>
          <button className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow">
            <Heart className="w-5 h-5 text-red-500" />
          </button>
        </div>

        {/* Scrollable Card (slides over hero) */}
        <div className="absolute top-54 bottom-0 left-0 right-0 z-10 overflow-y-auto">
          <div className="bg-white rounded-t-3xl mt-56 p-6">
            {/* Handle */}
            <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4" />

            <h2 className="text-lg font-semibold text-gray-800">
              About this service
            </h2>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              {service.description}
            </p>

            <div className="mt-6">
              <h3 className="text-base font-semibold text-gray-800">Artist</h3>
              <p className="text-sm text-gray-600 mt-1">{service.artist}</p>
            </div>

            <div className="mt-6">
              <h3 className="text-base font-semibold text-gray-800">
                Duration
              </h3>
              <p className="text-sm text-gray-600 mt-1">{"45 minutes"}</p>
            </div>

            {/* Add filler so it can scroll */}
            <div className="h-40" />
          </div>
        </div>

        {/* Fixed Book Button */}
        <div className="fixed md:absolute bottom-0 left-0 right-0 px-4 py-3 bg-white border-t shadow-lg z-20">
          <Link href="/services/1/providers">
            <motion.div
              whileTap={{ scale: 0.97 }}
              className="w-full bg-orange-500 text-white text-center py-3 rounded-full font-medium text-lg shadow"
            >
              Book Now
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
}
