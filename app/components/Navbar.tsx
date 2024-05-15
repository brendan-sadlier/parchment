import Link from "next/link"
import { ModeToggle } from "./ModeToggle"
import { Divider } from "@nextui-org/divider";
import Image from "next/image";
import Parchment from "../../public/parchment.svg";

export default function Navbar() {

  return (
      <nav className="w-full relative flex items-center justify-between max-w-7xl mx-auto px-4 py-5">
        <div className="flex items-center space-x-2">
          <Image className="me-1" src={Parchment} alt="Parchment Logo" width={28} height={28} />
          <Link href="/" className="text-3xl font-bold">
            Parch<span className="text-primary">ment</span>
          </Link>
        </div>

        {/* <Link href={"/about"} className="text-md font-semibold hover:underline hover:text-primary">
          About Me
        </Link> */}
        <ModeToggle />
      </nav>
  )
}