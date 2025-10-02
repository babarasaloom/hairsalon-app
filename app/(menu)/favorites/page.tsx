"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, ArrowRight, User } from "lucide-react";
import { useState } from "react";

// Mock favorites data
const mockFavorites = {
  services: [
    {
      id: 1,
      name: "Men's Haircut",
      artist: "John Doe",
      price: "$20",
      duration: "30 min",
      image: "/images/hairstyling/joao-paulo-de-souza-oliveira.jpg",
    },
    {
      id: 2,
      name: "Hair Coloring",
      artist: "Sarah Lee",
      price: "$50",
      duration: "1h",
      image: "/images/hairstyling/justin-essah.jpg",
    },
  ],
  stylists: [
    {
      id: 1,
      name: "Richard Anderson",
      specialty: "Fade Specialist",
      image: "/images/hairstyling/jessica-felicio.jpg",
    },
    {
      id: 2,
      name: "Maria Gomez",
      specialty: "Coloring Expert",
      image: "/images/hairstyling/good-faces.jpg",
    },
  ],
};

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState(mockFavorites);

  const handleRemoveService = (id: number) => {
    setFavorites((prev) => ({
      ...prev,
      services: prev.services.filter((s) => s.id !== id),
    }));
  };

  const handleRemoveStylist = (id: number) => {
    setFavorites((prev) => ({
      ...prev,
      stylists: prev.stylists.filter((s) => s.id !== id),
    }));
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      {/* Mobile Frame */}
      <div className="w-full md:w-[390px] h-[844px] bg-white md:rounded-[2.5rem] md:shadow-2xl md:overflow-hidden relative">
        <div className="px-4 pt-6 pb-24 overflow-y-auto h-full">
          <h1 className="text-xl font-bold text-gray-800 mb-6">My Favorites</h1>

          {/* Services Section */}
          <h2 className="text-lg font-semibold text-gray-700 mb-3">
            Favorite Services
          </h2>
          {favorites.services.length === 0 ? (
            <p className="text-sm text-gray-500 mb-6">
              You don’t have any favorite services yet.
            </p>
          ) : (
            <div className="space-y-4 mb-8">
              {favorites.services.map((s) => (
                <motion.div
                  key={s.id}
                  whileTap={{ scale: 0.97 }}
                  className="bg-white rounded-2xl shadow-sm p-3 flex gap-4 items-center relative"
                >
                  <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src={s.image}
                      alt={s.name}
                      width={100}
                      height={100}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">{s.name}</p>
                    <p className="text-sm text-gray-500">{s.artist}</p>
                    <p className="text-sm text-yellow-600 font-medium">
                      {s.price} • {s.duration}
                    </p>
                  </div>

                  <Link href={`/services/${s.id}`}>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      className="bg-orange-500 text-white px-3 py-2 rounded-full text-sm font-semibold shadow flex items-center gap-1"
                    >
                      Book <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>

                  <button
                    onClick={() => handleRemoveService(s.id)}
                    className="absolute top-2 right-2 bg-white rounded-full p-1 shadow"
                  >
                    <Heart className="w-5 h-5 text-red-500" />
                  </button>
                </motion.div>
              ))}
            </div>
          )}

          {/* Stylists Section */}
          <h2 className="text-lg font-semibold text-gray-700 mb-3">
            Favorite Stylists
          </h2>
          {favorites.stylists.length === 0 ? (
            <p className="text-sm text-gray-500">
              You don’t have any favorite stylists yet.
            </p>
          ) : (
            <div className="space-y-4">
              {favorites.stylists.map((stylist) => (
                <motion.div
                  key={stylist.id}
                  whileTap={{ scale: 0.97 }}
                  className="bg-white rounded-2xl shadow-sm p-3 flex gap-4 items-center relative"
                >
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={stylist.image}
                      alt={stylist.name}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">
                      {stylist.name}
                    </p>
                    <p className="text-sm text-gray-500">{stylist.specialty}</p>
                  </div>

                  <Link href={`services/1/providers/${stylist.id}`}>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      className="bg-yellow-400 text-black px-3 py-2 rounded-full text-sm font-semibold shadow flex items-center gap-1"
                    >
                      View <User className="w-4 h-4" />
                    </motion.button>
                  </Link>

                  <button
                    onClick={() => handleRemoveStylist(stylist.id)}
                    className="absolute top-2 right-2 bg-white rounded-full p-1 shadow"
                  >
                    <Heart className="w-5 h-5 text-red-500" />
                  </button>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
