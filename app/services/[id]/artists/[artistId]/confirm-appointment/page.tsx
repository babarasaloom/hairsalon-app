import {
  Bell,
  Scissors,
  User,
  Calendar,
  Clock,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { services } from "@/constants/services";
import { ConfirmButton, RecommendedLink } from "@/components/buttons";

export default async function ConfirmAppointmentPage({
  params,
}: {
  params: Promise<{ id: string; artistId: string }>;
}) {
  const { id: serviceId, artistId } = await params;

  const booking = {
    service: "Men’s Haircut",
    provider: "Richard Anderson",
    date: "Wednesday, August 25",
    time: "11:30 - 12:30",
    price: "$25",
    image: "/haircut1.jpg",
  };

  // pick only a few to show subtly
  const recommended = services.slice(0, 3);

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      {/* Mobile Frame */}
      <div className="w-full md:w-[390px] h-[844px] bg-white md:rounded-[2.5rem] md:shadow-2xl md:overflow-hidden relative">
        {/* Scrollable Content */}
        <div className="px-4 pt-6 pb-28 overflow-y-auto h-full">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <p className="font-bold text-lg">Confirm Appointment</p>
          </div>

          {/* Appointment Card */}
          <div className="bg-white rounded-2xl p-4 shadow mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-gray-800">Summary</h2>
              <span className="text-lg font-semibold text-yellow-500">
                {booking.price}
              </span>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Scissors className="w-5 h-5 text-orange-500" />
                <span className="font-medium">{booking.service}</span>
              </div>
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-orange-500" />
                <span>{booking.provider}</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-orange-500" />
                <span>{booking.date}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-orange-500" />
                <span>{booking.time}</span>
              </div>
            </div>
          </div>

          {/* Confirm Button */}
          <ConfirmButton {...{ serviceId, artistId }} />

          {/* Subtle Other Services */}
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-md font-semibold text-gray-800">
              You may also like
            </h2>
            <Link
              href="/services"
              className="text-xs text-yellow-600 font-medium"
            >
              See all
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            {recommended.map((s) => (
              <RecommendedLink key={s.id} service={s} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
