'use client'
import { Mail, MapPinned, Phone } from "lucide-react";
import { Button } from "../components/ui/button";
import { MotionSection } from "../components/motion-section";
import { motion } from "motion/react";

type CardProps = {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const cards = [
    {
        title: "Nossa localização",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        icon: <MapPinned size={48   } className="text-zinc-700" />,
    },
    {
        title: "Telefone",
        description: "(41) 3333-3333",
        icon: <Phone size={48} className="text-zinc-700" />,
    },
    {
        title: "Endereço de E-mail",
        description: "email@email.com.br",
        icon: <Mail size={48} className="text-zinc-700" />,
    }
]

const variantsForm = {
    hidden: { opacity: 0.1, x: 200 },
    visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: { duration: 1, ease: 'easeOut' }
    }
}

const variantsMessage = {
    hidden: { opacity: 0.1, x: -200 },
    visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: { duration: 1, ease: 'easeOut' }
    }
}

export const Contact = () => {

    const renderCard = ({ title, description, icon }: CardProps, index: number) => {

        return (
            <div className="flex items-center gap-6" key={index}>
                <div className="w-16 h-16">
                    {icon}
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-zinc-700 font-semibold font-poppins">{title}</span>
                    <p className="text-sm text-gray-500 font-inter leading-6 max-w-xl">
                        {description}
                    </p>
                </div>
            </div>
        )
    }

    return (
        <MotionSection id="contact" className="flex flex-col items-center justify-center w-full h-full bg-white text-zinc-700 font-poppins gap-2 mt-10">
            <h2 className="text-center text-zinc-800 font-semibold">Contato</h2>
            <span className="font-semibold text-xl px-2">Estamos prontos para ajudar você</span>
            <p className="text-sm text-gray-500 font-inter leading-6 text-center max-w-2xl">
                Se você está pronto para transformar sua empresa com soluções tecnológicas inovadoras, entre em contato conosco. Nossa equipe está pronta para entender suas necessidades e apresentar a melhor solução para o seu negócio.
            </p>

            {/* content */}
            <div className="flex flex-col md:flex-row my-10 px-2">
                <motion.div variants={variantsMessage} className="flex flex-col justify-center items-center w-full px-2 md:px-20 py-10 gap-10">
                    <h3 className="text-3xl text-center md:text-left">Entre em contato agora mesmo</h3>
                    <div className="flex flex-col gap-10">
                        {cards.map(renderCard)}
                    </div>
                </motion.div>

                <div className="w-full">
                    <motion.form variants={variantsForm} className="flex flex-col gap-4 w-full p-10 bg-white rounded-md shadow-md border-8 border-t-secondary border-l-0 border-b-0 border-r-0">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm" htmlFor="name">Nome</label>
                            <input id="name" type="text" placeholder="Seu nome" className="border border-gray-300 p-2 rounded-sm text-sm font-inter" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm" htmlFor="email">E-mail</label>
                            <input id="email" type="email" placeholder="Seu e-mail" className="border border-gray-300 p-2 rounded-sm text-sm font-inter" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm" htmlFor="name">Área de interesse</label>
                            <input id="name" type="text" placeholder="Ex: Novo projeto" className="border border-gray-300 p-2 rounded-sm text-sm font-inter" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm" htmlFor="message">Mensagem</label>
                            <textarea placeholder="Mensagem que quer nos enviar" className="border border-gray-300 p-2 rounded-md h-32 text-sm font-inter"></textarea>
                        </div>
                        <Button variant="secondary" className="w-fit mt-4 text-white place-self-end cursor-pointer">
                            Enviar
                        </Button>
                    </motion.form>
                </div>
            </div>
        </MotionSection>
    )
}