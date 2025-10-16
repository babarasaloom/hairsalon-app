"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Camera,
  Bell,
  Lock,
  LogOut,
  User2,
  Calendar,
  Heart,
  Search,
  Home,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { LogoutModal } from "@/components/profile/logout";
import { logoutSessionUser } from "@/actions/auth";

export default function ProfilePage() {
  const [isLogoutOpen, setLogoutOpen] = useState(false);

  const handleConfirmLogout = async () => {
    await logoutSessionUser();
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      {/* Mobile Frame */}
      <div className="w-full md:w-[390px] h-[844px] bg-white md:rounded-[2.5rem] md:shadow-2xl md:overflow-hidden relative">
        {/* Content */}
        <div className="px-4 pt-6 pb-20 overflow-y-auto h-full">
          {/* Header */}
          <div className="flex items-center space-x-4 mb-6">
            <h1 className="text-xl font-bold text-gray-800">Profile</h1>
          </div>

          {/* Profile Picture */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-yellow-400 shadow">
              <Image
                src="/images/hairstyle/jessica-felicio.jpg"
                alt="Profile"
                fill
                className="object-cover"
              />
              <Link
                href="/profile/avatar"
                className="absolute bottom-2 right-2 bg-yellow-400 p-2 rounded-full shadow"
              >
                <Camera className="w-4 h-4 text-white" />
              </Link>
            </div>
            <p className="mt-4 font-semibold text-lg">Jessica Felicio</p>
            <p className="text-gray-500 text-sm">jessica@email.com</p>
          </div>

          {/* Profile Info */}
          <div className="flex flex-col gap-y-4">
            <Link href="/profile/personal">
              <motion.div
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-between bg-white p-4 rounded-2xl shadow"
              >
                <div className="flex items-center space-x-3">
                  <User2 className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="text-gray-800 font-medium">Personal Info</p>
                    <p className="text-sm text-gray-500">Name, Email, Phone</p>
                  </div>
                </div>
                <span className="text-gray-400">›</span>
              </motion.div>
            </Link>

            <Link href="/profile/notifications">
              <motion.div
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-between bg-white p-4 rounded-2xl shadow"
              >
                <div className="flex items-center space-x-3">
                  <Bell className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="text-gray-800 font-medium">Notifications</p>
                    <p className="text-sm text-gray-500">Push, Email, SMS</p>
                  </div>
                </div>
                <span className="text-gray-400">›</span>
              </motion.div>
            </Link>

            <Link href="/profile/security">
              <motion.div
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-between bg-white p-4 rounded-2xl shadow"
              >
                <div className="flex items-center space-x-3">
                  <Lock className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="text-gray-800 font-medium">Security</p>
                    <p className="text-sm text-gray-500">Password, 2FA</p>
                  </div>
                </div>
                <span className="text-gray-400">›</span>
              </motion.div>
            </Link>

            <motion.div
              whileTap={{ scale: 0.98 }}
              onClick={() => setLogoutOpen(true)}
              className="flex items-center justify-between bg-red-50 p-4 rounded-2xl shadow cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <LogOut className="w-5 h-5 text-red-500" />
                <p className="text-red-600 font-medium">Logout</p>
              </div>
              <span className="text-gray-400">›</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Logout Modal */}
      <LogoutModal
        isOpen={isLogoutOpen}
        onClose={() => setLogoutOpen(false)}
        onConfirm={handleConfirmLogout}
      />
    </div>
  );
}
