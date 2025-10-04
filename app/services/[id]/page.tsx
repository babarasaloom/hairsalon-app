import { services, categories } from "@/constants/services";
import ServiceDetailsClient from "@/components/services/[id]/service-details";

export default async function ServiceDetailsPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ category?: string }>;
}) {
  const { id } = await params;
  const searchParamsObj = (await searchParams) || {};
  const service = services.find((s) => s.id.toString() === id);

  return (
    <ServiceDetailsClient
      service={service}
      category={searchParamsObj.category || ""}
      categories={categories}
    />
  );
}
