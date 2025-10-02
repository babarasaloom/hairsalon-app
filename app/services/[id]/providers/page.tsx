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
  ArrowLeft,
} from "lucide-react";
import { motion } from "framer-motion";
import { categories, services } from "@/constants/services";
import Link from "next/link";
import { BackButton } from "@/components/buttons";

export default function HomePage() {
  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      {/* Mobile Frame */}
      <div className="w-full md:w-[390px] h-[844px] bg-white md:rounded-[2.5rem] md:shadow-2xl md:overflow-hidden relative">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 bg-white p-4">
          <div className="flex items-center justify-between">
            <BackButton name="Hairstyling Artist" />
          </div>
          {/* Search */}
          <div className="flex items-center mt-3 space-x-2">
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
          </div>{" "}
        </div>

        {/* Screen Content */}
        <div className="px-4 pt-34 pb-30 overflow-y-auto h-full">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">Choose Artist</h2>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {services.map((s) => (
              <Link key={s.id} href={`/services/1/providers/1`}>
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
              src="/images/hairstyling/good-faces.jpg"
              alt="Offer"
              width={100}
              height={100}
              className="rounded-xl object-cover"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}
