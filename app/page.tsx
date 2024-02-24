import { getServerSession } from "next-auth";
import Image from "next/image";
import { AiOutlineSmile } from "react-icons/ai";
import { getTexts } from "../lib/readMd";
import { options } from "./api/auth/[...nextauth]/options";
import Links from "./ui/Links";
import LottieHome from "./ui/LottieHome";


export default async function HomePage() {
  const content = await getTexts('home')
  const session = await getServerSession(options)

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
          <p className="flex items-center gap-2">
            Logged you can view my pic 
            <AiOutlineSmile className="w-8 h-8" />
          </p>
        </figure>
        : null
    }
    <div dangerouslySetInnerHTML={{ __html: content}}>
    </div>

      <LottieHome />

      <Links />
    </>
  )
}