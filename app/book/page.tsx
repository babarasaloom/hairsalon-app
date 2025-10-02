"use client";

import FeaturedOffer from "@/components/(menu)/book/featured-offer";
import FilterSheet from "@/components/(menu)/book/filter-sheet";
import SearchInput from "@/components/(menu)/book/search-input";
import ServiceCard from "@/components/(menu)/book/service-card";
import { services } from "@/constants/services";
import { ArrowLeft, Scissors, X } from "lucide-react";
import Link from "next/link";
import { useState, useMemo } from "react";

const categories = ["All", "Haircut", "Coloring", "Styling", "Treatment"];

export default function BookNowPage() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [query, setQuery] = useState("");

  const [category, setCategory] = useState("All");
  const [filters, setFilters] = useState({
    priceRange: "Any",
    duration: "Any",
  });

  const filteredServices = useMemo(() => {
    let list = [...services];

    // Search filter
    if (query) {
      list = list.filter((s) =>
        s.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Category filter
    if (category !== "All") {
      list = list.filter((s) =>
        s.name.toLowerCase().includes(category.toLowerCase())
      );
    }

    // Price filter
    if (filters.priceRange !== "Any") {
      list = list.filter((s) => {
        const priceNum = parseFloat(s.price.replace("$", ""));
        if (filters.priceRange === "$0 - $20") return priceNum <= 20;
        if (filters.priceRange === "$20 - $50")
          return priceNum > 20 && priceNum <= 50;
        if (filters.priceRange === "$50+") return priceNum > 50;
        return true;
      });
    }

    // Duration filter
    if (filters.duration !== "Any") {
      list = list.filter(
        (s) =>
          s.description &&
          s.description.toLowerCase().includes(filters.duration.toLowerCase())
      );
    }

    return list;
  }, [query, category, filters]);

  const clearFilter = (key: keyof typeof filters) => {
    setFilters({ ...filters, [key]: "Any" });
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      {/* Mobile Frame */}
      <div className="w-full md:w-[390px] h-[844px] bg-white md:rounded-[2.5rem] md:shadow-2xl md:overflow-hidden relative">
        {" "}
        <div className="px-4 pt-6 pb-24 overflow-y-auto h-full">
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 bg-white flex flex-col gap-2 px-4 pt-4 pb-0 z-10">
            <div className="flex items-center space-x-4">
              <Link
                href="/services"
                className="p-2 rounded-full bg-white shadow"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </Link>
              <h1 className="text-xl font-bold text-gray-800">Search</h1>
            </div>

            {/* Search + Filter */}
            <SearchInput
              query={query}
              setQuery={setQuery}
              onOpenFilters={() => setFilterOpen(true)}
            />

            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-4 pt-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                    category === c
                      ? "bg-yellow-400 text-white shadow-md"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Active Filters (Price + Duration only) */}
            {(filters.priceRange !== "Any" || filters.duration !== "Any") && (
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
            )}
          </div>
          <div className="mt-38"></div>

          {/* Featured Offer */}
          <FeaturedOffer />

          {/* Services */}
          <div className="flex flex-col gap-4">
            {filteredServices.length > 0 ? (
              filteredServices.map((s) => (
                <ServiceCard key={s.id} service={s} />
              ))
            ) : (
              <p className="text-gray-500 text-sm text-center mt-10">
                No services found. Try adjusting your filters.
              </p>
            )}
          </div>
        </div>
        {/* Filter Sheet */}
        <FilterSheet
          open={filterOpen}
          onClose={() => setFilterOpen(false)}
          filters={filters}
          onApply={(newFilters) => setFilters(newFilters)}
        />
      </div>
    </div>
  );
}
