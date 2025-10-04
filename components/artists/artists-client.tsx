"use client";

import FeaturedOfferWrapper from "@/components/book/featured-offer-wrapper";
import ActiveFilters from "@/components/book/active-filters";
import FilterSheetWrapper from "@/components/book/filter-sheet-wrapper";
import SearchInput from "@/components/(menu)/book/search-input";
import ArtistList from "@/components/artists/artist-list";
import { BackButton } from "@/components/buttons";
import { useState, useMemo, useEffect } from "react";

type ArtistsClientProps = {
  initialCategory: string;
  artists: any[];
  categories: { name: string }[];
};

export default function ArtistsClient({
  initialCategory,
  artists,
  categories,
}: ArtistsClientProps) {
  const [filterOpen, setFilterOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [filters, setFilters] = useState({
    priceRange: "Any",
    duration: "Any",
  });

  useEffect(() => {
    setCategory(initialCategory);
  }, [initialCategory]);

  const filteredArtists = useMemo(() => {
    let list = [...artists];

    if (query) {
      list = list.filter((a) =>
        a.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (category !== "All" && category !== "") {
      list = list.filter((a) =>
        a.specialties.some((s: string) =>
          s.toLowerCase().includes(category.toLowerCase())
        )
      );
    }

    if (filters.priceRange !== "Any") {
      list = list.filter((a) => {
        const priceNum = parseFloat(a.price.replace("$", ""));
        if (filters.priceRange === "$0 - $20") return priceNum <= 20;
        if (filters.priceRange === "$20 - $50")
          return priceNum > 20 && priceNum <= 50;
        if (filters.priceRange === "$50+") return priceNum > 50;
        return true;
      });
    }

    return list;
  }, [query, category, filters, artists]);

  const clearFilter = (key: keyof typeof filters) =>
    setFilters({ ...filters, [key]: "Any" });

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      <div className="w-full md:w-[390px] h-[844px] bg-white md:rounded-[2.5rem] md:shadow-2xl md:overflow-hidden relative">
        <div className="px-4 pt-6 pb-24 overflow-y-auto h-full">
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 bg-white flex flex-col gap-2 px-4 pt-4 pb-2 z-10">
            <div className="flex items-center space-x-4">
              <BackButton name={`${category} Artists`} />
            </div>

            <SearchInput
              query={query}
              setQuery={setQuery}
              onOpenFilters={() => setFilterOpen(true)}
            />

            <ActiveFilters filters={filters} clearFilter={clearFilter} />
          </div>

          <div className="mt-26" />

          <FeaturedOfferWrapper />

          {category !== "" && (
            <ArtistList category={category} artists={filteredArtists} />
          )}
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
