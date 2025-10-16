"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginHero() {
  const router = useRouter();

  return (
    <div className="absolute top-0 left-0 right-0 h-90 md:h-120">
      <Image
        src="/images/hairstyle/good-faces.jpg"
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
  );
}
