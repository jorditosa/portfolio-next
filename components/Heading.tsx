export default function Heading({children}) {

  return (

    <h1 className="flex items-center w-full">
      {children}
      <span className="h-1 ml-4 rounded flex-1 bg-orange-200"></span>
    </h1>
  )
}