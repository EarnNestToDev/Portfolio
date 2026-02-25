export default function Card({
    customDecorate,
    title,
    year,
    description,
    image,
    tecnologies,
    link
}: {
    customDecorate?: string;
    title: string;
    year: string;
    description: React.ReactNode;
    image?: string;
    tecnologies?: React.ReactNode[];
    link?: React.ReactNode[];
}) {

    const DEFAULT_DECORATE = "bg-zinc-900/80OFF rounded-lg p-2 ";

    function showLinkSection() {
        if (!link) return null;
        return link;
    }

    function showImageSection() {
        if (!image) return null;
        return <img
            src={image}
            alt={title}
            className="max-w-[60px] max-h-[auto] aspect-square rounded-lg"
        />;
    }

    function showTecnologiesSection() {
        if (!tecnologies) return null;
        return tecnologies.map((Content, index) => (
            <div
                className="px-4 py-2 bg-zinc-100/50 dark:bg-zinc-950/50 rounded-lg text-xs font-bold"
            >{tecnologies[index]}</div>
        ));
    }

    return (
        <article className={"w-[90vw] md:w-[600px] max-h-[50vh] grid grid-cols-1 grid-rows-[1fr_2fr_1fr] items-center justify-center rounded-4xl p-4 gap-2 snap-center " + customDecorate}>

            <header className="text-xl font-bold text-start flex flex-row items-center justify-between gap-2 p-2">
                <div>{showImageSection()}</div>
                <div className="text-zinc-900/80 dark:text-zinc-50/80 text-2xl text-wrap overflow-hidden">{title}</div>
                <div className="text-sm text-zinc-900/80 dark:text-zinc-50/90 rounded-xl bg-zinc-100/80 dark:bg-zinc-950/50 px-4 py-2">{year}</div>
            </header>

            <main className="text-wrap flex flex-col gap-4">
                <div className="text-sm md:text-lg font-normal italic text-zinc-900/80 dark:text-zinc-50/80 p-2">
                    {description}
                </div>

                <div className="flex flex-row flex-wrap items-center justify-start gap-2">
                    {showTecnologiesSection()}
                </div>
            </main>

            <footer className="flex flex-row flex-wrap items-center justify-start gap-4 p-2">
                {showLinkSection()}
            </footer>

        </article>
    );
}