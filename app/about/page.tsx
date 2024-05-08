import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Divider } from "@nextui-org/divider"
import Image from "next/image"
import Link from "next/link"
import { sanityClient, urlFor } from "../lib/sanity"
import { ProjectCard } from "../lib/interface"
import { Badge } from "@/components/ui/badge"

async function getProjects() {
  const query = 
    `*[_type == 'project'] | order(_createdAt desc) {
        title,
          smallDescription,
          repository,
          titleImage,
          _createdAt,
          languages
      }`;

    const data = await sanityClient.fetch(query);

    return data;
}

export default async function About() {

  const data: ProjectCard[] = await getProjects();
  console.log(data)

  return (
    <div className="container max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4">About Me</h1>
        <Divider className="mb-3" />

        <p className="text-gray-800 dark:text-gray-200 mb-6">
          As an enthusiastic and dedicated Computer Science undergraduate, I am eager to launch my career in software engineering. With a strong academic foundation and hands-on experience through academic projects and internships, I am now seeking graduate or entry-level opportunities where I can apply my skills, innovate, and grow as part of a forward-thinking team.
        </p>

        <div className="space-y-4">
        
        {/* Education Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-1">Education</h2>
          <Divider className="mb-3" />
          <p className="text-lg">
            <strong>University College Dublin</strong> - B.S. in Computer Science
            <br />
            Graduated: 2024
          </p>
        </section>
        
        {/* Professional Experience Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-1">Professional Experience</h2>
          <Divider className="mb-3" />
          <ul>
            <li>
              <strong>Technology Consultant - Intern</strong>
              <h3 className="text-primary font-medium">KPMG</h3>
              <p className="italic">March 2023 - September 2023</p>
              <ul className="list-disc ms-5">
                <li>
                  Engaged in three key client projects, contributing to the development and execution of strategic solutions to meet client needs.
                </li>
                <li>
                  Collaborated closely with team members to design and implement innovative strategies, enhancing client satisfaction and service delivery
                </li>
                <li>
                  Fostered effective communication with clients to facilitate the successful adoption of new systems and processes, ensuring project objectives were met.
                </li>
                <li>
                  Led a comprehensive research initiative across the department aimed at enhancing the quality of services offered to clients, resulting in measurable improvements
                </li>
              </ul>
            </li>
          </ul>
        </section>
        
        {/* Projects Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-1">Projects</h2>
          <Divider className="mb-3" />

          <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-2">
            {data.map((project, index) => (
              <Card key={index} className="flex flex-col min-h-[400px]">
                <Image 
                  src={urlFor(project.titleImage).url()} 
                  alt="Project Image"
                  width={500}
                  height={500}
                  className="rounded-t-lg h-[200px] object-cover"
                />

                <CardContent className="flex flex-col flex-grow mt-5">
                  <h3 className="text-lg line-clamp-2 font-bold text-primary">{project.title}</h3>

                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.languages.map((category: string, index: number) => (
                      <Badge variant={"outline"} key={index}>{category}</Badge>
                    ))}
                  </div>
                
                  <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">{project.smallDescription}</p>
                
                  <div className="mt-auto">
                      <Button className="w-full mt-4">
                        <a href={`${project.repo}`}>Learn More</a>
                      </Button>
                  </div>

                </CardContent>
              </Card>
            ))}
          </div>

        </section>
        
      </div>
    </div>
  )
}