// popUp de dialogo generico?

"use client";

import { useEffect } from "react";

import SVGClose from "@/components/icons/x";

type PopupProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

export default function Popup({ isOpen, onClose, children }: PopupProps) {

    useEffect(() => {
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

    if (!isOpen) return null;

    return (
        <article
            className="fixed inset-0 z-10 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={onClose}
        >
            <main
                className="relative bg-zinc-900 rounded-2xl p-6 max-w-lg w-[90vw] md:w-full shadow-xl"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="
                        absolute
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
                        width={16}
                        height={16}
                        stroke="currentColor"
                        strokeWidth={3}
                    />
                </button>

                {children}

            </main>

        </article>
    );
}
