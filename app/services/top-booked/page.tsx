import FeaturedOffer from "@/components/(menu)/book/featured-offer";
import ServiceCard from "@/components/(menu)/book/service-card";
import { services } from "@/constants/services";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TopBookedPage() {
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
              <h1 className="text-xl font-bold text-gray-800">Top Booked</h1>
            </div>
          </div>
          <div className="mt-10"></div>
          {/* Featured Offer */}
          <FeaturedOffer />

          {/* Services */}
          <div className="flex flex-col gap-4">
            {services.length > 0 ? (
              services.map((s) => <ServiceCard key={s.id} service={s} />)
            ) : (
              <p className="text-gray-500 text-sm text-center mt-10">
                No services found. Try adjusting your filters.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
