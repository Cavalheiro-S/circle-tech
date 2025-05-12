import Link from "next/link"

export const Footer = () => {

    return (
        <footer className="flex justify-between items-center p-4 bg-primary text-zinc-700 px-20 w-full h-full font-poppins h-full">
            <div className="flex items-center">
                <h1 className="text-xl font-bold text-white">Circle Tech</h1>
            </div>
            <nav className="flex flex-col gap-2 text-white">
                <Link href="#home" className="hover:text-gray-400 font-semibold text-sm">Quem Somos</Link>
                <Link href="#about" className="hover:text-gray-400 font-semibold text-sm">Soluções</Link>
                <Link href="#contact" className="hover:text-gray-400 font-semibold text-sm">Contato</Link>
            </nav>
        </footer>
    )
}