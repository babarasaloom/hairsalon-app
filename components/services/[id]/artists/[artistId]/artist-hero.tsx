"use client";
import Image from "next/image";
import { ArrowLeft, Heart } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ArtistHero({ artist }: any) {
  const router = useRouter();

  return (
    <div className="fixed md:absolute top-0 left-0 right-0 h-90 md:h-110 z-0">
      <Image
        src={artist.image}
        alt={artist.name}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 100vw"
      />
      <button
        onClick={() => router.back()}
        className="absolute top-4 left-4 bg-white/90 p-2 rounded-full shadow"
      >
        <ArrowLeft className="w-5 h-5 text-gray-800" />
      </button>
      <button className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow">
        <Heart className="w-5 h-5 text-red-500" />
      </button>
    </div>
  );
}
