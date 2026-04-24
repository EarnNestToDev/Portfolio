"use client";

import { useState } from "react";

import Toast from "@/components/ToastDefault";
import ButtonLink from "@/components/ui/ButtonLink";

import SVGFilecertificate from "@/components/icons/filecertificate";
// import Building from "@/components/icons/building";
import SVGFileDownload from "@/components/icons/filedownload";
import SVGCircleDashedCheck from "@/components/icons/circledashedcheck";
import SVGCircleMinus from "@/components/icons/circleminus";
import SVGEmail from "@/components/icons/gmail";
import SVGLinkedin from "@/components/icons/linkedin";
import SVGGithub from "@/components/icons/github";
import SVGPlus from "@/components/icons/chevron_arrow";
import SvgClick from "@/components/icons/handclick";

const DEFAULT_STATUS = 1;

const PDF_CV_URL = "./docs/CV-Ernesto_De_La_Cruz_Campos.pdf";

const imgElements = {
    IMG_PROFILE_URL: "./image/img_profile.webp",
    ALT_NAME: "Ernesto_De_La_Cruz_Campos",
    // CLIP_PATH: "[clip-path:polygon(0_50%,_23%_100%,_100%_86%,_95%_3%,_19%_0)]",
    CLIP_PATH: "",
    BOX_SHADOW: "dark:shadow-[inset_0px_30px_50px_-12px_rgba(50,50,93,0.25),inset_0px_18px_26px_-18px_rgba(0,0,0,0.3)]",
    // MASK_IMAGE: "dark:[mask-image:linear-gradient(to_bottom,_white_30%,_transparent_95%_95%)]"
    // MASK_IMAGE: "dark:mask-b-from-20% dark:mask-b-to-95%"
    MASK_IMAGE: ""
}

const DEFAULT_SIZE = 24;

const CONTACTO = {
    EMAIL: "earnnesttodev@gmail.com"
}

const SVG = {
    email: <SVGEmail width={DEFAULT_SIZE} height={DEFAULT_SIZE} />,
    linkedin: <SVGLinkedin width={DEFAULT_SIZE} height={DEFAULT_SIZE} fill="white" />,
    github: <SVGGithub width={DEFAULT_SIZE} height={DEFAULT_SIZE} fill="white" className="md:invert-0 dark:invert-0 invert" />
}

