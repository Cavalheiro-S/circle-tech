import { BrickWall, Cpu, Users } from "lucide-react"
import Image from "next/image";

type CardProps = {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export const About = () => {
    const cards: Array<CardProps> = [
        {
            title: "Soluções bem estruturadas",
            description: "Construímos soluções para atender aos mais diversos tipos de demanda, empregando sistemas de ponta, modelo de gerenciamento eficiente, bem como estrutura computacional ágil e moderna.",
            icon: <BrickWall className="text-zinc-700 w-12 h-12" />,
        },
        {
            title: "Tecnologias de ponta",
            description: "Os sistemas da BTWO utilizam as mais recentes tecnologias, visando – de forma completa – o auxílio aos gestores nas tomadas de decisões, na racionalização do uso de recursos, bem como na ampliação das receitas próprias e no controle dos gastos, sejam públicos ou privados.",
            icon: <Cpu className="text-zinc-700 w-12 h-12" />,
        },
        {
            title: "Equipe altamente capacitada",
            description: "Contamos também com uma equipe altamente capacitada em gerenciamento de projetos, arquitetura e engenharia de software, bem como em implantação, desenvolvimento e manutenção de sistemas.  ",
            icon: <Users className="text-zinc-700 w-12 h-12" />,
        }
    ]
    const renderCard = ({ title, description, icon }: CardProps, index: number) => {

        return (
            <div className="flex items-center gap-6" key={index}>
                {icon}
                <div className="flex flex-col gap-2">
                    <span className="text-zinc-700 font-semibold font-poppins">{title}</span>
                    <p className="text-sm text-gray-400 font-inter leading-6 max-w-xl">
                        {description}
                    </p>
                </div>
            </div>
        )
    }
    return (
        <section id="about" className="flex flex-col items-center justify-center w-full h-full bg-white text-zinc-700 font-poppins gap-2 mt-10">
            <h2 className="text-center text-zinc-800 font-semibold">Quem Somos</h2>
            <span className="font-semibold text-xl">A SOLUÇÃO COMPLETA PARA SEU NEGÓCIO</span>
            <p className="text-sm text-gray-500 font-inter leading-6 text-center max-w-2xl">
                A Circle Tech possui um perfil de gestão arrojado e inovador, tendo como objetivo ofertar aos seus clientes a melhor experiência, por meio do uso de tecnologias avançadas e eficientes.
            </p>

            <div className="flex justify-between items-center w-full px-20 py-10 gap-10 max-w-7xl">
                {/* Imagem */}
                <div>
                    <Image src="/about.jpg" width={600} height={300} alt="Sobre nós" className="rounded-md" />
                </div>
                {/* Cards */}
                <div className="flex flex-col gap-10">
                    {cards.map(renderCard)}
                </div>
            </div>
        </section>
    )
}