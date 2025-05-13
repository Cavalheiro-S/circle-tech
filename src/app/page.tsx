import { About } from "@/components/about";
import { Banner } from "@/components/banner";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <>
      <div className="grid grid-rows-[80px_1fr_200px] items-center bg-white justify-items-center min-h-screen font-inter overflow-x-hidden scroll-smooth">
        <Header />
        <main className="flex flex-col w-full h-full">
          <Banner />
          <About />
          <Projects />
          <Contact />
        </main>
        <div className="w-full h-full p-5">
          <Footer />
        </div>
      </div>
    </>
  );
}
