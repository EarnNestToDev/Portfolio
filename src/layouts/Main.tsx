import Presentation from "@/sections/main/Presentation";
import Navbar from "@/sections/main/Navbar";
import Projects from "@/sections/main/projects/Projects";
import Tecnologies from "@/sections/main/tecnologies/Tecnologies";
import Skills from "@/sections/main/skills/Skills";
import AboutMe from "@/sections/main/AboutMe";

import Footer from "@/components/ui/Footer";

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