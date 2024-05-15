import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { BlogCard } from "./lib/interface";
import { formatDateMonthYear, sanityClient, urlFor } from "./lib/sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Divider } from "@nextui-org/divider";

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
    <div className="flex flex-col justify-center items-center">
      <div className="max-w-3xl">
        <h1 className="text-2xl font-bold">Most Recent Posts</h1>
        <Divider className="mt-2 mb-2" />
        <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-2">
          {data.map((post, index) => (
            <Card key={index} className="flex flex-col min-h-[400px]">
              <Image 
                src={urlFor(post.titleImage).url()} 
                alt="Blog Image"
                width={500}
                height={500}
                className="rounded-t-lg h-[200px] object-cover"
              />

              <CardContent className="flex flex-col flex-grow mt-5">
                <h3 className="text-lg line-clamp-2 font-bold text-primary">{post.title}</h3>
                <p className="text-xs italic">{formatDateMonthYear(post._createdAt)}</p>

                <div className="flex flex-wrap gap-1 mt-2">
                  {post.categories.map((category: string, index: number) => (
                    <Badge variant={"outline"} key={index}>{category}</Badge>
                  ))}
                </div>
              
                <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">{post.smallDescription}</p>
              
                <div className="mt-auto">
                  <Button asChild className="w-full mt-4">
                    <Link href={`/blog/${post.currentSlug}`}>
                      Read Me
                    </Link>
                  </Button>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
