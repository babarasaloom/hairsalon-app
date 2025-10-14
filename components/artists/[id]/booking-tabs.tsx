"use client";
import { motion } from "framer-motion";

export default function BookingTabs({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: "Services" | "About" | "Reviews") => void;
}) {
  const tabs: ("Services" | "About" | "Reviews")[] = [
    "Services",
    "About",
    "Reviews",
  ];

  return (
    <div className="flex space-x-3 mt-6">
      {tabs.map((tab) => (
        <motion.button
          key={tab}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => setActiveTab(tab)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition ${
            activeTab === tab
              ? "bg-orange-500 text-white"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {tab}
        </motion.button>
      ))}
    </div>
  );
}
