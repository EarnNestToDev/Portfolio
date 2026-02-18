"use client";

import { useState, useEffect } from "react";

import JSON_VIDEOGAMES_PATH from "../../../public/data/videojuegos.json";

import SVGRefresh from "@/components/icons/refresh";
import SVGGame from "@/components/icons/game";
import SVGSteam from "@/components/icons/steam";
import SVGStar from "@/components/icons/star";
import SVGChevronArrow from "@/components/icons/chevron_arrow";

const JSON_GAMES = JSON_VIDEOGAMES_PATH;

const IconGame = {
    icon:
        <SVGGame
            width={50}
            height={50}
            stroke="white"
            opacity={0.6}
        />
}


function Music() {

    const [actual, setActual] = useState<number | null>(null);

    useEffect(() => {
        setActual(randomResult());
    }, []);

    if (actual === null) return null;

    const title = JSON_GAMES.titles[0];
    const game = JSON_GAMES.videojuegos[actual];
    const pos = positionJSONObject(actual);
    const actualPosNumber = actual;

    return (
        <article
            style={
                {
                    backgroundImage: `url(${game.img_url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }
            }
            className="
                max-w-[400px]
                grid
                grid-cols-[1fr_3fr]
                grid-rows-[auto_full]
                border-2
                border-red-500
                rounded-2xl
                p-2
                bg-cover
                bg-linear-to-br
                from-zinc-950/50
                to-zinc-950/0
                backdrop-brightness-50
                aspect-video
                gap-2
                "
        >

            {
                game
                &&

                <span
                    className="bg-zinc-50/10 backdrop-blur-xs fixed left-2 bottom-2 px-3 py-1 rounded-full text-xs font-bold"
                >
                    {pos}
                </span>
            }

            <header
                className="col-span-2 flex flex-row items-start justify-between gap-2"
            >

                {
                    title
                    &&
                    <span
                        title={JSON_GAMES.description[0]}
                        className="flex flex-row items-center justify-center gap-2 font-bold bg-zinc-950/80 text-zinc-50/90 rounded-lg px-4 py-1"
                    >
                        <SVGStar
                            fill="yellow"
                            width={16}
                            height={16}
                        />

                        {title}
                    </span>
                }


                <div
                    className="flex flex-row gap-1"
                >
                    <button
                        title="Anterior videojuego"
                        className="
                            cursor-pointer
                            hover:scale-115
                            transition-all
                            p-1
                            rounded-l-full
                            backdrop-blur-xs
                            bg-zinc-950/10
                            hover:bg-zinc-50/70
                        "
                        onClick={() => {
                            setActual(prev => prevPos(prev ?? 0));
                        }}
                    >
                        <SVGChevronArrow
                            stroke="currentColor"
                            transform="rotate(180)"
                            strokeWidth={2}
                        />
                    </button>

                    <button
                        title="Cambiar videojuego"
                        className="
                            cursor-pointer
                            hover:scale-115
                            transition-all
                            p-1
                            rounded-fullOFF
                            backdrop-blur-xs
                            bg-zinc-950/10
                            hover:bg-zinc-50/70
                        "
                        onClick={() => {
                            setActual(prev => randomResult(prev ?? undefined));
                        }}
                    >
                        <SVGRefresh
                            stroke="currentColor"
                            strokeWidth={2}
                        />
                    </button>
                    <button
                        title="Anterior videojuego"
                        className="
                            cursor-pointer
                            hover:scale-115
                            transition-all
                            p-1
                            rounded-r-full
                            backdrop-blur-xs
                            bg-zinc-950/10
                            hover:bg-zinc-50/70
                        "
                        onClick={() => {
                            setActual(prev => nextPos(prev ?? 0));
                        }}
                    >
                        <SVGChevronArrow
                            stroke="currentColor"
                            strokeWidth={2}
                        />
                    </button>
                </div>

            </header>

            <aside
                className="
                        row-start-2
                        flex
                        items-center
                        justify-center
                    "
            >
                {IconGame.icon}
            </aside>

            <main
                className="row-start-2 flex flex-col items-start justify-center gap-2">

                <div
                    className="
                        whitespace-normal
                        "
                >
                    {
                        game
                        &&
                        <span
                            className="
                                flex
                                font-bold
                                whitespace-normal
                                px-2
                                py-1
                                rounded-lg
                                bg-zinc-950/50
                                text-md
                            "
                        >
                            {game.title}
                        </span>
                    }
                </div>
                <div
                    className="
                        p-2
                        rounded-r-lg
                        rounded-bl-lg
                        text-zinc-50/80
                        bg-zinc-950/20
                        rounded-lg
                        text-sm
                        backdrop-grayscale-50
                        "
                >
                    {
                        game
                        &&
                        <span
                            className="italic"
                        >
                            - {game.opinion}
                        </span>
                    }
                </div>
                <div
                    className="flex flex-col items-end justify-around w-full gap-2"
                >
                    <button
                        title="Ir a la tienda en Steam"
                        onClick={() => window.open(game.steam_url, "_blank")}
                        className="
                                cursor-pointer
                                hover:scale-115
                                transition-all
                                hover:bg-[#1B2838]
                                bg-[#000F18]
                                p-1
                                rounded-full
                            "
                    >
                        <SVGSteam
                            stroke="white"
                            strokeWidth={2}
                        />
                    </button>

                </div>

            </main>


        </article>
    )
}

function randomResult(exclude?: number): number {
    const length = JSON_GAMES.videojuegos.length;

    if (length <= 1) return 0;

    let random;

    do {
        random = Math.floor(Math.random() * length);
    } while (random === exclude);

    return random;
}

function setJSONObject<T>(json: T[], number: number): T {
    return json[number];
}

function positionJSONObject(n: number) {
    const actualPos = n + 1;
    return actualPos + " / " + JSON_GAMES.videojuegos.length;
}

function nextPos(n: number) {
    const maxJSON = JSON_GAMES.videojuegos.length - 1;
    return n >= maxJSON ? 0 : n + 1;
}

function prevPos(n: number) {
    const maxJSON = JSON_GAMES.videojuegos.length - 1;
    return n <= 0 ? maxJSON : n - 1;
}

type GamesItem = {
    title: string;
    opinion: string;
    img_url: string;
    steam_url: string;
};


export default Music;