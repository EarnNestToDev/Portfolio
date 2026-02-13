import { useState, useEffect } from "react";

import JSON_MUSIC_PATH from "../../../public/data/music.json";

import SVGRefresh from "@/components/icons/refresh";
import SVGYT from "@/components/icons/youtube";
import SVGMusic from "@/components/icons/headphones_outline";
import SVGVynil from "@/components/icons/vynil";

const JSON_MUSIC = JSON_MUSIC_PATH;

const IconMusic = {
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

function Music() {
    const [music, setMusic] = useState<MusicItem | null>(null);
    const [title, setTitle] = useState<string | null>(null);

    useEffect(() => {
        setMusic(randomResult(JSON_MUSIC.musics));
        setTitle(randomResult(JSON_MUSIC.titles));
    }, []);

    if (!music || !title) return null;

    return (
        <article
            className="
                max-w-[400px]
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
                        title={JSON_MUSIC.description[0]}
                        className="flex flex-row items-center justify-center gap-2 font-bold bg-zinc-950/50 text-zinc-50/90 rounded-lg px-4 py-1"
                    >
                        <SVGMusic
                            width={16}
                            height={16}
                            stroke="white"
                            strokeWidth={3}
                        />

                        {title}
                    </span>
                }

                <button
                    title="Recomendar otra música"
                    className="
                            cursor-pointer
                            hover:scale-115
                            transition-all
                            p-1
                            rounded-full
                            bg-zinc-950/50
                            hover:bg-zinc-50/70
                        "
                    onClick={() => setMusic(randomResult(JSON_MUSIC.musics))}
                >
                    <SVGRefresh
                        // stroke="currentColor"
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
                {IconMusic.icon}
            </aside>
            <main
                className="row-start-2 flex flex-col items-start justify-center gap-1">

                <div
                    className="
                        whitespace-normal
                        "
                >
                    {
                        music
                        &&
                        <span
                            className="font-bold whitespace-normal"
                        >
                            {music.title}
                        </span>
                    }
                </div>
                <div>
                    {
                        music
                        &&
                        <span
                            className="italic"
                        >
                            {music.artist}
                        </span>
                    }
                </div>
                <div>
                    <SVGYT
                        fill="currentColor"
                        strokeWidth={2}
                        onClick={() => window.open(music.link, "_blank")}
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

type MusicItem = {
    title: string;
    artist: string;
    link: string;
};


export default Music;