"use client";

import FeaturedOfferWrapper from "@/components/book/featured-offer-wrapper";
import CategorySelector from "@/components/book/category-selector";
import ServiceList from "@/components/book/service-list";
import ActiveFilters from "@/components/book/active-filters";
import FilterSheetWrapper from "@/components/book/filter-sheet-wrapper";
import SearchInput from "@/components/(menu)/book/search-input";
import { categories, services } from "@/constants/services";
import { ArrowLeft, X } from "lucide-react";
import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function BookNowPage() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [filters, setFilters] = useState({
    priceRange: "Any",
    duration: "Any",
  });

  const searchParams = useSearchParams();
  const router = useRouter();

  // Load category from URL param
  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");
    if (
      categoryFromUrl &&
      (categoryFromUrl === "All" ||
        categories.some((c) => c.name === categoryFromUrl))
    ) {
      setCategory(categoryFromUrl);
    }
  }, [searchParams]);

  const handleCategoryChange = (cat: string) => {
    setCategory(cat);
    router.replace(`/book?category=${encodeURIComponent(cat)}`);
  };

  const filteredServices = useMemo(() => {
    let list = [...services];

    if (query)
      list = list.filter((s) =>
        s.name.toLowerCase().includes(query.toLowerCase())
      );
    if (category !== "All")
      list = list.filter((s) =>
        s.category?.toLowerCase().includes(category.toLowerCase())
      );

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

    if (filters.duration !== "Any") {
      list = list.filter((s) =>
        s.description?.toLowerCase().includes(filters.duration.toLowerCase())
      );
    }

    return list;
  }, [query, category, filters]);

  const clearFilter = (key: keyof typeof filters) =>
    setFilters({ ...filters, [key]: "Any" });

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      <div className="w-full md:w-[390px] h-[844px] bg-white md:rounded-[2.5rem] md:shadow-2xl md:overflow-hidden relative">
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
            <SearchInput
              query={query}
              setQuery={setQuery}
              onOpenFilters={() => setFilterOpen(true)}
            />
            <CategorySelector
              categories={categories}
              currentCategory={category}
              onSelectCategory={handleCategoryChange}
            />
            <ActiveFilters filters={filters} clearFilter={clearFilter} />
          </div>

          <div className="mt-38"></div>

          <FeaturedOfferWrapper />

          {category !== "" && <ServiceList services={filteredServices} />}
        </div>

        <FilterSheetWrapper
          open={filterOpen}
          onClose={() => setFilterOpen(false)}
          filters={filters}
          setFilters={setFilters}
        />
      </div>
    </div>
  );
}
