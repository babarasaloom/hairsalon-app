"use client";

import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function RegisterHero() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute top-0 left-0 right-0 h-80 md:h-90"
    >
      <Image
        src="/images/hairstyle/good-faces.jpg"
        alt="Register Hero"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => router.back()}
        className="absolute top-4 left-4 bg-white/90 p-2 rounded-full shadow"
      >
        <ArrowLeft className="w-5 h-5 text-gray-800" />
      </motion.button>
    </motion.div>
  );
}
