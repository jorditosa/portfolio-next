import { getTexts } from "@/lib/readMd";
import Links from "./ui/Links";
import LottieHome from "./ui/LottieHome";



export default async function HomePage() {
  const content = await getTexts('home')

  return (
    <>
    <div dangerouslySetInnerHTML={{ __html: content}}>
    </div>
      <figure className="flex items-center justify-center gap-6">
        {/* <Image
      width={100}
      height={100}
      src={"/img/pic.jpeg"}
      alt="personal picture"
      className="rounded-full border-4 border-customRed"
      /> */}
      </figure>

      <LottieHome />

      <Links />
    </>
  )
}