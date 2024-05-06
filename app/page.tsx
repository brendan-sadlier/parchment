import { BlogCard } from "./lib/interface";
import { sanityClient } from "./lib/sanity";

async function getBlogPosts() {
  const query = 
    `*[_type == 'blog'] | order(_createdAt desc) {
        title,
          smallDescription,
          "currentSlug": slug.current 
      }`;
  
  const data = await sanityClient.fetch(query);

  return data;
}

export default async function Home() {

  const data: BlogCard[] = await getBlogPosts();
  console.log(data);

  return (
    <div>
      Hello from the index.tsx page!
    </div>
  );
}
