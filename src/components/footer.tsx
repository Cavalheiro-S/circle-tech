import Link from "next/link"
import LogoSVG from "../assets/images/logo-white.svg"
import Image from "next/image"

export const Footer = () => {

    return (
        <div className="w-full h-full p-2 md:p-5">

            <footer className="flex justify-between items-center p-4 bg-primary text-zinc-700 md:px-[60px] w-full h-full font-poppins rounded-sm">
                <div className="flex items-center gap-2">
                    <Image src={LogoSVG} alt="Logo" className="w-14 h-" />
                    <h1 className="text-xl font-bold text-white">Circle <br /> Tech</h1>
                </div>
                <nav className="flex flex-col gap-2 text-white">
                    <Link href="#home" className="hover:text-gray-400 font-semibold text-sm">Quem Somos</Link>
                    <Link href="#about" className="hover:text-gray-400 font-semibold text-sm">Soluções</Link>
                    <Link href="#contact" className="hover:text-gray-400 font-semibold text-sm">Contato</Link>
                </nav>
            </footer>
        </div>
    )
}