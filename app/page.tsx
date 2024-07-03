import { getServerSession } from "next-auth";
import Image from "next/image";
import { getTexts } from "../lib/readMd";
import Links from "./ui/Links";
import LottieHome from "./ui/LottieHome";
import Technologies from "./ui/Technologies";



export default async function HomePage() {
  const content = await getTexts('home')

  return (
    <section>
      <LottieHome />
      <div dangerouslySetInnerHTML={{ __html: content }}>
      </div>

      <Technologies />
      <Links />
    </section>
  )
}