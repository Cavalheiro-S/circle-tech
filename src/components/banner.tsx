import Image from "next/image"

export const Banner = () => {

    return (
        <div id="home" className="px-5">
            <div className="flex items-center bg-primary w-full h-screen max-h-[600px]  rounded-sm">


                {/* Lado Esquerdo */}
                <div className="flex flex-col p-4 mx-20 max-w-lg gap-2">
                    <h1 className="text-4xl font-semibold text-white font-poppins leading-tight">
                        Desenvolvendo suas ideias com <span className="text-cyan-400">velocidade</span>
                    </h1>
                    <p className="text-sm text-white font-inter font-extralight leading-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate lectus ut semper dictum. Sed ornare non tellus vitae ornare. Fusce viverra nibh metus, quis aliquam erat malesuada a. Ut venenatis sapien non commodo tempor. In id justo nisl. Proin ultrices elit sed egestas auctor. Pellentesque sapien sapien, vehicula sed molestie ut, fermentum non mi.
                    </p>
                    <button className="bg-cyan-400 text-white font-semibold py-2 px-4 rounded-md mt-4 hover:bg-cyan-400 transition duration-300 cursor-pointer">
                        Entrar em contato
                    </button>
                </div>

                {/* Lado Direito */}
                <div className=" flex w-full h-full justify-end">
                    <div className="relative h-full">
                        <Image src="/home-image.jpg" width={900} height={590} alt="Banner" priority />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-transparent to-primary"></div>
                    </div>
                </div>

            </div>
        </div>
    )
}