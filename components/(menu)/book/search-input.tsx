"use client";

import { Search, SlidersHorizontal } from "lucide-react";

export default function SearchInput({
  query,
  setQuery,
  onOpenFilters,
}: {
  query: string;
  setQuery: (q: string) => void;
  onOpenFilters: () => void;
}) {
  return (
    <div className="flex items-center space-x-2">
      <div className="flex flex-1 items-center bg-gray-100 rounded-full px-4 py-2 shadow-sm">
        <Search className="w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search services..."
          className="ml-2 flex-1 bg-transparent outline-none text-sm"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div
        className="p-3 bg-white rounded-full shadow-sm cursor-pointer"
        onClick={onOpenFilters}
      >
        <SlidersHorizontal className="w-5 h-5 text-gray-600" />
      </div>
    </div>
  );
}
