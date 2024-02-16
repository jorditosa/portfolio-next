import Heading from "@/components/Heading";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div>
      <Heading>Personal Work</Heading>

      <ul>
        <li>
          <Link href={`/projects/project-deporunners`}>
            Deporunners App
          </Link>
        </li>
      </ul>

    </div>
  )
}