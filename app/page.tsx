import Image from "next/image";
import { getMDMetadata } from "../lib/readMd";
import Links from "./ui/Links";
import LottieHome from "./ui/LottieHome";
import Technologies from "./ui/Technologies";
import Markdown from "markdown-to-jsx";



export default async function HomePage() {
  const content = getMDMetadata('home')

  return (
    <section>
      <LottieHome />
      <Markdown>
        {content}
      </Markdown>

      <Technologies />
      <Links />
    </section>
  )
}