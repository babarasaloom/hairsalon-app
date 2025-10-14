"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Service } from "@/definitions/services";

export default function ServiceCard({
  artistId,
  service,
}: {
  artistId?: string;
  service: Service;
}) {
  let url = `/services/${service.id}?category=${service.category}`;
  if (artistId && artistId !== "") url += `&artistId=${artistId}`;

  return (
    <Link href={url}>
      <motion.div
        whileTap={{ scale: 0.97 }}
        className="bg-white rounded-2xl shadow-sm p-3 flex gap-4 items-center cursor-pointer"
      >
        <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
          <Image
            src={service.image}
            alt={service.name}
            width={100}
            height={100}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex-1">
          <p className="font-semibold text-gray-800">{service.name}</p>
          <p className="text-sm text-gray-500">{service.artist}</p>
          <p className="text-sm font-medium text-yellow-500">{service.price}</p>
        </div>
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="bg-yellow-400 text-white p-2 rounded-full shadow"
        >
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </Link>
  );
}
