import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { CheckCircle } from "lucide-react"
import { MotionSection } from "./motion-section"


export const Projects = () => {
    const cards = [
        {
            title: "Desenvolvimento de Software Sob Medida",
            description: "Criamos sistemas personalizados de alta performance, projetados para atender às necessidades específicas de cada cliente. Atuamos em todas as etapas do ciclo de desenvolvimento",
            options: [
                "Levantamento de requisitos",
                "Desenho de arquitetura",
                "Desenvolvimento",
                "Testes",
                "Implantação",
                "Suporte e manutenção"
            ]
        },
        {
            title: "Soluções em Inteligência Artificial",
            description: "Utilizamos IA para automatizar processos, analisar grandes volumes de dados e apoiar a tomada de decisão. Desenvolvemos soluções baseadas em:",
            options: [
                "Machine Learning: modelos preditivos, classificação, recomendação",
                "Processamento de Linguagem Natural (NLP): chatbots, análise de sentimentos, extração de informações de documentos",
                "Visão Computacional: reconhecimento de padrões, análise de imagens e vídeos",
                "RPA inteligente (Automação Robótica de Processos): integração com sistemas legados para reduzir tarefas manuais"
            ]
        },
        {
            title: "Integração com Sistemas Legados",
            description: "Modernizamos o ecossistema tecnológico da organização com soluções que se integram de forma segura e eficiente aos sistemas existentes, preservando investimentos anteriores.",
        },
        {
            title: "Consultoria e Arquitetura de Soluções",
            description: "Apoiamos decisões estratégicas com avaliação técnica, definição de arquitetura escalável e escolha das melhores tecnologias para cada cenário.",
        },
        {
            title: "Segurança, Governança e Conformidade",
            description: "Todos os projetos seguem boas práticas de segurança da informação, LGPD e requisitos técnicos do setor público e corporativo.",
        }
    ]
    return (
        <MotionSection className="bg-primary flex flex-col items-center justify-center w-full h-full text-white font-poppins gap-2 py-10 my-10"> 
            <div className="flex flex-col items-center justify-center w-full h-full text-white font-poppins gap-2">
                <span className="font-semibold text-sm">Soluções</span>
                <h2 className="text-center text-lg font-semibold">O que nós fazemos por você</h2>
            </div>

            <div className="flex w-full h-full px-20 my-10">
                <Carousel>
                    <CarouselContent>
                        {cards?.map((card, index) => (
                            <CarouselItem key={index} className="basis-1/3 rounded-sm flex items-center justify-center mx-4 p-4 bg-background">
                                <div className="flex flex-col w-full gap-2 rounded-sm">
                                    <h3 className="text-zinc-700 text-lg font-semibold font-poppins">{card.title}</h3>
                                    <p className="text-sm text-gray-500 font-inter">{card.description}</p>
                                    <div className="flex flex-col gap-1 mt-4 w-full">
                                        {card.options?.map((option, indexOption) => {
                                            return (
                                                <div key={indexOption} className="flex items-center gap-2">
                                                    <CheckCircle size={20} className="text-secondary"/>
                                                    <span className="text-sm text-gray-500 font-inter">{option}</span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="bg-white" variant={"secondary"}/>
                    <CarouselNext className="bg-white" variant={"secondary"}/>
                </Carousel>
            </div>
        </MotionSection>
    )
}