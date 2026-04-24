import { useState } from "react";

import Test1 from "@/sections/aboutMe/Extras";

import SVGUser from "@/components/icons/user_outline";
import SVGEye from "@/components/icons/eye";
import SVGEyeClosed from "@/components/icons/eyeclosed";

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

    const [isShowExtras, setShowExtras] = useState(false);

    return (
        <section
            id="aboutMe"
            className={`
                w-full 
                md:w-[600px] 
                flex 
                flex-col 
                items-center 
                justify-center 
                gap-8 
                rounded-lg 
                p-2
            `}
        >

            <article
                className={`
                    md:grid 
                    md:grid-cols-[2fr_1fr] 
                    md:grid-rows-[auto_auto] 
                    w-full 
                    flex 
                    flex-col 
                    items-center 
                    justify-center 
                    gap-4 
                    p-2
                `}
            >

                <header
                    className={`
                        text-2xl 
                        font-bold 
                        w-content 
                        rounded-lg 
                        p-2 
                        flex 
                        flex-row 
                        items-center 
                        gap-2
                    `}
                >
                    <SVGUser width={36} height={36} stroke="#e37600" />
                    <span>
                        Sobre mí...
                    </span>
                </header>

                <main
                    className={`relative row-span-2 min-w-[200px] min-h-[200px]`}>
                    <div
                        className={`
                            absolute 
                            z-10 
                            w-full 
                            h-full 
                            rounded-4xl 
                            bg-orange-500 
                            rotate-3 
                            md:rotate-6
                        `}
                    />
                    <img
                        title={imgElements.TITLE}
                        src={imgElements.IMG_URL}
                        alt={imgElements.ALT_NAME}
                        loading="lazy"
                        className={`
                            absolute 
                            z-20 
                            w-full 
                            h-full 
                            rounded-4xl 
                            bg-white
                            dark:bg-white 
                            border-0 
                            -rotate-3 
                            md:-rotate-6 
                            md:grayscale 
                            hover:grayscale-0 
                            hover:transition-all duration-300
                        `}
                    />
                </main>

                <main
                    className={`
                        row-start-2 
                        flex 
                        flex-col 
                        items-start 
                        justify-start 
                        text-gray-900/80 
                        dark:text-gray-300 
                        text-base
                    `}
                >
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
                        profesional en el rubro hasta el día de hoy.
                    </span>
                </main>

            </article>

            {!isShowExtras
                ? buttonShow(true)
                : buttonShow(false)
            }

            {isShowExtras && (
                <>
                    <article
                        className={`
                            flex 
                            flex-col 
                            items-center 
                            justify-center 
                            gap-8 
                            w-full 
                        `}
                    >
                        <Test1 />
                    </article>

                    {buttonShow(false)}
                </>
            )}

        </section>
    );

    function buttonShow(show: boolean) {
        if (show) {
            return (
                <button
                    data-text="Ver más..."
                    onClick={() => setShowExtras(true)}
                    className={`
                        flex
                        flex-row
                        items-center
                        justify-center
                        cursor-pointer 
                        text-white 
                        font-bold
                        bg-orange-500
                        md:bg-zinc-800
                        hover:bg-orange-500 
                        p-2
                        rounded-full
                        gap-2
                        hover:px-4
                        after:content-none 
                        after:content-[attr(data-text)] 
                        md:hover:after:content-[attr(data-text)] 
                        transition-all duration-600
                        animate-[bounce_3s_ease-in_infinite]
                    `}
                >
                    <SVGEye
                        width={32}
                        height={32}
                        stroke={"white"}
                    />
                </button>
            )
        } else {
            return (
                <button
                    data-text="Cerrar"
                    onClick={() => setShowExtras(false)}
                    className={`
                        flex
                        flex-row
                        items-center
                        justify-center
                        cursor-pointer 
                        text-white 
                        font-bold
                        bg-red-500
                        md:bg-zinc-800
                        hover:bg-red-500
                        p-2
                        rounded-full
                        gap-2
                        hover:px-4
                        after:content-none 
                        after:content-[attr(data-text)] 
                        md:hover:after:content-[attr(data-text)] 
                        transition-all duration-600
                    `}
                >
                    <SVGEyeClosed
                        width={32}
                        height={32}
                        stroke={"white"}
                    />
                </button>
            )
        }
    }
}

export default AboutMe;