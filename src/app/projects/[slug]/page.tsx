import { ProjectDetail } from "@/components/project-detail"
import { notFound } from "next/navigation"
import { PROJECTS} from "@/types/mockup"

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const project = PROJECTS[slug as keyof typeof PROJECTS];

  if (!project) {
    notFound()
  }

  return <ProjectDetail project={project} />
}

export function generateStaticParams() {
  return Object.keys(PROJECTS).map((slug) => ({
    slug,
  }))
}
