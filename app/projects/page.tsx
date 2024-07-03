
import Heading from "../../components/Heading";
import ProjectList from "./ui/ProjectList";


export default async function ProjectsPage() {
  return (
    <div>
      <Heading title="Projects" backBtn={true} />

      <ProjectList />

     
    </div>
  )
}