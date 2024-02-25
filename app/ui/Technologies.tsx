import { TbBrandCss3, TbBrandFigma, TbBrandHtml5, TbBrandJavascript, TbBrandNextjs, TbBrandNodejs, TbBrandReact, TbBrandSass, TbBrandTailwind, TbBrandVercel, TbDeviceMobileCode, TbSql } from "../../components/Icons"

const Technologies = () => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <TbBrandFigma className="w-10 h-10" title="Figma" />
      <TbBrandJavascript className="w-10 h-10" title="Javascript" />
      <TbBrandReact className="w-10 h-10" title="React" />
      <TbBrandNextjs className="w-10 h-10" title="Next.js" />
      <TbBrandCss3 className="w-10 h-10" title="CSS" />
      <TbBrandHtml5 className="w-10 h-10" title="HTML" />
      <TbBrandSass className="w-10 h-10" title="SASS" />
      <TbBrandTailwind className="w-10 h-10" title="Tailwind" />
      <TbDeviceMobileCode className="w-10 h-10" title="Mobile development" />
      <TbBrandNodejs className="w-10 h-10" title="Node.js" />
      <TbSql className="w-10 h-10" title="SQL" />
      <TbBrandVercel className="w-10 h-10" title="Vercel" />
    </div>
  )
}
export default Technologies