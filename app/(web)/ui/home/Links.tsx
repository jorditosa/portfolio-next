import RoundedNav from "@/components/RoundedNav";
import FadeUpAnimation from "@/components/animations/fade-up/FadeUpAnimation";
import { SiLinkedin, SiGithub, SiGmail } from "react-icons/si";


const Links = () => {
  return (

    <FadeUpAnimation>
      <nav className="py-8">
        <ul className="p-0 list-none flex flex-col md:flex-row justify-between gap-2 md:gap-6">
          <li className="flex items-center gap-4 hover:scale-105 duration-150 ease-in">
            <SiLinkedin className="w-8 h-8" />
            <a href="https://www.linkedin.com/in/jordi-s%C3%A1nchez-torras-2b658245/" target="_blank" rel="noopener noreferrer" className="no-underline">Linkedin profile</a>
          </li>
          <li className="flex items-center gap-4 hover:scale-105 duration-150 ease-in">
            <SiGithub className="w-8 h-8" />
            <a href="https://github.com/jorditosa" target="_blank" rel="noopener noreferrer" className="no-underline">Github profile</a>
          </li>
          <li className="flex items-center gap-4 hover:scale-105 duration-150 ease-in">
            <SiGmail className="w-8 h-8" />
            <a href="mailto:jordisato88@gmail.com?subject=Hola%20Jordi!%20Et%20contacto%20a%20trav%C3%A9s%20del%20teu%20web." target="_blank" rel="noopener noreferrer" className="no-underline">Send me an email</a>
          </li>
        </ul>
      </nav>
    </FadeUpAnimation>
  )
}
export default Links