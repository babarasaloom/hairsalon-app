"use client";

import { motion } from "framer-motion";
import { Category } from "@/definitions/services";

type Props = {
  categories: Category[];
  currentCategory: string;
  onSelectCategory: (cat: string) => void;
};

export default function CategorySelector({
  categories,
  currentCategory,
  onSelectCategory,
}: Props) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" as const },
    },
  };
  const staggerContainer = {
    hidden: { opacity: 1 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="flex gap-2 overflow-x-auto no-scrollbar pb-4 pt-2"
    >
      {["All", ...categories.map((c) => c.name)].map((c) => (
        <motion.button
          key={c}
          whileTap={{ scale: 0.95 }}
          variants={fadeInUp}
          onClick={() => onSelectCategory(c)}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
            currentCategory === c
              ? "bg-yellow-400 text-white shadow-md"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          {c}
        </motion.button>
      ))}
    </motion.div>
  );
}
