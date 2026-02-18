// https://youtu.be/f8n-Zdc5rXk?si=7U2f-cgKVRRRIX3F

"use client";

import { useRef, useState, useEffect } from "react";

import SVGArrow from "@/components/icons/chevron_arrow";

export default function Carousel(
    {
        content
    }: {
        content: React.ReactNode[]
    }
) {
    const ulRef = useRef<HTMLUListElement>(null);

    const [index, setIndex] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const extended = [
        content[content.length - 1],
        ...content,
        content[0]
    ];

    const scrollToIndex = (i: number, smooth = true) => {
        if (!ulRef.current) return;

        const width = ulRef.current.clientWidth;

        ulRef.current.scrollTo({
            left: width * i,
            behavior: smooth ? "smooth" : "auto"
        });
    };

    useEffect(() => {
        scrollToIndex(1, false);
    }, []);

    const handleScroll = (direction: "left" | "right") => {
        if (isTransitioning) return;

        setIsTransitioning(true);

        setIndex(prev => {
            return direction === "right" ? prev + 1 : prev - 1;
        });
    };

    useEffect(() => {
        scrollToIndex(index);

        const timeout = setTimeout(() => {
            if (index === 0) {
                setIndex(content.length);
                scrollToIndex(content.length, false);
            }

            if (index === content.length + 1) {
                setIndex(1);
                scrollToIndex(1, false);
            }

            setIsTransitioning(false);
        }, 400);

        return () => clearTimeout(timeout);
    }, [index]);

    const activeIndicator =
        index === 0
            ? content.length - 1
            : index === content.length + 1
                ? 0
                : index - 1;

    return (
        <div className="relative w-full h-full overflow-hidden p-2 grid grid-cols-1 grid-rows-[full_1fr]">

            <button
                onClick={() => handleScroll("left")}
                className="
                    absolute 
                    left-2 
                    top-1/2 
                    -translate-y-1/2 
                    z-10 
                    bg-zinc-900/50 
                    p-2 
                    rounded-full 
                    hover:invert
                    cursor-pointer
                "
            >
                <SVGArrow
                    width={32}
                    height={32}
                    strokeWidth={4}
                    transform="rotate(180)"
                    stroke="white"
                />
            </button>

            <button
                onClick={() => handleScroll("right")}
                className="
                    absolute 
                    right-2 
                    top-1/2 
                    -translate-y-1/2 
                    z-10 
                    bg-zinc-900/50 
                    p-2 
                    rounded-full 
                    hover:invert
                    cursor-pointer
                "
            >
                <SVGArrow
                    width={32}
                    height={32}
                    strokeWidth={4}
                    stroke="white"
                />
            </button>

            <ul
                ref={ulRef}
                className="
                    w-full
                    h-full
                    bg-red-500s
                    flex
                    overflow-hidden
                    rounded-lg
                "
            >
                {extended.map((item, i) => (
                    <li
                        key={i}
                        className="
                            shrink-0
                            w-full
                            h-full
                            flex
                            items-center
                            justify-center
                            bg-zinc-900/10OFF
                            bg-red-500OFF
                            text-2xl
                            font-bold
                        "
                    >
                        {item}
                    </li>
                ))}
            </ul>

            <div className="flex flex-row justify-between items-center gap-2 mt-4">
                {content.map((_, i) => (
                    <div
                        className={`
                            w-full
                            h-2
                            rounded-xs
                            bg-zinc-50
                            transition-all
                            duration-300
                            ${activeIndicator === i ? "opacity-100 translate-y-1" : "opacity-20"}
                        `}
                    />
                ))}
            </div>
        </div>
    );
};



