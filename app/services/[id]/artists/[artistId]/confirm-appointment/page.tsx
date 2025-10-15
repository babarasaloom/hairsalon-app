import { services } from "@/constants/services";
import ConfirmAppointmentClient from "@/components/services/[id]/artists/[artistId]/confirm-appointment-client";

export default async function ConfirmAppointmentPage({
  params,
}: {
  params: Promise<{ id: string; artistId: string }>;
}) {
  const { id: serviceId, artistId } = await params;

  const service = services.find((s) => s.id.toString() === serviceId);

  return (
    <ConfirmAppointmentClient
      serviceId={serviceId}
      artistId={artistId}
      service={service}
    />
  );
}
