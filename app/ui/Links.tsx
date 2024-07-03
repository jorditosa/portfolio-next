import { SiLinkedin, SiGithub, SiGmail } from "react-icons/si";
import RoundedNav from '../../components/RoundedBox';


const Links = () => {
  return (

    <RoundedNav>
      <ul className="p-0 list-none flex justify-evenly gap-6">
        <li className="flex items-center gap-4">
          <SiLinkedin className="w-8 h-8" />
          <a href="https://www.linkedin.com/in/jordi-s%C3%A1nchez-torras-2b658245/" target="_blank" rel="noopener noreferrer" className="no-underline">Linkedin profile</a>
        </li>
        <li className="flex items-center gap-4">
          <SiGithub className="w-8 h-8" />
          <a href="https://github.com/jorditosa" target="_blank" rel="noopener noreferrer" className="no-underline">Github profile</a>
        </li>
        <li className="flex items-center gap-4">
          <SiGmail className="w-8 h-8" />
          <a href="mailto:jordisato88@gmail.com?subject=Hola%20Jordi!%20Et%20contacto%20a%20trav%C3%A9s%20del%20teu%20web." target="_blank" rel="noopener noreferrer" className="no-underline">Send me an email</a>
        </li>
      </ul>


    </RoundedNav>
  )
}
export default Links