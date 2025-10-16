"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  Heart,
  Calendar,
  User2,
  BarChart3,
  Scissors,
  LogIn,
  Users,
} from "lucide-react";
import { IUser } from "@/definitions/user";
import { useBookingStore } from "@/store/booking";

export default function BottomNav({ user }: { user: IUser }) {
  const pathname = usePathname();
  const { bookings } = useBookingStore();

  type LucideIcon = typeof Search;
  type Tab = {
    id: string;
    label: string;
    icon: LucideIcon;
    href: string;
    center?: boolean;
  };

  // Tabs for guests
  const guestTabs: Tab[] = [
    {
      id: "home",
      label: "Home",
      icon: Scissors,
      href: "/services",
    },
    {
      id: "search",
      label: "Search",
      icon: Search,
      href: "/search",
    },
    {
      id: "artists",
      label: "Artists",
      icon: Users,
      href: "/artists",
    },
    {
      id: "confirm-appointments",
      label: "Appointments",
      icon: Calendar,
      href: "/appointments",
    },
    {
      id: "login",
      label: "Login",
      icon: LogIn,
      href: "/login",
    },
  ];

  // Tabs for logged in users
  const userTabs: Tab[] = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: BarChart3,
      href: "/dashboard",
    },
    {
      id: "home",
      label: "Home",
      icon: Scissors,
      href: "/services",
    },
    {
      id: "favorites",
      label: "Favorites",
      icon: Heart,
      href: "/favorites",
      center: true,
    },
    {
      id: "appointments",
      label: "Appointments",
      icon: Calendar,
      href: "/appointments",
    },
    {
      id: "profile",
      label: "Profile",
      icon: User2,
      href: "/profile",
    },
  ];

  const tabs = user ? userTabs : guestTabs;

  return (
    <div className="fixed md:absolute bottom-0 left-0 right-0 bg-white border-t border-gray-300 flex justify-around items-center py-4 md:py-6 shadow-lg rounded-t-2xl z-50">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = pathname === tab.href;
        const isAppointmentTab =
          tab.id === "appointments" || tab.id === "confirm-appointments";

        return (
          <Link key={tab.id} href={tab.href} className="relative">
            <motion.div
              whileTap={{ scale: 0.9 }}
              className={`flex flex-col items-center ${
                tab.center
                  ? "p-3 bg-black rounded-full -mt-12"
                  : "text-gray-400"
              }`}
            >
              {tab.center ? (
                <Icon className="w-6 h-6 text-white" />
              ) : (
                <Icon
                  className={`w-6 h-6 transition-colors duration-200 ${
                    isActive ? "text-yellow-500" : "text-gray-400"
                  }`}
                />
              )}

              {/* 🟡 Badge showing number of booked services */}
              {isAppointmentTab && bookings.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-yellow-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {bookings.length}
                </span>
              )}
            </motion.div>
          </Link>
        );
      })}
    </div>
  );
}
