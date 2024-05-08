import Link from "next/link"
import { ModeToggle } from "./ModeToggle"
import { Divider } from "@nextui-org/divider";

export default function Navbar() {

  return (
      <nav className="w-full relative flex items-center justify-between max-w-7xl mx-auto px-4 py-5">
        <Link href="/" className="text-3xl font-bold">
          Someone&apos;s <span className="text-primary">Blog</span>
        </Link>
        <Link href={"/about"} className="text-md font-semibold hover:underline hover:text-primary">
          About Me
        </Link>
        <ModeToggle />
      </nav>
  )
}