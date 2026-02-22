import ContactMe from "@/sections/main/ContactMe";

import SVGUser from "@/components/icons/user_outline";

// https://drive.google.com/thumbnail?id=1l91mrhItezrFfsVT4jp6hpkPgQsvhUNa&sz=1000
// https://drive.google.com/thumbnail?id=1WxFjAErWLAdudlFtsdZKRd7jOLD-2jSq&sz=1000
// https://drive.google.com/thumbnail?id=1LU9sytYwj1ZG-nNlsDHQzlYdJ-knJ6z3&sz=1000

const imgElements = {
    TITLE: "Zep zep zep 👽...",
    ALT_NAME: "About_Me",
    IMG_URL: "https://drive.google.com/thumbnail?id=1LU9sytYwj1ZG-nNlsDHQzlYdJ-knJ6z3&sz=1000",
    CLIP_PATH: "[clip-path:polygon(0_50%,_23%_100%,_100%_86%,_95%_3%,_19%_0)]",
    BOX_SHADOW: "shadow-[inset_0px_30px_50px_-12px_rgba(50,50,93,0.25),inset_0px_18px_26px_-18px_rgba(0,0,0,0.3)]",
    MASK_IMAGE: "[mask-image:linear-gradient(to_bottom,_white_30%,_transparent_95%_95%)]"
}

const AboutMe = () => {

    return (
        <section className="w-full md:w-[600px] flex flex-col items-center justify-center gap-2 rounded-lg p-2" id="aboutMe">

            <article className="md:grid md:grid-cols-[2fr_1fr] md:grid-rows-[1fr_10fr_1fr] w-full flex flex-col items-center justify-center gap-4 p-2">

                <header className="text-2xl font-bold w-content rounded-lg p-2 flex flex-row items-center gap-2">
                    <SVGUser width={36} height={36} stroke="#e37600" />
                    <span>
                        Sobre mí...
                    </span>
                </header>

                <main className="relative row-span-2 min-w-[200px] min-h-[200px]">
                    <div className="absolute z-10 w-full h-full rounded-4xl border-2 border-orange-500 rotate-3 md:rotate-6" />
                    <img
                        title={imgElements.TITLE}
                        src={imgElements.IMG_URL}
                        alt={imgElements.ALT_NAME}
                        loading="lazy"
                        className="absolute z-20 w-full h-full rounded-4xl bg-white border-0 -rotate-3 md:-rotate-6 md:grayscale hover:grayscale-0 hover:transition-all duration-300"
                    />
                </main>

                <main className="row-start-2 flex flex-col items-start justify-start text-gray-300 text-base">
                    <span>
                        Fascinado por las computadoras desde pequeño
                        e impulsado por la curiosidad de crear, dediqué
                        mi lógica y análisis para la comprensión y el uso
                        de lenguajes de programación para el desarrollo
                        de software. En el transcurso se me presentó la
                        oportunidad de cursar la carrera de Ingeniería
                        en Sistemas Computacionales de la cual gracias a Dios
                        hoy soy egresado.
                    </span>
                    <span>
                        Por supuesto que me encanta programar, fue
                        Java quien me acogió y me crió durante mis
                        primeros años de desarrollo, con el tiempo
                        aprendí que no siempre el mismo lenguaje es
                        el óptimo para cada situación, por lo que
                        he explorado frecuentemente diversas
                        tecnologías y herramientas en busca identificar
                        sus límites técnicos junto con el crecimiento
                        profesional en el rubro.
                    </span>
                    <span>
                        Cabe recalcar que busco activamente
                        la oportunidad de ejercer profesionalmente en el área
                        para mi sustento económico.
                    </span>
                </main>

                <footer className="col-span-2 row-start-3">
                    <ContactMe />
                </footer>

            </article>



        </section>
    );
}

export default AboutMe;