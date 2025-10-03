"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { categories, services, topBookedServices } from "@/constants/services";
import { Category, Service } from "@/definitions/services";
import { useState } from "react";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("Hairstyling");

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((s: Service) => s.category === activeCategory);

  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        ease: "easeInOut" as const,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" as const },
    },
  };

  // Scroll hint wiggle (runs once)
  const scrollHint = {
    hidden: { x: 0 },
    show: {
      x: [0, -20, 0], // wiggle left then back
      transition: {
        duration: 1,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <motion.div
      className="px-4 pt-6 pb-20 overflow-y-auto h-full"
      initial="hidden"
      animate="show"
      variants={staggerContainer}
    >
      {/* Header */}
      <motion.div
        variants={fadeInUp}
        className="absolute top-0 left-0 right-0 bg-white p-4"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-full overflow-hidden border border-gray-200">
              <Image
                src="/images/hairstyling/jessica-felicio.jpg"
                alt="Profile"
                width={40}
                height={40}
                className="object-fit"
              />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Hello Smith</p>
              <p className="font-bold text-lg">Good morning!</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Categories */}
      <motion.div
        variants={scrollHint}
        initial="hidden"
        animate="show"
        className="flex space-x-4 overflow-x-auto mt-16 pb-2 no-scrollbar snap-x snap-mandatory"
      >
        {categories.map((c: Category) => (
          <motion.button
            key={c.id}
            variants={fadeInUp}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(c.name)}
            className={`flex flex-col items-center ${
              activeCategory === c.name ? "bg-yellow-400" : "bg-white shadow-sm"
            } rounded-2xl p-3 w-20 flex-shrink-0 snap-start`}
          >
            <Image
              src={c.image}
              alt={c.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <p
              className={`text-xs mt-2 font-medium ${
                activeCategory === c.name ? "text-white" : "text-gray-700"
              }`}
            >
              {c.name}
            </p>
          </motion.button>
        ))}
      </motion.div>

      {/* Services */}
      <div className="flex items-center justify-between mt-4">
        <motion.h2 variants={fadeInUp} className="text-lg font-bold">
          {activeCategory === "All" ? "All Services" : activeCategory}
        </motion.h2>
        <motion.div variants={fadeInUp}>
          <Link
            href={`/book?category=${activeCategory}`}
            className="text-sm text-yellow-600 font-medium"
          >
            See all
          </Link>
        </motion.div>
      </div>

      <motion.div
        variants={staggerContainer}
        className="mt-3 grid grid-cols-2 gap-3 no-scrollbar"
      >
        {filteredServices.map((s) => (
          <Link key={s.id} href={`/services/${s.id}`}>
            <motion.div
              variants={fadeInUp}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-2xl shadow p-3"
            >
              <div className="rounded-xl overflow-hidden h-36">
                <Image
                  src={s.image}
                  alt={s.name}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{s.artist}</p>
                  <p className="text-sm text-gray-600">{s.price}</p>
                </div>
                <button className="w-6 h-6 rounded-full bg-yellow-400 text-white flex items-center justify-center shadow">
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>

      {/* Top Booked */}
      <motion.div variants={fadeInUp} className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Top Booked Services</h2>
          <Link
            href="/services/top-booked"
            className="text-sm text-yellow-600 font-medium"
          >
            See all
          </Link>
        </div>
        <motion.div
          variants={staggerContainer}
          className="flex space-x-4 overflow-x-auto pb-2 no-scrollbar"
        >
          {topBookedServices.map((s) => (
            <motion.div
              key={s.id}
              variants={fadeInUp}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-2xl shadow p-3 w-46 flex-shrink-0"
            >
              <div className="rounded-xl overflow-hidden h-36">
                <Image
                  src={s.image}
                  alt={s.name}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{s.name}</p>
                  <p className="text-sm text-gray-600">{s.price}</p>
                </div>
                <button className="w-6 h-6 rounded-full bg-yellow-400 text-white flex items-center justify-center shadow">
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
