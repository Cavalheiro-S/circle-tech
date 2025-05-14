import { BrickWall, Cpu, Users } from "lucide-react"
import Image from "next/image";
import { MotionSection } from "../components/motion-section";
import ImageAbout from "../assets/images/about.jpg"

type CardProps = {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export const About = () => {
    const cards: Array<CardProps> = [
        {
            title: "Soluções bem estruturadas",
            description: "Atuamos com foco em atender as necessidades do setor público e de grandes organizações, oferecendo sistemas robustos, seguros e sob medida.",
            icon: <BrickWall className="text-zinc-700 w-12 h-12" />,
        },
        {
            title: "Tecnologias de ponta",
            description: "Acreditamos que a tecnologia deve simplificar processos, ampliar o acesso à informação e gerar impacto positivo para instituições e para a sociedade. Por isso, entregamos soluções que não apenas resolvem problemas, mas que também criam valor no longo prazo.",
            icon: <Cpu className="text-zinc-700 w-12 h-12" />,
        },
        {
            title: "Equipe altamente capacitada",
            description: "Nosso time é formado por profissionais experientes em engenharia de software, ciência de dados e arquitetura de soluções. Trabalhamos com metodologias ágeis, priorizando entregas eficientes, comunicação clara e resultados concretos.  ",
            icon: <Users className="text-zinc-700 w-12 h-12" />,
        }
    ]

    const renderCard = ({ title, description, icon }: CardProps, index: number) => {

        return (
            <div className="flex flex-col md:flex-row items-center gap-6" key={index}>
                {icon}
                <div className="flex flex-col gap-2 text-center md:text-left">
                    <span className="text-zinc-700 font-semibold font-poppins">{title}</span>
                    <p className="text-sm text-gray-500 font-inter leading-6 max-w-xl">
                        {description}
                    </p>
                </div>
            </div>
        )
    }
    return (
        <MotionSection id="about" className="flex flex-col items-center justify-center w-full h-full bg-white text-zinc-700 font-poppins gap-2 mt-10">
            <h2 className="text-center text-zinc-800 font-semibold">Quem Somos</h2>
            <span className="font-semibold text-xl text-center md:text-left">A SOLUÇÃO COMPLETA PARA SEU NEGÓCIO</span>
            <p className="text-sm text-gray-500 font-inter leading-6 text-center max-w-2xl">
                Somos uma empresa de tecnologia especializada em desenvolvimento de software e soluções em inteligência artificial. Atuamos com foco em atender as necessidades do setor público e de grandes organizações, oferecendo sistemas robustos, seguros e sob medida.
            </p>

            <div className="flex flex-col xl:flex-row justify-center items-center w-full px-2 md:px-20 py-10 gap-10 2xl:gap-40">
                {/* Imagem */}
                <Image src={ImageAbout} alt="Sobre nós" className="rounded-md max-w-md w-full" />
                {/* Cards */}
                <div className="flex flex-col gap-10">
                    {cards.map(renderCard)}
                </div>
            </div>
        </MotionSection>
    )
}