import { tours, getAllTourSlugs } from "@/lib/tours";
import { TourDetailClient } from "./tour-detail-client";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllTourSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const tour = tours[slug];
    if (!tour) return { title: "Tour Not Found" };
    
    return {
      title: `${tour.title.en} | Morocco Coco Travel`,
      description: tour.description.en,
    };
  });
}

export default async function TourPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = tours[slug];

  if (!tour) {
    notFound();
  }

  return <TourDetailClient tour={tour} />;
}
