import { useState } from "react";

import Popup from "@/components/ui/PopupDialog";

export default function Card(
    {
        customDecorate,
        title,
        icon,
        description,
        textColor
    }: {
        customDecorate?: string;
        title: string;
        icon: React.ReactNode;
        description?: string;
        textColor?: string;
    }
) {

    const [isOpen, setIsOpen] = useState(false);

    return (

        <>
            <article
                onClick={() => setIsOpen(true)}
                className={"flex flex-row items-center justify-start rounded-lg p-2 gap-2 relative cursor-pointer " + customDecorate}>
                <span className={textColor}>•</span>
                <header className={"flex flex-row items-center justify-center gap-2 rounded-2xl"}>
                    {icon}
                </header>

                <footer className={"font-bold text-md word-break text-zinc-50/60 flex items-center justify-start"}>
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