import Image from "next/image";
import Heading from "../../components/Heading"
import { SiNetlify, SiAmazonec2, SiAmazonaws, SiAwslambda, SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, SiHtml5, SiCss3, SiMysql, SiSass, SiIonic, SiTailwindcss, SiDocker, SiGit } from "react-icons/si";

const Technologies = () => {
  return (
    <section>
      <Heading title={'Web technologies'} backBtn={false}/>
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <SiJavascript className="w-10 h-10" title="Javascript" />
        <SiReact className="w-10 h-10" title="React" />
        <SiNextdotjs className="w-10 h-10" title="Next.js" />
        <SiCss3 className="w-10 h-10" title="CSS" />
        <SiHtml5 className="w-10 h-10" title="HTML" />
        <SiSass className="w-10 h-10" title="SASS" />
        <SiTailwindcss className="w-10 h-10" title="Tailwind" />
        <SiIonic className="w-10 h-10" title="Mobile Ionic" />
        <SiNodedotjs className="w-10 h-10" title="Node.js" />
        <SiGit className="w-10 h-10" title="Git" />
        <SiMysql className="w-10 h-10" title="MySQL" />
        <SiDocker className="w-10 h-10" title="Docker" />

      </div>


      <Heading title={'Security technologies'} backBtn={false} />
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <Image
        src={'/icons/nmap.svg'}
        width={50}
        height={50}
        className="w-10 h-10 m-0" 
        alt="NMAP" 
        title="NMAP"
        />
      
      </div>

      <Heading title={'Cloud technologies'} backBtn={false} />
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <SiAmazonaws className="w-10 h-10" title="AWS" />
        <SiAmazonec2 className="w-10 h-10" title="EC2" />
        <SiAwslambda className="w-10 h-10" title="Lambda" />
        <SiNetlify className="w-10 h-10" title="Netlify" />
      </div>

    </section>
  )
}
export default Technologies