import Link from "next/link"
import LogoSVG from "../assets/images/logo.svg"
import Image from "next/image"

export const Header = () => {

    return (
        <header className="flex flex-col gap-2  md:gap-0 md:flex-row justify-between items-center p-4 bg-white text-zinc-700 md:px-20 w-full h-full font-poppins">
            <div className="flex items-center gap-2">
                <Image src={LogoSVG} alt="Logo" className="w-14 h-14" />
                <h1 className="text-xl font-bold ">Circle <br/> Tech</h1>
            </div>
            <nav className="flex space-x-4">
                <Link href="#home" className="hover:text-gray-400">Quem Somos</Link>
                <Link href="#about" className="hover:text-gray-400">Soluções</Link>
                <Link href="#contact" className="hover:text-gray-400">Contato</Link>
            </nav>
        </header>
    )
}