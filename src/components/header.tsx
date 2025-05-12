import Link from "next/link"

export const Header = () => {

    return (
        <header className="flex justify-between items-center p-4 bg-white text-zinc-700 px-20 w-full h-full font-poppins">
            <div className="flex items-center">
                <h1 className="text-xl font-bold">Circle Tech</h1>
            </div>
            <nav className="flex space-x-4">
                <Link href="#home" className="hover:text-gray-400 font-semibold">Quem Somos</Link>
                <Link href="#about" className="hover:text-gray-400 font-semibold">Soluções</Link>
                <Link href="#contact" className="hover:text-gray-400 font-semibold">Contato</Link>
            </nav>
        </header>
    )
}