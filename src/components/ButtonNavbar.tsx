"use client";

import { useRouter } from "next/navigation";

const router = useRouter();

const ButtonNavbar = (
    {
        name,
        href
    }: {
        name: string,
        href?: string
    }) => {

    const className = "bg-stone-900/20 hover:bg-stone-800 transition-colors p-2 rounded-md cursor-pointer text-xs font-bold";

    if (href === null || href === undefined || href.trim() === "") {
        // # sin href
        return (
            <button
                type="button"
                className={className}>
                {name}
            </button>
        );
    } else {
        return (
            // # con href
            <button
                type="button"
                className={className}
                onClick={() => router.push(href)}
            >
                {name}
            </button>
        );
    }
}

export default ButtonNavbar;