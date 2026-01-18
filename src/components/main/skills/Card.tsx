export default function Card({
    customDecorate,
    title,
    rank,
    icon
}: {
    customDecorate?: string;
    title: string;
    icon?: React.ReactNode;
    rank: string;
}) {

    const defaultDecorate = " bg-zinc-950/60 rounded-full py-2 px-4 ";

    return (
        <article className={defaultDecorate + "min-w-[2fr] min-h-[2fr] flex-row p-2 gap-2 inline-flex items-center justify-center"}>

            <aside className={"rounded-full p-2 " + rank}></aside>

            <main className={customDecorate + "text-base word-break font-bold text-zinc-300 flex items-center justify-center"}>
                {title}
            </main>

        </article>
    );
}