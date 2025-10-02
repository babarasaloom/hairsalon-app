"use client";
import Image from "next/image";
import {
  Bell,
  SlidersHorizontal,
  Heart,
  Home,
  Calendar,
  Search,
  User2,
  ArrowBigRight,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { categories, services, topBookedServices } from "@/constants/services";
import Link from "next/link";
import BottomNav from "@/components/bottom-nav";
import { Category } from "@/definitions/services";

export default function HomePage() {
  return (
    <div className="px-4 pt-6 pb-20 overflow-y-auto h-full">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 bg-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-full overflow-hidden border border-gray-200">
              <Image
                src="/images/jessica-felicio.jpg"
                alt="Profile"
                width={40}
                height={40}
                className="object-fit"
              />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Hello smith</p>
              <p className="font-bold text-lg">Good morning!</p>
            </div>
          </div>
          <div className="relative p-2 bg-white rounded-full shadow">
            <Bell className="w-5 h-5 text-gray-700" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </div>
        </div>
      </div>

      {/* Search */}
      {/* <div className="flex items-center mt-6 space-x-2">
            <div className="flex flex-1 items-center bg-white rounded-full px-4 py-2 shadow-sm">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="ml-2 flex-1 bg-transparent outline-none text-sm"
              />
            </div>
            <div className="p-3 bg-white rounded-full shadow-sm">
              <SlidersHorizontal className="w-5 h-5 text-gray-600" />
            </div>
          </div> */}

      {/* Categories */}
      <div className="flex space-x-4 overflow-x-auto mt-16 pb-2">
        {categories.map((c: Category) => (
          <motion.div
            key={c.id}
            whileTap={{ scale: 0.98 }}
            className={`flex flex-col items-center ${
              c.isActive ? "bg-yellow-400" : "bg-white shadow-sm"
            } rounded-2xl p-3 w-20 flex-shrink-0`}
          >
            <Image
              src={c.image.startsWith("http") ? c.image : c.image}
              alt={c.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <p className="text-xs mt-2 font-medium">{c.name}</p>
          </motion.div>
        ))}
      </div>

      {/* Offers */}
      <div className="flex items-center justify-between mt-6">
        <h2 className="text-lg font-bold">Hairstyling</h2>
        <Link href="/book" className="text-sm text-yellow-600 font-medium">
          See all
        </Link>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-3">
        {services.map((s) => (
          <Link key={s.id} href={`/services/${s.id}`}>
            <motion.div
              key={s.id}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-2xl shadow p-3"
            >
              <div className="rounded-xl overflow-hidden h-36">
                <Image
                  src={s.image.startsWith("http") ? s.image : s.image}
                  alt={s.name}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="mt-3 flex flex-1 items-center justify-between">
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
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Top Booked Services</h2>
          <Link
            href="/services/top-booked"
            className="text-sm text-yellow-600 font-medium"
          >
            See all
          </Link>
        </div>
        <div className="flex space-x-4 overflow-x-auto pb-2">
          {topBookedServices.map((s) => (
            <motion.div
              key={s.id}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-2xl shadow p-3 w-46 flex-shrink-0"
            >
              <div className="rounded-xl overflow-hidden h-36">
                <Image
                  src={s.image.startsWith("http") ? s.image : s.image}
                  alt={s.name}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="mt-3 flex flex-1 items-center justify-between">
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
        </div>
      </div>

      {/* Offers */}
      {/* <div className="flex items-center justify-between mt-6">
            <h2 className="text-lg font-bold">Eid offers</h2>
            <button className="text-sm text-yellow-600 font-medium">
              See all
            </button>
          </div>

          <div className="bg-yellow-400 rounded-2xl p-4 mt-4 flex items-center justify-between">
            <div>
              <p className="text-sm">Haircut</p>
              <p className="text-2xl font-bold">30% Free</p>
              <p className="text-xs mt-1">Aug 12 - Aug 27</p>
              <button className="mt-3 bg-white text-black px-4 py-2 rounded-full text-sm font-medium flex items-center shadow">
                Get Offer Now
                <span className="ml-2">→</span>
              </button>
            </div>
            <Image
              src="/images/good-faces.jpg"
              alt="Offer"
              width={100}
              height={100}
              className="rounded-xl object-cover"
            />
          </div> */}

      {/* Styles */}
      <div className="bg-white rounded-2xl p-4 mt-6 flex items-center justify-between shadow-sm">
        <div>
          <p className="font-semibold">High taper fade</p>
          <p className="text-sm text-gray-500 mt-1">
            Nice step 2 taper fade curated for your steeze.
          </p>
        </div>
        <div className="p-2 bg-black rounded-full">
          <span className="text-white text-lg">→</span>
        </div>
      </div>
    </div>
  );
}
