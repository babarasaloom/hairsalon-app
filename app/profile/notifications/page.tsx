"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Bell } from "lucide-react";
import Link from "next/link";

export default function NotificationsPage() {
  const [settings, setSettings] = useState({
    appointmentReminders: true,
    offers: false,
    updates: true,
    sms: true,
    email: false,
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings({ ...settings, [key]: !settings[key] });
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      {/* Mobile Frame */}
      <div className="w-full md:w-[390px] h-[844px] bg-white md:rounded-[2.5rem] md:shadow-2xl md:overflow-hidden relative">
        {/* Content */}
        <div className="px-4 pt-6 pb-20 overflow-y-auto h-full">
          {/* Header */}
          <div className="flex items-center space-x-4 mb-6">
            <Link href="/profile" className="p-2 rounded-full bg-white shadow">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </Link>
            <h1 className="text-xl font-bold text-gray-800">Notifications</h1>
          </div>

          {/* Options */}
          <div className="space-y-4">
            {Object.entries(settings).map(([key, value]) => (
              <div
                key={key}
                className="flex items-center justify-between bg-gray-50 p-4 rounded-xl shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 text-yellow-500" />
                  <span className="capitalize text-gray-700 font-medium">
                    {key.replace(/([A-Z])/g, " $1")}
                  </span>
                </div>
                <button
                  onClick={() => toggleSetting(key as keyof typeof settings)}
                  className={`w-12 h-6 flex items-center rounded-full ${
                    value ? "bg-yellow-400" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full shadow transform transition ${
                      value ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
