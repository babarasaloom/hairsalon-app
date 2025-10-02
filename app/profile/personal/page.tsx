"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Save } from "lucide-react";
import Link from "next/link";

export default function PersonalInfoPage() {
  const [form, setForm] = useState({
    name: "Jessica Felicio",
    email: "jessica@email.com",
    phone: "+123 456 7890",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    alert("Profile updated!");
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
            <h1 className="text-xl font-bold text-gray-800">Personal Info</h1>
          </div>

          {/* Form */}
          <div className="space-y-5">
            <div>
              <label className="text-sm text-gray-500 block mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 shadow-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500 block mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 shadow-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500 block mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 shadow-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Save Button */}
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={handleSave}
            className="mt-10 w-full bg-yellow-400 text-white font-medium py-3 rounded-xl shadow flex items-center justify-center gap-2"
          >
            <Save className="w-5 h-5" />
            Save Changes
          </motion.button>
        </div>
      </div>
    </div>
  );
}
