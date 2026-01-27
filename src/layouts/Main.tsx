import Presentation from "@/pages/main/Presentation";
import Navbar from "@/pages/main/Navbar";
import Projects from "@/pages/main/projects/Projects";
import Tecnologies from "@/pages/main/tecnologies/Tecnologies";
import Skills from "@/pages/main/skills/Skills";
import AboutMe from "@/pages/main/AboutMe";

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