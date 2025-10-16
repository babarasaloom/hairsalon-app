import { services } from "@/constants/services";
import ConfirmAppointmentClient from "@/components/confirm-appointment/client";
import { getSessionUser } from "@/data/user";
import { IUser } from "@/definitions/user";

export default async function ConfirmAppointmentPage({
  params,
}: {
  params: Promise<{ id: string; artistId: string }>;
}) {
  const { id: serviceId, artistId } = await params;
  const user = (await getSessionUser()) as IUser;
  const service = services.find((s) => s.id.toString() === serviceId);

  return (
    <ConfirmAppointmentClient
      serviceId={serviceId}
      artistId={artistId}
      service={service}
      user={user}
    />
  );
}
