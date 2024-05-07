import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { BlogCard } from "./lib/interface";
import { formatDate, sanityClient, urlFor } from "./lib/sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

async function getBlogPosts() {
  const query = 
    `*[_type == 'blog'] | order(_createdAt desc) {
        title,
          smallDescription,
          "currentSlug": slug.current,
          titleImage,
          _createdAt,
          categories
      }`;
  
  const data = await sanityClient.fetch(query);

  return data;
}

export default async function Home() {

  const data: BlogCard[] = await getBlogPosts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
      {data.map((post, index) => (
        <Card key={index}>
          <Image 
            src={urlFor(post.titleImage).url()} 
            alt="Blog Image"
            width={500}
            height={500}
            className="rounded-t-lg h-[200px] object-cover"
          />

          <CardContent className="mt-5">
            <h3 className="text-lg line-clamp-2 font-bold text-primary">{post.title}</h3>
            <p className="text-xs italic">{formatDate(post._createdAt)}</p>

            {post.categories.map((category: string, index: number) => (
              <Badge key={index}>{category}</Badge>
            ))}
            
            <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">{post.smallDescription}</p>
            
            <Button asChild className="w-full mt-7">
              <Link href={`/blog/${post.currentSlug}`}>
                Read Me
              </Link>
            </Button>

          </CardContent>
        </Card>
      ))}
    </div>
  );
}
