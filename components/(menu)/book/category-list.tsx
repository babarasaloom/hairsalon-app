import { categories } from "@/constants/services";
import { motion } from "framer-motion";

export default function CategoryList() {
  return (
    <div className="flex space-x-3 overflow-x-auto pb-2 mb-6">
      {categories.map((c: any) => (
        <motion.button
          key={c.id}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
            c.isActive
              ? "bg-yellow-400 text-white"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {c.name}
        </motion.button>
      ))}
    </div>
  );
}
