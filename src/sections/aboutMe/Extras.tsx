import SVGRefresh from "@/components/icons/refresh";
import SVGYT from "@/components/icons/youtube";
import SVGMusic from "@/components/icons/headphones_outline";
import SVGVynil from "@/components/icons/vynil";

const IconMusic = {
    refresh:
        <SVGRefresh
            title="Recomendar otra música"
            stroke="currentColor"
            strokeWidth={3}
            className="
                        cursor-pointer
                        hover:scale-115
                        transition-all
                        "
        />,
    link:
        <SVGYT
            fill="currentColor"
            strokeWidth={2}
        />,
    icon:
        <SVGVynil
            width={50}
            height={50}
            stroke="white"
        />
}

const Extras = () => {
    return (
        <section
            className="bg-red-800 flex w-full items-center justify-center gap-2 rounded-lg p-2">

            <article
                className="
                max-w-[600px]
                grid
                grid-cols[1fr_3fr]
                grid-rows[auto_auto]
                border-2
                border-red-500
                rounded-2xl
                p-2
                "
            >
                <header
                    className="col-span-2 flex flex-row items-center justify-between gap-2">
                    <span
                        className="font-bold bg-zinc-950/50 text-zinc-50/90 rounded-lg px-4 py-2">
                        Wanna listen some tunes?...
                    </span>
                    {IconMusic.refresh}
                </header>
                <aside
                    className="
                    row-start-2
                    flex
                    items-center
                    justify-center
                    "
                >
                    {IconMusic.icon}
                </aside>
                <main
                    className="row-start-2 flex flex-col items-start justify-center gap-1">

                    <div
                        className="
                        whitespace-normal
                        "
                    >
                        <span
                            className="font-bold">
                            title
                        </span>
                    </div>
                    <div>
                        <span
                            className="italic">
                            artist
                        </span>
                    </div>
                    <div>
                        {IconMusic.link}
                    </div>

                </main>
            </article>

        </section>
    );
};

export default Extras;