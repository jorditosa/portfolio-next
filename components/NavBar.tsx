import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="my-4 max-w-xl mx-auto p-2 bg-orange-50/10 border border-orange-200 shadow-lg rounded-full">
      <ul className="flex justify-around items-center">
        <li>
          <Link href='/'
          className="text-orange-800">Hola!</Link>
        </li>
        <li>
          <Link href='/background'>Experiència</Link>
        </li>
        <li>
          <Link href='./studies'>Formació</Link>
        </li>
        <li>
          <Link href='/projects'>Projectes</Link>
        </li>
      </ul>
    </nav>
  )
}