// popUp fullscreen

"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import SVGClose from "@/components/icons/x";

type PopupProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

export default function Popup({ isOpen, onClose, children }: PopupProps) {

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        if (isOpen) {
            window.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!mounted || !isOpen) return null;

    return createPortal(
        <article
            className="
                w-screen
                h-screen
                fixed
                top-0
                left-0
                z-100
                flex
                items-center
                justify-center
                bg-black/70
                backdrop-blur-xs
                p-2
                backdrop-grayscale
                transition-all
            "
            onClick={onClose}
        >
            <main
                className="
                    relative
                    bg-zinc-100
                    dark:bg-zinc-800
                    dark:md:bg-zinc-900
                    rounded-2xl
                    p-6
                    w-[90vw]
                    h-[90vh]
                    md:w-[90vw]
                    shadow-xlOFF
                    flex
                    flex-col
                    items-center
                    justify-center
                    backdrop-blur-xs
                "
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="
                        fixed
                        z-1000
                        top-3
                        right-3
                        bg-red-500
                        hover:bg-red-400
                        hover:scale-110
                        transition
                        rounded-full
                        p-2
                    "
                >
                    <SVGClose
                        width={24}
                        height={24}
                        stroke="white"
                        strokeWidth={3}
                    />
                </button>

                {children}

            </main>

        </article>,
        document.body
    );
}
