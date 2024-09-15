import Image from "next/image";
import { getMDMetadata } from "../../lib/readMd";
import Links from "./ui/Links";
import LottieHome from "./ui/LottieHome";
import Technologies from "./ui/Technologies";
import Markdown from "markdown-to-jsx";
import Cover from "./ui/Cover";
import MouseEffect from "./ui/mouse/MouseEffect";



export default async function HomePage() {
  const content = getMDMetadata('home')

  return (
    <section>
      <Cover />

      <Links />

      <Markdown>
        {content}
      </Markdown>

      <Technologies />

      <MouseEffect />
    </section>
  )
}