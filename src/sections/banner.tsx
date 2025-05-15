'use client'

import Image from "next/image"
import { Button } from "../components/ui/button"
import { MotionSection } from "../components/motion-section"
import { useRouter } from "next/navigation"
import ImageBanner from "../assets/images/home-image.jpg"
export const Banner = () => {
    const router = useRouter()
    return (
        <MotionSection id="home" className="px-1 md:px-5">
            <div className="flex flex-col md:flex-row items-center justify-center bg-primary w-full md:max-h-[600px] rounded-sm p-2 md:pt-0 md:pr-0 md:pb-0">
                {/* Lado Esquerdo */}
                <div className="flex flex-col p-1 sm:p-10 md:mx-20 xl:max-w-2xl gap-4 w-full">
                    <h1 className="text-xl md:text-4xl font-semibold text-white font-poppins leading-tight text-center md:text-left">
                        Transformamos tecnologia em soluções que <span className="text-secondary">impulsionam</span> o seu futuro
                    </h1>   
                    <p className="text-sm md:text-base text-white font-inter font-light leading-relaxed text-justify md:text-left ">
                        Desenvolvemos soluções tecnológicas inteligentes e personalizadas que conectam inovação, eficiência e resultados reais. Nosso objetivo é simplificar o complexo, acelerar processos e criar ferramentas digitais que realmente fazem a diferença para o seu negócio. Atuamos com foco em qualidade, segurança e evolução contínua para ajudar empresas a crescerem na era digital.
                    </p>
                    <Button onClick={() => { router.push("#contact") }} variant="secondary" className="w-full md:w-fit mt-4 text-white cursor-pointer">
                        Entre em contato
                    </Button>
                </div>

                {/* Lado Direito */}
                <div className="hidden w-full h-full justify-end 2xl:flex">
                    <div className="relative h-full">
                        <Image src={ImageBanner} alt="Banner" priority className="rounded-tr-sm h-full max-w-4xl w-full" />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-transparent to-primary"></div>
                    </div>
                </div>

            </div>
        </MotionSection>
    )
}