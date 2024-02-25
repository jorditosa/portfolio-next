import { getServerSession } from "next-auth";
import Image from "next/image";
import { getTexts } from "../lib/readMd";
import { options } from "./api/auth/[...nextauth]/options_examples";
import Links from "./ui/Links";
import LottieHome from "./ui/LottieHome";
import Technologies from "./ui/Technologies";



export default async function HomePage() {
  const content = await getTexts('home')
  const session = await getServerSession<any>(options)

  return (
    <>
    {
      session ?
        <figure className="flex flex-col items-center justify-center gap-6">
          <Image
          width={100}
          height={100}
          src={"/img/pic.jpeg"}
          alt="personal picture"
          className="rounded-full border-4 border-customRed"
          />
        </figure>
        : null
    }
    <div dangerouslySetInnerHTML={{ __html: content}}>
    </div>

    
    <Technologies />
    <LottieHome />
    <Links />
    </>
  )
}