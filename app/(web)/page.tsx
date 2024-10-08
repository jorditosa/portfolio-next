import Image from "next/image";
import { getMDMetadata } from "../../lib/readMd";
import Links from "./ui/home/Links";
import Technologies from "./ui/home/Technologies";
import MouseEffect from "./ui/mouse/MouseEffect";
import HomeBody from "./ui/home/HomeBody";
import Cover from "./ui/home/Cover";



export default async function HomePage() {
  const content = getMDMetadata('home')

  return (
    <section>
      <Cover />

      <Links />

      <HomeBody content={content} />

      <Technologies />

      <MouseEffect />
    </section>
  )
}