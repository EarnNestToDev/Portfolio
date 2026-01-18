"use client";

import Presentation from "@/components/Presentation";
import Navbar from "@/components/Navbar";
import Projects from "@/components/main/projects/Projects";
import Tecnologies from "@/components/main/tecnologies/Tecnologies";
import ContactMe from "@/components/main/contactMe";
import Footer from "@/components/Footer";
import Head from "@/components/Head";
import Skills from "@/components/main/skills/Skills";
import AboutMe from "@/components/AboutMe";

export default function MainLayout() {

    return (
        <>
            <Head />

            <Navbar />

            <main className="max-w-[100vw] flex flex-col items-center justify-start mt-24 gap-40">
                <Presentation />

                <Skills />

                <Projects />

                <Tecnologies />

                <AboutMe />

                <ContactMe />
            </main>

            <Footer />

        </>
    );
}