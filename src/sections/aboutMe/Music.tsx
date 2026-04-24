"use client";

import { useState, useEffect, useMemo } from "react";

import JSON_MUSIC_PATH from "../../../public/data/music.json";

import Toast from "@/components/ToastDefault";

import MHWUI_Layout from "@/components/ui/mhwi/Layout1";

import SVGRefresh from "@/components/icons/refresh";
import SVGYT from "@/components/icons/youtube";
import SVGMusic from "@/components/icons/headphones_outline";
import SVGVynil from "@/components/icons/vynil";
import SVGArrow from "@/components/icons/navigation";
import SVGPanelCorn2 from "@/components/icons/mhwi/panel_corn_2";
import SVGLink from "@/components/icons/link";


const JSON_MUSIC = JSON_MUSIC_PATH;

function Music() {

    const [page, setPage] = useState<number>(0);
    const [musicSelected, setMusicSelected] = useState<number | null>(null);
    const [titleIndex, setTitleIndex] = useState<number | null>(null);

    useEffect(() => {
        setPage(0);
        setTitleIndex(randomTitle())
    }, []);

    function buildGroupedItems(): React.ReactNode[][] {
        const grouped: React.ReactNode[][] = [];
        let currentGroup: React.ReactNode[] = [];

        JSON_MUSIC.musics.forEach((music, index) => {
            currentGroup.push(
                itemMusic(
                    index,
                    music.title,
                    music.artist
                )
            );

            if (currentGroup.length === 7) {
                grouped.push(currentGroup);
                currentGroup = [];
            }
        });

        if (currentGroup.length > 0) {
            grouped.push(currentGroup);
        }

        return grouped;
    }

    const listMusic = useMemo(() => buildGroupedItems(), []);
    const MAX_LIST_NUMBER = listMusic.length;

    if (page === null) return null;

    const title =
        titleIndex !== null
            ? JSON_MUSIC.titles[titleIndex]
            : null;

    const music =
        musicSelected !== null
            ? JSON_MUSIC.musics[musicSelected]
            : null;

    const pos = positionJSONObject(page, MAX_LIST_NUMBER);

    return (
        <MHWUI_Layout>
            <main
                className={`
                    col-span-2 
                    flex 
                    flex-row 
                    items-center 
                    justify-center 
                    gap-2
                `}
            >

                <div
                    title={JSON_MUSIC.description[0]}
                    className={`
                        flex 
                        items-center 
                        justify-center 
                        gap-2 
                        font-bold 
                        text-sky-600/90 
                        dark:text-sky-300/90 
                        px-4 py-2
                    `}
                >
                    <span>Música</span>
                </div>

            </main>

            <main
                className={`
                    row-start-2 
                    flex 
                    md:flex-row 
                    flex-col 
                    md:items-start 
                    justify-center 
                    md:gap-2
                    gap-4
                `}
            >
                <article
                    className={`
                        md:min-w-[300px]
                        min-w-full
                        relative 
                        p-2 
                        grid 
                        grid-cols-1 
                        grid-rows-[auto_auto_auto] 
                        items-center justify-center 
                        gap-2
                    `}
                >
                    {
                        title &&
                        <div
                            className={`
                                relative 
                                w-full 
                                border-y-6 
                                border-double 
                                border-zinc-300 
                                text-center 
                                text-zinc-300 
                                py-1 
                                text-md
                            `}
                        >
                            <header
                                className={`
                                    absolute
                                    top-0
                                    w-full
                                    h-[70%]
                                    -translate-y-full
                                    flex
                                    flex-row
                                    items-end
                                    justify-between
                            `}
                            >
                                <SVGPanelCorn2
                                    className={`
                                        fill-zinc-300
                                        h-full
                                        w-auto
                                        aspect-square
                                    `}
                                />
                                <SVGPanelCorn2
                                    className={`
                                        fill-zinc-300
                                        scale-x-[-1]
                                        h-full
                                        w-auto
                                        aspect-square
                                    `}
                                />
                            </header>

                            <footer
                                className={`
                                    absolute
                                    bottom-0
                                    w-full
                                    h-[70%]
                                    translate-y-full
                                    flex
                                    flex-row
                                    items-end
                                    justify-between
                                    scale-y-[-1]
                                `}
                            >
                                <SVGPanelCorn2
                                    className={`
                                        fill-zinc-300
                                        h-full
                                        w-auto
                                        aspect-square
                                    `}
                                />
                                <SVGPanelCorn2
                                    className={`
                                        fill-zinc-300
                                        scale-x-[-1]
                                        h-full
                                        w-auto
                                        aspect-square
                                    `}
                                />
                            </footer>

                            <span
                                className={`
                                    text-zinc-950 
                                    dark:text-zinc-50/90
                                `}
                            >
                                {title}
                            </span>
                        </div>
                    }

                    <div>
                        {listMusic[page]}
                    </div>

                    <div
                        className={`
                            flex 
                            flex-row 
                            items-center 
                            justify-center 
                            dark:bg-zinc-700 
                            bg-zinc-300
                            mask-x-from-80% 
                            mask-x-to-100%
                        `}
                    >
                        <button
                            title="Anterior música"
                            className={`
                                invert
                                dark:invert-0
                                cursor-pointer
                                hover:scale-115
                                transition-all
                                p-2
                            `}
                            onClick={() => {
                                setPage(prevPage(page, MAX_LIST_NUMBER));
                            }}
                        >
                            <SVGArrow
                                fill="white"
                                transform="rotate(-90)"
                                strokeWidth={2}
                                height={16}
                            />
                        </button>

                        {
                            <div
                                className={`flex items-center justify-center`}
                            >
                                <span
                                    className={`
                                        invert
                                        dark:invert-0
                                        text-zinc-50/80
                                        text-xs
                                        font-bold
                                        px-4
                                        bg-zinc-950
                                        mask-x-from-80% mask-x-to-100%
                                    `}
                                >
                                    {pos}
                                </span>
                            </div>
                        }

                        <button
                            title="Siguiente música"
                            className={`
                                invert
                                dark:invert-0
                                cursor-pointer
                                hover:scale-115
                                transition-all
                                p-2
                            `}
                            onClick={() => {
                                setPage(nextPage(page, MAX_LIST_NUMBER));
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
                </article>

                {
                    music
                    &&
                    <article
                        className={`
                            relative
                            md:w-[300px]
                            w-full
                            bg-zinc-300
                            dark:bg-zinc-700
                            md:rounded-sm
                            flex
                            flex-col
                        `}
                    >

                        <button
                            title="Recomendar otra música"
                            onClick={() => setMusicSelected(prev => randomResult(prev ?? undefined))}
                            className={`
                                invert
                                dark:invert-0
                                absolute
                                right-2
                                bottom-2
                                cursor-pointer
                                hover:scale-115
                                transition-all
                                p-1
                                rounded-full
                            `}
                        >
                            <SVGRefresh
                                stroke="white"
                                strokeWidth={2}
                            />
                        </button>

                        <header
                            className={`
                                absolute
                                top-0
                                left-1/2
                                -translate-x-1/2
                                -translate-y-1/2
                                z-20
                                bg-zinc-400
                                p-2
                                flex
                                items-center
                                justify-center
                                aspect-square
                                [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)]
                                rotate-90
                            `}
                        >
                            <SVGMusic
                                className={`
                                    invert
                                    dark:invert-0 
                                    -rotate-90
                                `}
                                stroke="black"
                            />
                        </header>

                        <main
                            className="p-2 flex flex-col gap-2"
                        >
                            <div
                                className={`
                                    mt-10
                                    whitespace-normal
                                    flex
                                    flex-col
                                    gap-1
                                `}
                            >
                                <span
                                    className={`
                                        font-bold
                                        whitespace-normal
                                        text-lg
                                    `}
                                >
                                    {music.title}
                                </span>
                                <span
                                    className="italic text-base"
                                >
                                    {music.artist}
                                </span>
                            </div>

                            <div
                                className={`
                                    flex
                                    flex-wrap
                                    flex-row
                                    items-center
                                    justify-start
                                    gap-2
                                `}
                            >

                                <button
                                    data-text="Ver en YT"
                                    onClick={() => window.open(music.link, "_blank")}
                                    className={`
                                        bg-red-500
                                        md:bg-zinc-900
                                        md:hover:bg-red-500
                                        rounded-full
                                        p-2
                                        hover:px-4
                                        cursor-pointer
                                        flex
                                        flex-row
                                        items-center
                                        justify-center
                                        gap-2
                                        md:after:content-none 
                                        after:content-[attr(data-text)] 
                                        md:hover:after:content-[attr(data-text)] 
                                        transition-all duration-600
                                        text-xs
                                        font-bold
                                        text-white
                                        md:text-transparent
                                        md:hover:text-white
                                    `}
                                >
                                    <SVGYT
                                        fill="white"
                                        strokeWidth={2}
                                        width={16}
                                        height={16}
                                    />
                                </button>

                                <button
                                    data-text="Copiar link"
                                    onClick={() => copiarAlPortapapeles(music.link)}
                                    className={`
                                        bg-blue-600
                                        md:bg-zinc-900
                                        md:hover:bg-blue-600
                                        rounded-full
                                        p-2
                                        hover:px-4
                                        cursor-pointer
                                        flex
                                        flex-row
                                        items-center
                                        justify-center
                                        gap-2
                                        md:after:content-none 
                                        after:content-[attr(data-text)] 
                                        md:hover:after:content-[attr(data-text)] 
                                        transition-all duration-600
                                        text-xs
                                        font-bold
                                        text-white
                                        md:text-transparent
                                        md:hover:text-white
                                    `}
                                >
                                    <SVGLink
                                        stroke="white"
                                        strokeWidth={2}
                                        width={16}
                                        height={16}
                                    />
                                </button>

                            </div>

                        </main>

                    </article>
                }

            </main>
        </MHWUI_Layout>

    )

    function itemMusic(id: number, title: string, autor: string) {

        return <button
            onClick={() => {
                setMusicSelected(id);
            }}
            className={`
                grid
                grid-cols-[1fr_10fr]
                grid-rows-1
                gap-2
                border-y-2
                border-dashed
                border-b-zinc-200/40
                border-t-transparent
                hover:bg-lime-600/60
                hover:border-lime-300
                focus:bg-lime-600/60
                focus:border-lime-300
                md:focus:bg-transparent
                md:focus:border-b-zinc-200/40
                md:focus:border-t-transparent
                hover:border-y-2
                hover:border-solid
                hover:border-t-transparent
                transition-all
                py-2
                px-1
                cursor-pointer
            `}
        >
            <aside
                className={`
                    bg-zinc-400
                    p-2
                    flex
                    items-center
                    justify-center
                    aspect-square
                    [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)]
                    text-zinc-900
                    font-bold
                    rotate-90
                `}
            >
                <span
                    className={`
                        invert
                        dark:invert-0
                        -rotate-90 
                        overflow-hidden
                    `}
                >
                    {id}
                </span>
            </aside>

            <main
                className={`
                    flex 
                    flex-col 
                    items-start 
                    justify-center
                    text-start
                    text-nowrap
                    overflow-hidden
                `}
            >
                <span className="text-sm font-bold text-nowrap">{title}</span>
                <span className="text-xs text-nowrap">{autor}</span>
            </main>

        </button>
    }

}

async function copiarAlPortapapeles(text: string) {
    try {
        await navigator.clipboard.writeText(text);
        Toast("Link copiado!");
    } catch (err) {
        Toast("Error al copiar");
    }
}

function randomResult(exclude?: number): number {
    const length = JSON_MUSIC.musics.length;

    if (length <= 1) return 0;

    let random;

    do {
        random = Math.floor(Math.random() * length);
    } while (random === exclude);

    return random;
}

function randomTitle(): number {
    const length = JSON_MUSIC.titles.length;
    return Math.floor(Math.random() * length);
}

function positionJSONObject(n: number, max: number) {
    const actualPos = n + 1;
    return actualPos + " / " + max;
}

function nextPage(n: number, max: number) {
    return n >= max - 1 ? 0 : n + 1;
}

function prevPage(n: number, max: number) {
    return n <= 0 ? max - 1 : n - 1;
}


export default Music;