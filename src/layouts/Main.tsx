import Presentation from "@/components/main/Presentation";
import Navbar from "@/components/main/Navbar";
import Projects from "@/components/main/projects/Projects";
import Tecnologies from "@/components/main/tecnologies/Tecnologies";
import Skills from "@/components/main/skills/Skills";
import AboutMe from "@/components/main/AboutMe";

import Footer from "@/components/Footer";

export default function MainLayout() {

    return (
        <>
            <Navbar />

            <main className="max-w-[100vw] flex flex-col items-center justify-start mt-24 gap-40">
                <Presentation />

                <Skills />

                <Projects />

                <Tecnologies />

                <AboutMe />
            </main>

            <Footer />

        </>
    );
}