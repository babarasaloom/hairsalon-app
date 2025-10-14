import { artists } from "@/constants/artists";
import { categories } from "@/constants/services";
import ArtistsClient from "@/components/services/[id]/artists/artists-client";

export default async function ArtistsPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ category?: string }>;
}) {
  const { id } = await params;
  const searchParamsObj = await searchParams;
  const category = searchParamsObj?.category || "All";

  return (
    <ArtistsClient
      id={id}
      initialCategory={category}
      artists={artists}
      categories={categories}
    />
  );
}
