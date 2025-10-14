import { artists } from "@/constants/artists";
import ArtistHero from "@/components/artists/[artistId]/artist-hero";
import ArtistInfoSheet from "@/components/artists/[artistId]/artist-info-sheet";

export default async function BookingDetailsPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string; artistId: string }>;
  searchParams?: Promise<{ category?: string }>;
}) {
  const { id: serviceId, artistId } = await params;
  const searchParamsObj = await searchParams;
  const category = searchParamsObj?.category || "All";
  const artist = artists.find((a) => a.id.toString() === artistId);

  if (!artist) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600">Artist not found.</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      <div className="relative w-full md:w-[390px] h-[844px] bg-white md:rounded-[2.5rem] md:shadow-2xl overflow-hidden">
        {/* Hero */}
        <ArtistHero artist={artist} />

        {/* Sheet */}
        <ArtistInfoSheet serviceId={serviceId} artist={artist} />
      </div>
    </div>
  );
}
