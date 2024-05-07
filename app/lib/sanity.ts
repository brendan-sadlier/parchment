import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { format, parseISO } from "date-fns";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-05-03",
  useCdn: false,
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}

export function formatDate(dateString: string): string {
  const date = parseISO(dateString);
  return format(date, 'dd/MM/yyyy');
}