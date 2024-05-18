import Link from "next/link"
import { ModeToggle } from "./ModeToggle"
import { Divider } from "@nextui-org/divider";
import Image from "next/image";
import Parchment from "../../public/parchment.svg";

import "./css/Navbar.css";

export default function Navbar() {

  return (
      <nav className="w-full relative flex items-center justify-between max-w-7xl mx-auto px-4 py-5">
        <div className="flex items-center space-x-2">
          <Image src={Parchment} alt="Parchment Logo" height={24} />
          <Link href="/" className="text-3xl font-bold">
            Parch<span className="text-primary">ment</span>
          </Link>
        </div>

        <Link href={"/about"} className="text-md font-semibold hover:underline hover:text-primary">
          About Us
        </Link>
        <ModeToggle />
      </nav>
  )
}