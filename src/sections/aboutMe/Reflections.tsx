"use client";

import { useState, useEffect } from "react";

import JSON_REFLECTIONS_PATH from "../../../public/data/frases.json";

import SVGRefresh from "@/components/icons/refresh";
import SVGArrow from "@/components/icons/navigation";
import SVGPanelIcon1 from "@/components/icons/mhwi/panel_icon_1";

import SVGAnimate from "@/components/icons/mhwi/SvgAnimate";

const JSON_REFLECTIONS = JSON_REFLECTIONS_PATH;

function Reflection() {

    const [actual, setActual] = useState<number | null>(null);

    useEffect(() => {
        setActual(randomResult());
    }, []);

    if (actual === null) return null;

    const title = JSON_REFLECTIONS.titles[randomTitle()];
    const reflection = JSON_REFLECTIONS.reflexiones[actual];
    const pos = positionJSONObject(actual);

    return (
        <article
            className={`
                max-w-[600px]
                h-auto
                grid
                grid-cols-1
                grid-rows-[auto_auto]
                border-2OFF
                border-red-500OFF
                rounded-2xl
                p-2
                gap-2
            `}
        >

            <header
                className={`flex items-center justify-center`}
            >
                <div className={`relative w-80 aspect-square`}>
                    <SVGAnimate />
                </div>
            </header>

            <main
                className={`flex flex-col items-start justify-center gap-2`}
            >
                <div
                    className={`flex items-center justify-center w-full`}
                >
                    {
                        title
                        &&
                        <span
                            title={JSON_REFLECTIONS.description[0]}
                            className={`
                                flex 
                                flex-row 
                                items-center justify-center 
                                gap-2 
                                font-bold 
                                text-sky-600/90 
                                dark:text-sky-300/90 
                                rounded-lg 
                                px-4 py-1
                            `}
                        >
                            {title}
                        </span>
                    }
                </div>

                <div
                    className={`flex items-center justify-center w-full`}
                >
                    {
                        reflection
                        &&
                        <span
                            className={`font-bold text-zinc-950 dark:text-zinc-50/90`}
                        >
                            {reflection.autor}
                        </span>
                    }
                </div>

                <div
                    className={`
                        bg-zinc-50/10OFF
                        w-full
                        h-[6px]
                        border-y-2
                        dark:border-zinc-50/50
                        border-zinc-950/50
                        rounded-lg
                    `}
                >
                    <SVGPanelIcon1
                        className={`
                            relative
                            z-10
                            top-1/2
                            left-1/2
                            -translate-x-1/2
                            -translate-y-1/2
                            h-4 w-4
                            bg-zinc-400
                            aspect-square
                            fill-zinc-950
                            invert
                            dark:invert-0
                        `}
                    />
                </div>

                <div
                    className={`flex items-center justify-center w-full px-4 py-2`}
                >
                    {
                        reflection
                        &&
                        <span
                            className={`
                                whitespace-normal 
                                text-zinc-950/80 
                                dark:text-zinc-50/70 
                                text-center 
                                transition-all duration-300
                            `}
                        >
                            {reflection.cita}
                        </span>
                    }
                </div>

                <div
                    className={`relative w-full p-2 flex items-center justify-center gap-2`}
                >

                    <button
                        title="Cambiar frase / reflexión"
                        className={`
                            absolute
                            right-0
                            cursor-pointer
                            hover:scale-115
                            transition-all
                            p-2
                            rounded-full
                            invert
                            dark:invert-0
                        `}
                        onClick={() => setActual(prev => randomResult(prev ?? undefined))}
                    >
                        <SVGRefresh
                            stroke="white"
                            strokeWidth={2}
                        />
                    </button>

                    <button
                        title="Anterior reflexión"
                        className={`
                            cursor-pointer
                            hover:scale-115
                            transition-all
                            p-2
                            invert
                            dark:invert-0
                        `}
                        onClick={() => {
                            setActual(prev => prevPos(prev ?? 0));
                        }}
                    >
                        <SVGArrow
                            fill="white"
                            transform="rotate(-90)"
                            strokeWidth={2}
                            height={16}
                        />
                    </button>

                    {reflection &&
                        <div
                            className={`flex items-center justify-center px-4`}
                        >
                            <span className={`
                                    text-zinc-950/90 
                                    dark:text-zinc-50/80 
                                    text-sm 
                                    font-bold
                                `}
                            >
                                {pos}
                            </span>
                        </div>
                    }

                    <button
                        title="Siguiente reflexión"
                        className={`
                            cursor-pointer
                            hover:scale-115
                            transition-all
                            p-2
                            invert
                            dark:invert-0
                        `}
                        onClick={() => {
                            setActual(prev => nextPos(prev ?? 0));
                        }}
                    >
                        <SVGArrow
                            fill="white"
                            transform="rotate(90)"
                            strokeWidth={2}
                            height={16}
                        />
                    </button>
                </div>
            </main>

        </article>
    )
}

function randomResult(exclude?: number): number {
    const length = JSON_REFLECTIONS.reflexiones.length;

    if (length <= 1) return 0;

    let random;

    do {
        random = Math.floor(Math.random() * length);
    } while (random === exclude);

    return random;
}

function randomTitle(): number {
    const length = JSON_REFLECTIONS.titles.length;
    return Math.floor(Math.random() * length);
}

function positionJSONObject(n: number) {
    const actualPos = n + 1;
    return actualPos + " / " + JSON_REFLECTIONS.reflexiones.length;
}

function nextPos(n: number) {
    const maxJSON = JSON_REFLECTIONS.reflexiones.length - 1;
    return n >= maxJSON ? 0 : n + 1;
}

function prevPos(n: number) {
    const maxJSON = JSON_REFLECTIONS.reflexiones.length - 1;
    return n <= 0 ? maxJSON : n - 1;
}


export default Reflection;