import { useState, useEffect } from "react";

import JSON_REFLECTIONS_PATH from "../../../public/data/frases.json";

import SVGRefresh from "@/components/icons/refresh";
import SVGYT from "@/components/icons/youtube";
import SVGMessage from "@/components/icons/messagecircle";
import SVGVynil from "@/components/icons/vynil";

const JSON_REFLECTIONS = JSON_REFLECTIONS_PATH;

const IconReflection = {
    refresh:
        <SVGRefresh
            title="Recomendar otra música"
            stroke="currentColor"
            strokeWidth={3}
            className="
                    cursor-pointer
                    hover:scale-115
                    transition-all
                    "
        />,
    icon:
        <SVGVynil
            width={50}
            height={50}
            stroke="white"
        />
}

function Reflection() {
    const [reflection, setReflection] = useState<ReflectionItem | null>(null);
    const [title, setTitle] = useState<string | null>(null);

    useEffect(() => {
        setReflection(randomResult(JSON_REFLECTIONS.reflexiones));
        setTitle(randomResult(JSON_REFLECTIONS.titles));
    }, []);

    if (!reflection || !title) return null;

    return (
        <article
            className="
                max-w-[600px]
                grid
                grid-cols-[1fr_3fr]
                grid-rows-[auto_full]
                border-2
                border-red-500
                rounded-2xl
                p-2
                gap-2
                "
        >
            <header
                className="col-span-2 flex flex-row items-start justify-between gap-2"
            >

                {
                    title
                    &&
                    <span
                        title={JSON_REFLECTIONS.description[0]}
                        className="flex flex-row items-center justify-center gap-2 font-bold bg-zinc-950/50 text-zinc-50/90 rounded-lg px-4 py-1"
                    >
                        <SVGMessage
                            width={16}
                            height={16}
                            fill="blue"
                        />

                        {title}
                    </span>
                }

                <button
                    title="Cambiar frase / reflexión"
                    className="
                            cursor-pointer
                            hover:scale-115
                            transition-all
                            p-1
                            rounded-full
                            bg-zinc-950/50
                            hover:bg-zinc-50/70
                        "
                    onClick={() => setReflection(randomResult(JSON_REFLECTIONS.reflexiones))}
                >
                    <SVGRefresh
                        stroke="currentColor"
                        strokeWidth={2}
                    />
                </button>

            </header>
            <aside
                className="
                        row-start-2
                        flex
                        items-center
                        justify-center
                    "
            >
                {IconReflection.icon}
            </aside>
            <main
                className="row-start-2 flex flex-col items-start justify-center gap-1">

                <div
                    className="
                        whitespace-normal
                        "
                >
                    {
                        reflection
                        &&
                        <span
                            className="italic whitespace-normal"
                        >
                            "{reflection.cita}"
                        </span>
                    }
                </div>
                <div>
                    {
                        reflection
                        &&
                        <span
                            className="font-bold"
                        >
                            - {reflection.autor}
                        </span>
                    }
                </div>
                <div>
                    <SVGYT
                        fill="currentColor"
                        strokeWidth={2}
                        // onClick={() => window.open(reflection.link, "_blank")}
                        className="
                                cursor-pointer
                                hover:scale-115
                                transition-all
                            "
                    />
                </div>

            </main>
        </article>
    )
}

function randomResult<T>(json: T[]): T {

    const randomNumber = Math.floor(Math.random() * json.length);

    const result = json[randomNumber];

    return result;
};

type ReflectionItem = {
    cita: string;
    autor: string;
};


export default Reflection;