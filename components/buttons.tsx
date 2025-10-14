"use client";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import { Service } from "@/definitions/services";

export const BackButton = ({ name }: { name: string }) => {
  const router = useRouter();

  return (
    <div className="flex items-center space-x-3">
      <button
        onClick={() => router.back()}
        className="p-2 rounded-full bg-white shadow"
      >
        <ArrowLeft className="w-5 h-5 text-gray-600" />
      </button>
      {/*<Link
      href="/services"
      className="p-2 rounded-full bg-white shadow"
    >
      <ArrowLeft className="w-5 h-5 text-gray-600" />
    </Link> */}
      <div className="flex items-center justify-center">
        <p className="font-bold text-lg"> {name}</p>
      </div>
    </div>
  );
};

export const ConfirmButton = ({
  serviceId,
  artistId,
}: {
  serviceId: string;
  artistId: string;
}) => {
  return (
    <Link
      href={`/services/${serviceId}/artists/${artistId}/appointment-success`}
    >
      <motion.div
        whileTap={{ scale: 0.97 }}
        className="bg-yellow-400 rounded-2xl py-3 text-center font-medium text-white shadow-lg mb-8"
      >
        Confirm Appointment
      </motion.div>
    </Link>
  );
};

export const RecommendedLink = ({ service }: { service: Service }) => {
  return (
    <Link key={service.id} href={`/services/${service.id}`}>
      <motion.div
        whileTap={{ scale: 0.98 }}
        className="bg-white rounded-xl shadow-sm flex items-center p-3"
      >
        {/* Thumbnail */}
        <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
          <Image
            src={service.image}
            alt={service.name}
            width={64}
            height={64}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Details */}
        <div className="ml-3 flex-1">
          <p className="text-sm font-medium">{service.name}</p>
          <p className="text-xs text-gray-500">{service.price}</p>
        </div>

        {/* Action */}
        <button className="w-8 h-8 rounded-full bg-yellow-400 text-white flex items-center justify-center shadow">
          <ArrowRight size={16} />
        </button>
      </motion.div>
    </Link>
  );
};
