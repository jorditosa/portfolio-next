import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="prose">
      <h1>Personal Work</h1>

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