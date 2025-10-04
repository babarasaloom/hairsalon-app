"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Bell,
  Calendar,
  Home,
  Heart,
  Search,
  User2,
  Scissors,
  Gift,
} from "lucide-react";

const services = [
  {
    id: 1,
    name: "Men’s Haircut",
    price: "$25",
    image: "/images/hairstyling/joao-paulo-de-souza-oliveira.jpg",
  },
  {
    id: 2,
    name: "Women’s Haircut",
    price: "$35",
    image: "/images/hairstyling/justin-essah.jpg",
  },
  {
    id: 3,
    name: "Beard Trim",
    price: "$15",
    image: "/images/hairstyling/alexander-mass.jpg",
  },
];

export default function ClientDashboard() {
  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      {/* Mobile Frame */}
      <div className="w-full md:w-[390px] h-[844px] bg-white md:rounded-[2.5rem] md:shadow-2xl md:overflow-hidden relative">
        {/* Content */}
        <div className="px-4 pt-6 pb-20 overflow-y-auto h-full">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="flex justify-center items-center w-10 h-10 rounded-full overflow-hidden border border-gray-200">
                <Image
                  src="/images/hairstyle/jessica-felicio.jpg"
                  alt="Profile"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Hello Smith</p>
                <p className="font-bold text-lg">Welcome Back</p>
              </div>
            </div>
            <div className="relative p-2 bg-white rounded-full shadow">
              <Bell className="w-5 h-5 text-gray-700" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </div>
          </div>

          {/* Upcoming Appointment */}
          <motion.div
            whileTap={{ scale: 0.98 }}
            className="bg-yellow-400 rounded-2xl p-4 mb-6 shadow text-white"
          >
            <p className="text-sm opacity-80">Next Appointment</p>
            <p className="font-semibold">Men’s Haircut with Richard</p>
            <p className="text-sm">Wed, Aug 25 • 11:30 AM</p>
            <Link href="/appointments/0">
              <button className="mt-3 bg-white text-yellow-500 text-sm px-4 py-2 rounded-full shadow font-medium">
                View Details
              </button>
            </Link>
          </motion.div>

          {/* Quick Actions */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            <Link href="/services" className="flex flex-col items-center">
              <div className="p-4 bg-yellow-100 rounded-2xl shadow">
                <Scissors className="w-6 h-6 text-yellow-500" />
              </div>
              <p className="text-sm mt-2 font-medium text-gray-700">Book</p>
            </Link>
            <Link href="/appointments" className="flex flex-col items-center">
              <div className="p-4 bg-pink-100 rounded-2xl shadow">
                <Calendar className="w-6 h-6 text-pink-500" />
              </div>
              <p className="text-sm mt-2 font-medium text-gray-700">
                Appointments
              </p>
            </Link>
            <Link href="/offers" className="flex flex-col items-center">
              <div className="p-4 bg-green-100 rounded-2xl shadow">
                <Gift className="w-6 h-6 text-green-500" />
              </div>
              <p className="text-sm mt-2 font-medium text-gray-700">Offers</p>
            </Link>
          </div>

          {/* Recommended Services */}
          <h2 className="text-lg font-bold mb-4">Recommended for you</h2>
          <div className="space-y-4">
            {services.map((service) => (
              <motion.div
                key={service.id}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 bg-white rounded-2xl shadow p-4"
              >
                <div className="w-16 h-16 rounded-xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800">{service.name}</p>
                  <p className="text-sm text-gray-500">{service.price}</p>
                </div>
                <Link href={`/services/${service.id}`}>
                  <button className="bg-yellow-400 text-white text-xs px-4 py-2 rounded-full shadow">
                    Book
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed md:absolute bottom-0 left-0 right-0 bg-white border-t flex justify-around items-center py-6 shadow-lg rounded-t-2xl">
          <Home className="w-6 h-6 text-yellow-500" />
          <Search className="w-6 h-6 text-gray-400" />
          <div className="p-3 bg-black rounded-full -mt-12">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <Calendar className="w-6 h-6 text-gray-400" />
          <User2 className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </div>
  );
}
