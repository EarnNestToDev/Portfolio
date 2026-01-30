import SVGRefresh from "@/components/icons/refresh";
import SVGYT from "@/components/icons/youtube";
import SVGMusic from "@/components/icons/headphones_outline";

const Extras = () => {
    return (
        <section
            className="bg-red-800 flex w-full items-center justify-center gap-2 rounded-lg p-2">

            <article
                className="
                grid
                grid-cols[1fr, 3fr]
                grid-rows[auto auto]
                border-2
                border-red-500
                rounded-2xl
                p-2
                "
            >
                <header
                    className="col-span-2 flex flex-row items-center justify-between gap-2">
                    <span>Wanna listen some tunes?...</span>
                    <SVGRefresh
                        title="Recomendar otra música"
                        stroke="currentColor"
                        strokeWidth={3}
                        className="
                        cursor-pointer
                        hover:scale-115
                        transition-all
                        "
                    />
                </header>
                <aside
                    className="
                    row-start-2
                    flex
                    items-center
                    justify-center
                    "
                >
                    img
                </aside>
                <main
                    className="row-start-2">

                    <div
                        className="
                        whitespace-normal
                        "
                    >
                        title
                    </div>
                    <div>
                        artist
                    </div>
                    <div>
                        <SVGYT
                            fill="currentColor"
                            strokeWidth={2}
                        />
                    </div>

                </main>
            </article>

        </section>
    );
};

export default Extras;