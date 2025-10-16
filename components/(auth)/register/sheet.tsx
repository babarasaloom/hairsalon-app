"use client";
import { motion } from "framer-motion";
import RegisterForm from "./form";
import RegisterHeader from "./header";

export default function RegisterSheet() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: 0.2,
      }}
      className="absolute bottom-0 left-0 right-0 z-10 bg-white rounded-t-3xl p-6"
    >
      <RegisterHeader />
      <RegisterForm />
    </motion.div>
  );
}
