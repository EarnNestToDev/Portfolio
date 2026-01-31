export default function Card({
    customDecorate,
    title,
    color,
    border
}: {
    customDecorate?: string;
    title: string;
    color: string;
    border: string
}) {

    const BORDER_COLOR = " border " + border;
    const CIRCLE_COLOR = color;
    const DEFAULT_DECORATE = BORDER_COLOR + " bg-zinc-500/10 rounded-full py-2 px-4 ";

    return (
        <article className={DEFAULT_DECORATE + " flex-row p-2 gap-2 inline-flex items-center justify-center"}>

            <aside className={"rounded-full p-2 " + CIRCLE_COLOR}></aside>

            <main className={customDecorate + "text-base word-break font-bold text-zinc-300 flex items-center justify-center"}>
                {title}
            </main>

        </article>
    );
}