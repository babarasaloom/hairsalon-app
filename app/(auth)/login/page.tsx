"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }
    // TODO: Replace with real auth logic
    alert("Login successful!");
    router.push("/dashboard");
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      <div className="relative w-full md:w-[390px] h-screen md:h-[844px] bg-white md:rounded-[2.5rem] md:shadow-2xl overflow-hidden">
        {/* Hero Background */}
        <div className="absolute top-0 left-0 right-0 h-90 md:h-120">
          <Image
            src="/images/hairstyle/good-faces.jpg" // Replace with your hero image
            alt="Login Hero"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <button
            onClick={() => router.back()}
            className="absolute top-4 left-4 bg-white/90 p-2 rounded-full shadow"
          >
            <ArrowLeft className="w-5 h-5 text-gray-800" />
          </button>
        </div>

        {/* Login Sheet */}
        <div className="absolute bottom-0 left-0 right-0 z-10 bg-white rounded-t-3xl p-6">
          {/* Header */}
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Welcome Back
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Log in to access your appointments and profile
          </p>

          {/* Email Input */}
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Login Button */}
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={handleLogin}
            className="w-full bg-yellow-400 text-white font-medium py-3 rounded-xl shadow mb-4"
          >
            Login
          </motion.button>

          {/* Forgot Password */}
          <div className="text-center mb-4">
            <button className="text-sm text-gray-500 underline">
              Forgot Password?
            </button>
          </div>

          {/* Signup Link */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don’t have an account?{" "}
              <button
                onClick={() => router.push("/signup")}
                className="text-yellow-500 font-medium"
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
