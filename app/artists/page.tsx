import { artists } from "@/constants/artists";
import { categories } from "@/constants/services";
import ArtistsClient from "@/components/artists/artists-client";

export default async function ArtistsPage({
  searchParams,
}: {
  searchParams?: Promise<{ category?: string }>;
}) {
  const searchParamsObj = await searchParams;
  const category = searchParamsObj?.category || "All";

  return (
    <ArtistsClient
      initialCategory={category}
      artists={artists}
      categories={categories}
    />
  );
}
