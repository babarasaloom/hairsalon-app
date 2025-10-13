"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Home,
  Search,
  Heart,
  Calendar,
  User2,
  BarChart3,
  Tag,
  Scissors,
  LogIn,
  Users,
} from "lucide-react";

// Example: replace with your auth state hook
const useAuth = () => {
  const [isLoggedIn] = useState(false); // mock: change to false to test guest
  return { isLoggedIn };
};

export default function BottomNav() {
  const { isLoggedIn } = useAuth();
  const [active, setActive] = useState("home");

  // Tabs for logged out users
  const guestTabs = [
    {
      id: "home",
      label: "Home",
      icon: <Scissors />,
      href: "/services",
      center: false,
    },
    {
      id: "search",
      label: "Search",
      icon: <Search />,
      href: "/search",
      center: false,
    },
    {
      id: "artists",
      label: "Artists",
      icon: <Users />,
      href: "/artists",
      center: false,
    },
    {
      id: "login",
      label: "Login",
      icon: <LogIn />,
      href: "/login",
      center: false,
    },
  ];

  // Tabs for logged in users
  const userTabs = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <BarChart3 />,
      href: "/dashboard",
      center: false,
    },
    {
      id: "home",
      label: "Home",
      icon: <Scissors />,
      href: "/services",
      center: false,
    },
    {
      id: "favorites",
      label: "Favorites",
      icon: <Heart />,
      href: "/favorites",
      center: true,
    },
    {
      id: "appointments",
      label: "Appointments",
      icon: <Calendar />,
      href: "/appointments",
      center: false,
    },
    {
      id: "profile",
      label: "Profile",
      icon: <User2 />,
      href: "/profile",
      center: false,
    },
  ];

  const tabs = isLoggedIn ? userTabs : guestTabs;

  return (
    <div className="fixed md:absolute bottom-0 left-0 right-0 bg-white border-gray-300 border-t flex justify-around items-center py-6 shadow-lg rounded-t-2xl z-50">
      {tabs.map((tab) => (
        <Link key={tab.id} href={tab.href} onClick={() => setActive(tab.id)}>
          <motion.div
            whileTap={{ scale: 0.9 }}
            className={`flex flex-col items-center ${
              tab.center ? "p-3 bg-black rounded-full -mt-12" : "text-gray-400"
            }`}
          >
            {tab.center ? (
              <tab.icon.type className="w-6 h-6 text-white" />
            ) : (
              <tab.icon.type
                className={`w-6 h-6 ${
                  active === tab.id || tab.center
                    ? "text-yellow-500"
                    : "text-gray-400"
                }`}
              />
            )}
          </motion.div>
        </Link>
      ))}
    </div>
  );
}
