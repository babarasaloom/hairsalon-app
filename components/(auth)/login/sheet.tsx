"use client";

import { motion } from "framer-motion";
import LoginForm from "./form";
import { Suspense } from "react";

export default function LoginSheet() {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      className="absolute bottom-0 left-0 right-0 z-10 bg-white rounded-t-3xl p-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome Back</h2>
      <p className="text-sm text-gray-600 mb-6">
        Log in to access your appointments and profile
      </p>
      <Suspense>
        <LoginForm />
      </Suspense>
    </motion.div>
  );
}
