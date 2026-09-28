import BookPageContent from "@/components/book/BookPageContent";

export const metadata = { title: "Book Appointment" };

type PageProps = {
  searchParams: Promise<{ service?: string }>;
};

export default async function BookPage({ searchParams }: PageProps) {
  const params = await searchParams;
  return <BookPageContent defaultService={params.service} />;
}