const Presentation = () => {

    const [isShowDescription, setShowDescription] = useState(false);

    return (
        <section
            id="presentation"
            className={`
                min-h-screen 
                w-full 
                flex 
                items-center justify-center 
                md:mt-0
                ${isShowDescription ? 'mt-14' : ''}
                relative
            `}
        >
            <a
                className={`
                    invert
                    dark:invert-0
                    absolute 
                    ${isShowDescription
                        ? 'translate-y-full md:translate-y-0'
                        : ''
                    }
                    bottom-4
                    md:bottom-8 
                    p-4
                    z-10
                    rounded-full
                    bg-zinc-700/60
                    md:bg-zinc-900
                    hover:bg-orange-400
                    animate-[bounce_3s_ease-in_infinite]
                    transition-all duration-700
                    cursor-pointer
                `}
                href={"#skills"}
                onClick={handleScroll}
            >
                <SVGPlus
                    stroke="white"
                    strokeWidth={4}
                    transform="rotate(90)"
                />
            </a>

            <article
                className={`
                    bg-red-500OFF
                    max-w-[90vw]
                    md:w-[500px]
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-4
                    text-gray-700
                    dark:text-gray-200
                    rounded-lg
                    p-2
                `}
            >
                <div
                    className={`
                        flex flex-col 
                        md:grid 
                        md:grid-cols-[100fr_1fr] 
                        md:grid-rows-[auto_auto_auto] 
                        gap-4 
                        items-center justify-center
                    `}
                >

                    <div
                        className={`
                            md:row-span-3 col-start-2 row-start-1
                            flex 
                            items-center justify-center
                            relative
                        `}
                    >
                        {setStatus(DEFAULT_STATUS)}
                        <img
                            title="Hola xd"
                            src={imgElements.IMG_PROFILE_URL}
                            alt={imgElements.ALT_NAME}
                            className={`
                                z-1
                                border-2
                                ${DEFAULT_STATUS
                                    ? "border-lime-500"
                                    : "border-red-500"
                                }
                                
                                rounded-lg 
                                max-w-[150px] 
                                max-h-[200px] 
                                aspect-2/3 `
                                + imgElements.CLIP_PATH
                                + " "
                                + imgElements.BOX_SHADOW
                                + " "
                                + imgElements.MASK_IMAGE
                            }
                        />
                    </div>

                    <div
                        className={`
                            md:col-start-1 
                            md:row-start-1
                            flex flex-col 
                            justify-evenly 
                            gap-6
                        `}
                    >
                        <div
                            className={`
                                bg-orange-400
                                w-full 
                                flex flex-col 
                                items-start justify-start 
                                gap-2 p-2
                                rounded-lg
                                group
                            `}
                        >
                            <p
                                data-name="Ernesto Campos"
                                data-dev="@earnnesttodev"
                                className={`
                                    text-4xl 
                                    font-bold 
                                    text-zinc-50
                                    after:content-[attr(data-name)] 
                                    md:hover:after:content-[attr(data-dev)] 
                                    transition-all duration-600
                                `}
                            >
                            </p>
                        </div>

                        <div
                            className={`
                                grid 
                                grid-cols-[auto_auto] 
                                grid-rows-1 
                                bg-zinc-100 
                                dark:bg-zinc-900 
                                text-base 
                                rounded-md
                            `}
                        >
                            <div className={`flex items-center justify-center p-3 md:p-0`}>
                                <SVGFilecertificate width={24} height={24} stroke="#6ffd59" />
                            </div>
                            <div className={`flex flex-col items-start justify-center py-2`}>
                                <span className={`text-zinc-900 dark:text-zinc-50/70 text-sm font-bold`}>
                                    Ing. Sistemas Computacionales
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className={`
                            row-start-3 
                            h-content 
                            gap-4 
                            flex 
                            flex-row 
                            flex-wrap 
                            md:justify-end
                            justify-center
                        `}
                    >

                        <button
                            data-text="Copiar Email"
                            title="Copiar Email"
                            className={`
                                    w-fit
                                    flex 
                                    flex-row 
                                    items-center justify-center 
                                    gap-2 rounded-full 
                                    bg-zinc-900
                                    dark:bg-zinc-50
                                    md:bg-zinc-800/40 
                                    hover:bg-zinc-50
                                    font-bold
                                    text-black
                                    md:text-white
                                    md:hover:text-black
                                    cursor-pointer
                                    p-2 
                                    hover:px-4
                                    after:content-none 
                                    after:content-[attr(data-text)] 
                                    md:hover:after:content-[attr(data-text)] 
                                    transition-all duration-600
                                `}
                            onClick={() => {
                                copiarAlPortapapeles(CONTACTO.EMAIL);
                            }}
                        >
                            {SVG.email}
                        </button>

                        <ButtonLink
                            title="LinkedIn"
                            href="https://www.linkedin.com/in/ernesto-dlc-campos-304hellsinger"
                            icon={SVG.linkedin}
                            className={`
                                flex 
                                flex-row 
                                items-center justify-center 
                                gap-2
                                font-bold
                                md:text-transparent
                                md:hover:text-white
                                bg-sky-600
                                md:bg-zinc-800/40
                                cursor-pointer
                                p-2
                                hover:px-4
                                rounded-full
                                hover:bg-sky-600
                                after:content-none 
                                after:content-['Ver_LinkedIn'] 
                                md:hover:after:content-['Ver_LinkedIn'] 
                                transition-all duration-600
                            `}
                        />
                        <ButtonLink
                            title="GitHub"
                            href="https://github.com/EarnNestToDev"
                            icon={SVG.github}
                            className={`
                                flex 
                                flex-row 
                                items-center justify-center 
                                gap-2
                                font-bold
                                md:text-transparent
                                md:hover:text-white
                                invert
                                md:invert-0
                                bg-zinc-100
                                md:dark:bg-zinc-900
                                dark:bg-black
                                md:bg-zinc-800/40
                                hover:bg-zinc-800
                                cursor-pointer
                                p-2
                                hover:px-4
                                rounded-full
                                hover:invert
                                after:content-none 
                                after:content-['Ver_GitHub'] 
                                md:hover:after:content-['Ver_GitHub'] 
                                transition-all duration-600
                            `}
                        />

                        <a
                            href={PDF_CV_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-text="Descargar CV"
                            title="Descargar CV"
                            className={`
                                    w-fit
                                    bg-orange-500
                                    md:bg-zinc-800/40 
                                    hover:bg-orange-500
                                    font-bold
                                    text-white
                                    md:text-transparent
                                    md:hover:text-white
                                    cursor-pointer
                                    p-2
                                    px-4
                                    md:px-2
                                    hover:px-4
                                    rounded-full
                                    flex
                                    flex-row
                                    items-center
                                    justify-center
                                    gap-2
                                    md:after:content-none 
                                    after:content-[attr(data-text)] 
                                    md:hover:after:content-['Ver_CV'] 
                                    transition-all duration-600
                                `}
                        >
                            <SVGFileDownload width={24} height={24} fill="white" />
                        </a>

                    </div>

                </div>

                <div
                    className="w-full flex flex-col p-2 md:p-0"
                >

                    {!isShowDescription
                        ? buttonShowDescription()
                        : null
                    }


                    {isShowDescription &&
                        (
                            <>
                                <p
                                    className={`
                                        text-lg 
                                        text-zinc-900/80 
                                        dark:text-zinc-50/80 
                                        line-height-1.3
                                    `}
                                >
                                    Poseo más de
                                    <span className={`font-bold text-green-500 pl-2 pr-2`}>
                                        2 años
                                    </span>
                                    de experiencia en el desarrollo web,
                                    software de escritorio, móvil,
                                    además de gestión en base de datos
                                    relacionales con un fuerte enfoque en Back-end
                                    especialmente con
                                    <span className={`font-bold text-orange-400 px-2`}>
                                        Java
                                    </span>
                                    y
                                    <span className={`font-bold text-blue-400 pl-2`}>
                                        PHP
                                    </span>
                                    .
                                </p>
                            </>
                        )
                    }
                </div>

            </article>

        </section>
    );

    function buttonShowDescription() {
        return (
            <button
                onClick={() => setShowDescription(true)}
                className={`
                        flex
                        flex-row
                        items-center
                        justify-center
                        cursor-pointer 
                        font-bold
                        bg-zinc-100 
                        dark:bg-zinc-900 
                        dark:hover:bg-black
                        hover:invert
                        p-2 gap-2
                        rounded-lg
                        transition-all duration-600
                    `}
            >
                <SvgClick
                    width={24}
                    height={24}
                    stroke="white"
                    className="invert dark:invert-0"
                />
            </button>
        )
    }

}


function setStatus(status: number) {
    switch (status) {
        case 0:
            return <article
                title="Amarrado hasta nuevo aviso xd"
                data-text="Ocupado"
                className={`
                    absolute
                    top-0
                    right-0
                    translate-x-1/2
                    -translate-y-1/2
                    z-2
                    bg-red-600/80
                    text-white
                    md:text-transparent
                    md:hover:text-white
                    p-2
                    hover:px-4
                    rounded-2xl
                    flex
                    flex-row
                    items-center
                    justify-center
                    gap-2
                    text-sm
                    font-bold
                    md:after:content-none
                    after:content-[attr(data-text)]
                    hover:after:content-[attr(data-text)]
                    transition-all duration-600
                `}
            >
                <SVGCircleMinus width={16} height={16} stroke="white" />
            </article>;
        case 1:
            return <article
                title="Auxilio, necesito chamba xd"
                data-text="Disponible"
                className={`
                    absolute
                    top-0
                    right-0
                    translate-x-1/2
                    -translate-y-1/2
                    z-2
                    bg-lime-600
                    text-white
                    md:text-transparent
                    md:hover:text-white
                    p-2
                    hover:px-4
                    rounded-2xl
                    flex
                    flex-row
                    items-center
                    justify-center
                    gap-2
                    text-sm
                    font-bold
                    md:after:content-none
                    after:content-[attr(data-text)]
                    hover:after:content-[attr(data-text)]
                    transition-all duration-600
                    md:animate-pulse
                    md:hover:animate-none
                `}
            >
                <SVGCircleDashedCheck width={16} height={16} stroke="white" />
            </article>;
        default:
            return "";
    }
}

async function copiarAlPortapapeles(text: string) {
    try {
        await navigator.clipboard.writeText(text);
        Toast("Copiado al portapapeles");
    } catch (err) {
        Toast("Error al copiar");
    }
}

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");

    if (!href || !href.startsWith("#")) return;

    e.preventDefault();

    const targetId = href.slice(1);
    const elem = document.getElementById(targetId);

    if (!elem) {
        console.warn("No existe:", targetId);
        return;
    }

    const yOffset = -40; // altura de tu navbar
    const y = elem.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({
        top: y,
        behavior: "smooth"
    });
};

export default Presentation;