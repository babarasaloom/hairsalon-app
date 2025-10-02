"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Tag, ArrowRight, Heart, TrendingUp } from "lucide-react";

// Mock offers
const allOffers = [
  {
    id: 1,
    category: "Haircut",
    title: "Summer Haircut Discount",
    description: "Get a fresh haircut with 20% off this summer season.",
    discount: "20% OFF",
    valid: "Until Oct 30, 2025",
    image: "/images/joao-paulo-de-souza-oliveira.jpg",
    saved: false,
  },
  {
    id: 2,
    category: "Coloring",
    title: "Coloring Special",
    description: "Transform your look with vibrant colors at 30% off.",
    discount: "30% OFF",
    valid: "Until Nov 15, 2025",
    image: "/images/jessica-felicio.jpg",
    saved: true,
  },
  {
    id: 3,
    category: "Styling",
    title: "Weekend Styling Deal",
    description: "Book a styling session this weekend & save $10.",
    discount: "SAVE $10",
    valid: "Until Oct 20, 2025",
    image: "/images/good-faces.jpg",
    saved: false,
  },
];

// Mock Top Booked Services
const topServices = [
  {
    id: 1,
    name: "Men’s Haircut",
    price: "$20",
    duration: "30 min",
    image: "/images/jessica-felicio.jpg",
  },
  {
    id: 2,
    name: "Women’s Coloring",
    price: "$45",
    duration: "1 hr",
    image: "/images/joao-paulo-de-souza-oliveira.jpg",
  },
  {
    id: 3,
    name: "Blow Dry Styling",
    price: "$25",
    duration: "45 min",
    image: "/images/good-faces.jpg",
  },
];

export default function OffersPage() {
  const [offers, setOffers] = useState(allOffers);
  const [tab, setTab] = useState("active");
  const [category, setCategory] = useState("All");

  // Toggle save/unsave
  const toggleSave = (id: number) => {
    setOffers((prev) =>
      prev.map((offer) =>
        offer.id === id ? { ...offer, saved: !offer.saved } : offer
      )
    );
  };

  // Filter offers
  const filteredOffers = offers.filter((offer) => {
    if (tab === "saved") return offer.saved;
    if (category === "All") return true;
    return offer.category === category;
  });

  const categories = ["All", "Haircut", "Coloring", "Styling"];

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      {/* Mobile Frame */}
      <div className="w-full md:w-[390px] h-[844px] bg-white md:rounded-[2.5rem] md:shadow-2xl md:overflow-hidden relative">
        {/* Content */}
        <div className="px-4 pt-6 pb-20 overflow-y-auto h-full">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <Tag className="w-6 h-6 text-yellow-500" /> Offers
            </h1>
            <span className="text-sm text-gray-500">Exclusive Deals</span>
          </div>

          {/* Hero Banner */}
          <motion.div
            whileTap={{ scale: 0.98 }}
            className="relative rounded-3xl overflow-hidden shadow-lg mb-6"
          >
            <Image
              src="/images/justin-essah.jpg"
              alt="Hero Offer"
              width={400}
              height={200}
              className="object-cover w-full h-48"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
              <p className="text-yellow-300 text-sm font-semibold">Hot Deal</p>
              <h2 className="text-xl font-bold">Free Beard Trim</h2>
              <p className="text-sm">When you book any haircut this week</p>
              <button className="mt-3 bg-yellow-500 px-4 py-2 rounded-full text-sm font-medium shadow">
                Claim Now →
              </button>
            </div>
          </motion.div>

          {/* Tabs */}
          <div className="flex space-x-6 border-b mb-4">
            <button
              className={`pb-2 text-sm font-medium ${
                tab === "active"
                  ? "border-b-2 border-yellow-500 text-yellow-600"
                  : "text-gray-500"
              }`}
              onClick={() => setTab("active")}
            >
              Active
            </button>
            <button
              className={`pb-2 text-sm font-medium ${
                tab === "saved"
                  ? "border-b-2 border-yellow-500 text-yellow-600"
                  : "text-gray-500"
              }`}
              onClick={() => setTab("saved")}
            >
              Saved
            </button>
          </div>

          {/* Category Filter */}
          {tab === "active" && (
            <div className="flex space-x-3 overflow-x-auto pb-2 mb-4">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  whileTap={{ scale: 0.9 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium shadow-sm ${
                    category === cat
                      ? "bg-yellow-500 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          )}

          {/* Offers List */}
          <div className="space-y-5">
            {filteredOffers.length > 0 ? (
              filteredOffers.map((offer) => (
                <motion.div
                  key={offer.id}
                  whileTap={{ scale: 0.97 }}
                  className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl shadow p-4 relative"
                >
                  {/* Save Button */}
                  <button
                    onClick={() => toggleSave(offer.id)}
                    className="absolute top-3 right-3 p-2 bg-white rounded-full shadow"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        offer.saved ? "text-pink-500" : "text-gray-400"
                      }`}
                      fill={offer.saved ? "currentColor" : "none"}
                    />
                  </button>

                  <div className="flex gap-4">
                    <div className="w-24 h-24 rounded-xl overflow-hidden">
                      <Image
                        src={offer.image}
                        alt={offer.title}
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-yellow-600 font-semibold">
                        {offer.discount}
                      </p>
                      <h3 className="font-bold text-gray-800">{offer.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {offer.description}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        {offer.valid}
                      </p>
                      <button className="mt-3 bg-yellow-500 text-white text-xs px-3 py-1.5 rounded-full shadow flex items-center gap-1">
                        Claim <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <p className="text-gray-500 text-center text-sm mt-6">
                {tab === "saved"
                  ? "No saved offers yet."
                  : "No active offers available."}
              </p>
            )}
          </div>

          {/* Top Booked Services */}
          <div className="mt-10">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-yellow-500" />
              <h2 className="text-lg font-bold text-gray-800">
                Top Booked Services
              </h2>
            </div>

            <div className="space-y-4">
              {topServices.map((service) => (
                <motion.div
                  key={service.id}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-4 bg-white rounded-2xl shadow p-4"
                >
                  <div className="w-20 h-20 rounded-xl overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">
                      {service.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {service.price} • {service.duration}
                    </p>
                  </div>
                  <button className="bg-yellow-500 text-white text-xs px-3 py-1.5 rounded-full shadow">
                    Book Now
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
