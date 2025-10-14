"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Heart } from "lucide-react";
import { useEffect, useState } from "react";

interface ServiceDetailsClientProps {
  service?: {
    id: number;
    name: string;
    description: string;
    price: string;
    artist: string;
    image: string;
  };
  category: string;
  artistId: string;
  categories: { name: string }[];
}

export default function ServiceDetailsClient({
  service,
  category,
  artistId,
  categories,
}: ServiceDetailsClientProps) {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState(category || "");

  useEffect(() => {
    if (
      category &&
      (category === "All" || categories.some((c) => c.name === category))
    ) {
      setActiveCategory(category);
    }
  }, [category, categories]);

  if (!service) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-gray-600">Service not found.</p>
      </div>
    );
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  let url = `/services/${service.id}/artists`;
  if (artistId && artistId !== "") url += `/${artistId}`;
  url += `?category=${activeCategory}`;

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      <div className="relative w-full md:w-[390px] h-[844px] bg-white md:rounded-[2.5rem] md:shadow-2xl overflow-hidden">
        {/* Hero Section */}
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
            <ArrowLeft className="w-5 h-5 text-gray-800" />
          </button>

          <button className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow">
            <Heart className="w-5 h-5 text-red-500" />
          </button>
        </div>

        {/* Scrollable Sheet */}
        <div className="absolute top-54 bottom-0 left-0 right-0 z-10 overflow-y-auto scroll-smooth">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            className="bg-white rounded-t-3xl mt-56 p-6"
          >
            {/* Handle */}
            <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4" />

            <motion.div variants={fadeUp}>
              <h2 className="text-lg font-semibold text-gray-800">
                About this service
              </h2>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                {service.description}
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-6">
              <h3 className="text-base font-semibold text-gray-800">Artist</h3>
              <p className="text-sm text-gray-600 mt-1">{service.artist}</p>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-6">
              <h3 className="text-base font-semibold text-gray-800">
                Duration
              </h3>
              <p className="text-sm text-gray-600 mt-1">45 minutes</p>
            </motion.div>

            {/* Spacer for scroll */}
            <div className="h-40" />
          </motion.div>
        </div>

        {/* Fixed Book Button */}
        <div className="fixed md:absolute bottom-0 left-0 right-0 px-4 py-3 bg-white border-gray-300 border-t shadow-lg z-20">
          <Link href={url}>
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
