"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  SlidersHorizontal,
  ArrowRight,
  Clock,
  X,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

// Mock categories
const categories = ["All", "Haircut", "Coloring", "Styling", "Treatment"];

// Mock services
const allServices = [
  {
    id: 1,
    name: "Men’s Haircut",
    category: "Haircut",
    price: "$20",
    duration: "30 min",
    image: "/images/hairstyle/joao-paulo-de-souza-oliveira.jpg",
  },
  {
    id: 2,
    name: "Women’s Coloring",
    category: "Coloring",
    price: "$45",
    duration: "1 hr",
    image: "/images/hairstyle/alexander-mass.jpg",
  },
  {
    id: 3,
    name: "Blow Dry Styling",
    category: "Styling",
    price: "$25",
    duration: "45 min",
    image: "/images/hairstyle/good-faces.jpg",
  },
  {
    id: 4,
    name: "Hair Treatment",
    category: "Treatment",
    price: "$30",
    duration: "1 hr",
    image: "/images/hairstyle/justin-essah.jpg",
  },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState("Any");
  const [duration, setDuration] = useState("Any");

  const filteredServices = allServices.filter((service) => {
    const matchesCategory =
      activeCategory === "All" || service.category === activeCategory;
    const matchesQuery = service.name
      .toLowerCase()
      .includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      {/* Mobile Frame */}
      <div className="w-full md:w-[390px] h-[844px] bg-white md:rounded-[2.5rem] md:shadow-2xl md:overflow-hidden relative">
        {/* Content */}
        <div className="px-4 pt-6 pb-20 h-full overflow-y-auto">
          {/* Header */}
          <div className="flex items-center space-x-4 mb-6">
            <Link href="/services" className="p-2 rounded-full bg-white shadow">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </Link>
            <h1 className="text-xl font-bold text-gray-800">Search</h1>
          </div>
          {/* Search */}
          <div className="flex items-center space-x-2 mb-6">
            <div className="flex flex-1 items-center bg-gray-100 rounded-full px-4 py-2 shadow-sm">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="ml-2 flex-1 bg-transparent outline-none text-sm"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <div
              className="p-3 bg-white rounded-full shadow-sm cursor-pointer"
              onClick={() => setShowFilters(true)}
            >
              <SlidersHorizontal className="w-5 h-5 text-gray-600" />
            </div>
          </div>

          {/* Categories */}
          <div className="flex space-x-3 overflow-x-auto pb-2 mb-6">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileTap={{ scale: 0.9 }}
                className={`px-4 py-2 rounded-full text-sm font-medium shadow-sm ${
                  activeCategory === cat
                    ? "bg-yellow-500 text-white"
                    : "bg-white text-gray-600"
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Results */}
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-2 gap-4">
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  whileTap={{ scale: 0.97 }}
                  className="bg-white rounded-2xl shadow p-3"
                >
                  <div className="rounded-xl overflow-hidden h-28">
                    <Image
                      src={service.image}
                      alt={service.name}
                      width={200}
                      height={120}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="mt-3 flex flex-1 items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">{service.name}</p>
                      <p className="text-xs text-gray-600">
                        {service.price} • {service.duration}
                      </p>
                    </div>
                    <button className="w-6 h-6 rounded-full bg-yellow-500 text-white flex items-center justify-center shadow">
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-10 text-sm">
              No services found. Try another search.
            </p>
          )}
        </div>

        {/* Bottom Sheet Filter */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 flex justify-center items-end z-50"
            >
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                className="bg-white w-full md:w-[390px] rounded-t-3xl p-6 shadow-xl relative"
              >
                {/* Drag handle */}
                <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4"></div>

                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Filters
                  </h2>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="p-2 rounded-full hover:bg-gray-100"
                  >
                    <X className="w-6 h-6 text-gray-600" />
                  </button>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">
                    Price Range
                  </h3>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  >
                    <option>Any</option>
                    <option>$0 - $20</option>
                    <option>$20 - $50</option>
                    <option>$50+</option>
                  </select>
                </div>

                {/* Duration */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">
                    Duration
                  </h3>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  >
                    <option>Any</option>
                    <option>30 min</option>
                    <option>45 min</option>
                    <option>1 hr</option>
                  </select>
                </div>

                {/* Apply Button */}
                <button
                  onClick={() => setShowFilters(false)}
                  className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-yellow-500 to-yellow-400 shadow-md hover:from-yellow-600 hover:to-yellow-500 transition"
                >
                  Apply Filters
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
