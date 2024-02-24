import Link from "next/link";
import { AiOutlineLaptop, AiOutlineMobile } from "react-icons/ai";
import Heading from "../../components/Heading";


export default async function ProjectsPage() {
  return (
    <div>
      <Heading>Personal Work</Heading>

      <ul>
        <li className="text-xl">
          <Link href={`/projects/deporunners`} className="flex items-center gap-6 no-underline hover:text-customRed">
            <AiOutlineMobile className="w-8 h-8" /> 
            Deporunners App
          </Link>
        </li>
        <li className="text-xl">
          <Link href={`/projects/cursacolls`} className="flex items-center gap-6 no-underline hover:text-customRed">
            <AiOutlineLaptop className="w-8 h-8" /> 
            Cursa dels Colls Website
          </Link>
        </li>
      </ul>
    </div>
  )
}