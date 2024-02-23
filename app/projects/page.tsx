import Link from "next/link";
import Heading from "../../components/Heading";

export default async function ProjectsPage() {
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