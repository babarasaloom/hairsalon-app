import { categories, services } from "@/constants/services";
import BookNowClient from "@/components/book/book-now-client";

export default async function BookNowPage({
  searchParams,
}: {
  searchParams?: Promise<{ category?: string }>;
}) {
  const searchParamsObj = await searchParams;
  const category = searchParamsObj?.category || "All";

  return (
    <BookNowClient
      initialCategory={category}
      categories={categories}
      services={services}
    />
  );
}
