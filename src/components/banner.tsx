import Image from "next/image"
import { Button } from "./ui/button"
import { MotionSection } from "./motion-section"

export const Banner = () => {

    return (
        <MotionSection id="home" className="px-5">
            <div className="flex items-center bg-primary w-full h-screen max-h-[600px]  rounded-sm">


                {/* Lado Esquerdo */}
                <div className="flex flex-col p-4 mx-20 max-w-2xl gap-4">
                    <h1 className="text-4xl font-semibold text-white font-poppins leading-tight">
                        Transformamos tecnologia em soluções que <span className="text-secondary">impulsionam</span> o seu futuro
                    </h1>
                    <p className="text-white font-inter font-light leading-relaxed">
                        Desenvolvemos soluções tecnológicas inteligentes e personalizadas que conectam inovação, eficiência e resultados reais. Nosso objetivo é simplificar o complexo, acelerar processos e criar ferramentas digitais que realmente fazem a diferença para o seu negócio. Atuamos com foco em qualidade, segurança e evolução contínua para ajudar empresas a crescerem na era digital.
                    </p>
                    <Button variant="secondary" className="w-1/2 mt-4 text-white">
                        Entre em contato
                    </Button>
                </div>

                {/* Lado Direito */}
                <div className=" flex w-full h-full justify-end">
                    <div className="relative h-full">
                        <Image src="/home-image.jpg" width={900} height={590} alt="Banner" priority className="rounded-tr-sm"/>
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-transparent to-primary"></div>
                    </div>
                </div>

            </div>
        </MotionSection>
    )
}