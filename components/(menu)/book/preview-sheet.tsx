import { motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PreviewSheet({
  service,
  onClose,
}: {
  service: any;
  onClose: () => void;
}) {
  if (!service) return null;
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className="fixed md:absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-xl p-6 z-40"
    >
      <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4" />
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-gray-100 p-2 rounded-full"
      >
        <X className="w-5 h-5 text-gray-600" />
      </button>

      <div className="flex gap-4 mb-4">
        <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
          <Image
            src={service.image}
            alt={service.name}
            width={100}
            height={100}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <h2 className="text-lg font-bold text-gray-800">{service.name}</h2>
          <p className="text-sm text-gray-500">{service.artist}</p>
          <p className="text-sm font-medium text-yellow-500">{service.price}</p>
        </div>
      </div>

      <p className="text-sm text-gray-600 mb-4">{service.description}</p>

      <Link href={`/services/${service.id}`}>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="w-full bg-orange-500 text-white py-3 rounded-full font-semibold shadow"
        >
          Book Now
        </motion.button>
      </Link>
    </motion.div>
  );
}
