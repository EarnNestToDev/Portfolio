"use client";

import AboutMe from "@/components/AboutMe";
import Navbar from "@/components/Navbar";
import Projects from "@/components/main/projects/Projects";
import Tecnologies from "@/components/main/tecnologies/Tecnologies";
import Footer from "@/components/Footer";
import Head from "@/components/Head";
import Skills from "@/components/main/skills/Skills";

export default function MainLayout() {

    return (
        <>
            <Head />

            <Navbar />

            <main className="max-w-[100vw] flex flex-col items-center justify-start mt-24 gap-40">
                <AboutMe />

                <Skills />

                <Projects />

                <Tecnologies />
            </main>

            <Footer />

        </>
    );
}