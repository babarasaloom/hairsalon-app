"use client";

import { X } from "lucide-react";

type FilterKeys = "priceRange" | "duration";

type Props = {
  filters: { priceRange: string; duration: string };
  clearFilter: (key: FilterKeys) => void;
};

export default function ActiveFilters({ filters, clearFilter }: Props) {
  if (filters.priceRange === "Any" && filters.duration === "Any") return null;

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {filters.priceRange !== "Any" && (
        <span className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
          {filters.priceRange}
          <button onClick={() => clearFilter("priceRange")}>
            <X className="w-4 h-4" />
          </button>
        </span>
      )}
      {filters.duration !== "Any" && (
        <span className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
          {filters.duration}
          <button onClick={() => clearFilter("duration")}>
            <X className="w-4 h-4" />
          </button>
        </span>
      )}
    </div>
  );
}
