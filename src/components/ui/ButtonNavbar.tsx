import Link from "next/link";

const ButtonNavbar = (
    {
        name,
        href
    }: {
        name: string,
        href?: string
    }
) => {

    const DEFAULT_DECORATION = "bg-zinc-100/80 dark:bg-stone-900/20 hover:bg-stone-800 transition-colors p-2 rounded-md cursor-pointer text-xs font-bold text-zinc-900/80 dark:text-zinc-50/80";

    if (href === null || href === undefined || href.trim() === "") {
        // # sin href
        return (
            <button
                type="button"
                className={DEFAULT_DECORATION}
            >
                <span>{name}</span>
            </button>
        );
    } else {
        return (
            // # con href
            <Link
                className={DEFAULT_DECORATION}
                href={href}
            >
                <span>{name}</span>
            </Link>
        );
    }
}

export default ButtonNavbar;