import { BlogArticle } from "@/app/lib/interface";
import { formatDayDate, sanityClient, urlFor } from "@/app/lib/sanity"
import { PortableText } from "next-sanity";
import { Heart } from 'lucide-react';
import { Share2 } from 'lucide-react';
import { Divider } from "@nextui-org/divider";
import Image from "next/image";
import { Button } from "@/components/ui/button";

async function getBlogArticle(slug: string) {
  const query = `
  *[_type == "blog" && slug.current == '${slug}'] {
    "currentSlug": slug.current,
      title,
      content,
      author,
      titleImage,
      _createdAt,
      categories
  }[0]`

  const data = await sanityClient.fetch(query);
  console.log(data.categories)
  return data;
}

export default async function BlogPage({params}: {params: {slug: string}}) {
  const data: BlogArticle = await getBlogArticle(params.slug);
  return (
    <div className="mt-8 mb-10">
      <h1>
        <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
          {data.categories.join(' • ')}
        </span>
        <span className="block text-base text-center font-light italic mt-2">{formatDayDate(data._createdAt)}</span>
        <span className="mt-1 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">{data.title}</span>
        <span className="block text-center">By: {data.author}</span>
      </h1>

      <Divider className="mt-5 mb-3" />

      <div className="w-full relative flex items-start gap-2">
        <Button variant="outline" size="icon">
          <Heart className="h-4 w-4"/>
        </Button>

        <Button variant="outline" size="icon">
          <Share2 className="h-4 w-4"/>
        </Button>
      </div>



      <Image 
        src={urlFor(data.titleImage).url()} 
        alt="Blog Image" 
        width={1440} 
        height={300}
        priority
        className="rounded-lg mt-5 border h-[300px] object-cover"
      />

      <div className="mt-16 prose !max-w-none prose-blue prose-xl dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">

        <PortableText value={data.content} />

      </div>
    </div>
  )
}