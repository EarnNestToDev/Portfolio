import { useState } from "react";

import Popup from "@/components/ui/PopupDialog";

export default function Card(
    {
        customDecorate,
        title,
        icon,
        description
    }: {
        customDecorate?: string;
        title: string;
        icon: React.ReactNode;
        description?: string;
    }
) {

    const [isOpen, setIsOpen] = useState(false);

    return (

        <>
            <article
                onClick={() => setIsOpen(true)}
                className={"flex flex-col items-stretch justify-center rounded-lg p-2 gap-2 relative cursor-pointer shadow-2xl " + customDecorate}>

                <header className={"text-xl font-bold flex flex-row items-center justify-center gap-2 rounded-2xl p-2"}>
                    {icon}
                </header>

                <footer className={"text-lg word-break font-bold text-zinc-300 flex items-center justify-center p-2"}>
                    {title}
                </footer>

            </article>

            < Popup
                isOpen={isOpen}
                onClose={() => setIsOpen(false)
                }
            >
                <h2 className="text-xl font-bold text-white">
                    {title}
                </h2>
                <p className="text-gray-300 mt-2">
                    <span
                        className="italic"
                    >
                        "{description}"
                    </span>

                </p>
            </Popup >
        </>
    );
}