import Heading from "@/components/Heading";
import FadeUpAnimation from "@/components/animations/fade-up/FadeUpAnimation";
import { IoCube } from "react-icons/io5";
import { SiNetlify, SiAmazonec2, SiAmazonaws, SiAwslambda, SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, SiHtml5, SiCss3, SiMysql, SiSass, SiIonic, SiTailwindcss, SiDocker, SiGit, SiVirtualbox } from "react-icons/si";

const Technologies = () => {
  return (
    <section>
      <FadeUpAnimation>

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

        <Heading title={'Cloud technologies'} backBtn={false} />
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <SiAmazonaws className="w-10 h-10" title="AWS" />
          <SiAmazonec2 className="w-10 h-10" title="EC2" />
          <IoCube className="w-10 h-10" title="Lightsail" />
          {/* <SiHostinger className="w-10 h-10" title="Hostinger" /> */}
          <SiNetlify className="w-10 h-10" title="Netlify" />
        </div>
      </FadeUpAnimation>
    </section>
  )
}
export default Technologies