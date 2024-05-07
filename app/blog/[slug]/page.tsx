import { blogArticle } from "@/app/lib/interface";
import { sanityClient, urlFor } from "@/app/lib/sanity"
import { PortableText } from "next-sanity";
import Image from "next/image";

async function getBlogArticle(slug: string) {
  const query = `
  *[_type == "blog" && slug.current == '${slug}'] {
    "currentSlug": slug.current,
      title,
      content,
      titleImage,
      _createdAt,
      categories
  }[0]`

  const data = await sanityClient.fetch(query);
  return data;
}

export default async function BlogPage({params}: {params: {slug: string}}) {
  const data: blogArticle = await getBlogArticle(params.slug);
  return (
    <div className="mt-8 mb-10">
      <h1>
        <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">{data.categories}</span>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">{data.title}</span>
      </h1>

      <Image 
        src={urlFor(data.titleImage).url()} 
        alt="Blog Image" 
        width={800} 
        height={400}
        priority
        className="rounded-lg mt-8 border h-[300px] object-cover"
      />

      <div className="mt-16 prose prose-blue prose-xl dark:prose-invert prose-li:marker:text-primary">

        <PortableText value={data.content} />

      </div>
    </div>
  )
}