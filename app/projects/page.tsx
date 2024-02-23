import { ComputerDesktopIcon, DevicePhoneMobileIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Heading from "../../components/Heading";


export default async function ProjectsPage() {
  return (
    <div>
      <Heading>Personal Work</Heading>

      <ul>
        <li className="text-xl">
          <Link href={`/projects/deporunners`} className="flex items-center gap-6 no-underline hover:text-customRed">
            <DevicePhoneMobileIcon className="w-8 h-8" /> 
            Deporunners App
          </Link>
        </li>
        <li className="text-xl">
          <Link href={`/projects/cursacolls`} className="flex items-center gap-6 no-underline hover:text-customRed">
            <ComputerDesktopIcon className="w-8 h-8" /> 
            Cursa dels Colls Website
          </Link>
        </li>
      </ul>
    </div>
  )
}