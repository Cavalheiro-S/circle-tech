import { BrainCog, FileDigit, FolderCode, ShieldCheck } from "lucide-react"
import { MotionSection } from "../components/motion-section"


export const Projects = () => {
    const cards = [
        {
            icon: <FolderCode className="text-secondary w-14 h-14 self-center mb-2" />,
            title: "Desenvolvimento de Software Sob Medida",
            description: "Criamos sistemas personalizados de alta performance, projetados para atender às necessidades específicas de cada cliente. Atuamos em todas as etapas do ciclo de desenvolvimento : Levantamento de requisitos, Desenho de arquitetura, Desenvolvimento, Testes, Implantação, Suporte e manutenção"
        },
        {
            icon: <BrainCog className="text-secondary w-14 h-14 self-center mb-2" />,
            title: "Soluções em Inteligência Artificial",
            description: "Utilizamos IA para automatizar processos, analisar grandes volumes de dados e apoiar a tomada de decisão. Desenvolvemos soluções baseadas em:Machine Learning, Processamento de Linguagem Natural (NLP), Visão Computacional, RPA inteligente (Automação Robótica de Processos)",
        },
        {
            icon: <FileDigit className="text-secondary w-14 h-14 self-center mb-2" />,
            title: "Integração com Sistemas Legados",
            description: "Modernizamos o ecossistema tecnológico da organização com soluções que se integram de forma segura e eficiente aos sistemas existentes, preservando investimentos anteriores.",
        },
        {
            icon: <FolderCode className="text-secondary w-14 h-14 self-center mb-2" />,
            title: "Consultoria e Arquitetura de Soluções",
            description: "Apoiamos decisões estratégicas com avaliação técnica, definição de arquitetura escalável e escolha das melhores tecnologias para cada cenário.",
        },
        {
            icon: <ShieldCheck className="text-secondary w-14 h-14 self-center mb-2" />,
            title: "Segurança, Governança e Conformidade",
            description: "Todos os projetos seguem boas práticas de segurança da informação, LGPD e requisitos técnicos do setor público e corporativo.",
        }
    ]
    return (
        <MotionSection className="bg-primary flex flex-col items-center justify-center w-full h-full text-white font-poppins gap-2 py-40 my-10">
            <div className="flex flex-col items-center justify-center w-full h-full text-white font-poppins gap-2">
                <span className="font-semibold text-sm">Soluções</span>
                <h2 className="text-center text-lg font-semibold">O que nós fazemos por você</h2>
            </div>

            <div className="flex w-full h-full px-20 my-10 flex-wrap gap-4 justify-center">
                {cards?.map((card, index) => (
                    <div key={index} className="flex flex-col gap-2 rounded-sm basis-1/4 justify-center bg-white border-2 p-4 min-h-96">
                        {card.icon}
                        <div className="flex flex-col gap-2">
                            <h3 className="text-zinc-700 text-lg font-semibold font-poppins text-center">{card.title}</h3>
                            <p className="text-sm text-zinc-600 font-inter text-center">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </MotionSection>
    )
}