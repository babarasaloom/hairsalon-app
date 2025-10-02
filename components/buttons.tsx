import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export const BackButton = ({ name }: { name: string }) => {
  const router = useRouter();

  return (
    <div className="flex items-center space-x-3">
      <button
        onClick={() => router.back()}
        className="p-2 rounded-full bg-white shadow"
      >
        <ArrowLeft className="w-5 h-5 text-gray-600" />
      </button>
      {/*<Link
      href="/services"
      className="p-2 rounded-full bg-white shadow"
    >
      <ArrowLeft className="w-5 h-5 text-gray-600" />
    </Link> */}
      <div className="flex items-center justify-center">
        <p className="font-bold text-lg"> {name}</p>
      </div>
    </div>
  );
};
