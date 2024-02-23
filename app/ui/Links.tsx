import { LinkIcon } from '@heroicons/react/24/outline';
import RoundedNav from '../../components/RoundedBox';


const Links = () => {
  return (

    <RoundedNav>
      <ul className="list-none">
        <li className="flex items-center gap-4">
          <LinkIcon className="w-8 h-8" />
          <a href="https://www.linkedin.com/in/jordi-s%C3%A1nchez-torras-2b658245/" target="_blank" rel="noopener noreferrer" className="no-underline">Linkedin profile</a>
        </li>
        <li className="flex items-center gap-4">
          <LinkIcon className="w-8 h-8" />
          <a href="https://github.com/jorditosa" target="_blank" rel="noopener noreferrer" className="no-underline">Github profile</a>
        </li>
      </ul>


    </RoundedNav>
  )
}
export default Links