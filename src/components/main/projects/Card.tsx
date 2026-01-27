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

    const defaultDecorate = "bg-zinc-900/80 rounded-lg p-2 ";

    function showLinkSection() {
        if (link) {
            return (
                <footer className={defaultDecorate + "col-start-1 row-start-4 flex flex-row items-center justify-evenly gap-2 " + (link ? "block" : "none")}>
                    {link}
                </footer>
            );
        }
    }

    function showImageSection() {
        if (image) {
            return (
                <main className={defaultDecorate + "row-start-2 flex flex-col items-center justify-center " + (image ? "block" : "none")}>
                    <img src={image} alt={title}
                        className="max-w-[100px] max-h-[auto] aspect-square object-cover rounded-lg"
                    />
                </main>
            );
        } else {
            return (<main className={"row-start-2 flex"}></main>);
        }
    }

    return (
        <article className={"min-w-[90vw] md:min-w-[600px] grid grid-cols-[2fr_auto] grid-rows-[auto_auto_3fr_auto] items-stretch justify-center rounded-lg p-2 gap-2 object-cover snap-center " + customDecorate}>

            <header className={defaultDecorate + "text-xl font-bold text-start flex flex-row items-center justify-center gap-2"}>
                {title}
            </header>

            <header className={defaultDecorate + "text-lg font-bold text-zinc-300 flex items-center justify-center"}>
                {year}
            </header>

            {showImageSection()}

            <main className={defaultDecorate + "col-start-1 row-start-3 text-wrap overflow-scroll overflow-x-auto scroll-default"}>
                {description}
            </main>

            <aside className={defaultDecorate + "row-span-3 col-start-2 row-start-2 h-full flex flex-col flex-wrap items-center justify-evenly gap-2"}>
                {tecnologies}
            </aside>

            {showLinkSection()}

        </article>
    );
}