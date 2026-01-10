export default function Card({
    customDecorate,
    title,
    icon,
    description,
    show
}: {
    customDecorate?: string;
    title: string;
    icon: React.ReactNode;
    description?: string;
    show?: boolean;
}) {

    const defaultDecorate = "bg-zinc-900/50 rounded-lg p-2 ";

    function showOpinionSection() {
        // if (description) {

        // console.log("show: " + show);

        return (
            <main className={defaultDecorate + "flex flex-col items-stretch justify-center flex-wrap rounded-lg p-2 "}>
                {description}
            </main>
        );
        // }
    }

    return (
        <label className="relative inline-flex items-center justify-center cursor-pointer">

            <input type="checkbox" className="sr-only peer" />

            <article className={"min-w-[2fr] min-h-[2fr] flex flex-col items-stretch justify-center rounded-lg p-2 gap-2 relative inline-flex items-center justify-center cursor-pointer " + customDecorate}>

                <header className={defaultDecorate + "text-xl font-bold flex flex-row items-center justify-center gap-2"}>
                    {icon}
                </header>

                <footer className={defaultDecorate + "text-lg word-break font-bold text-zinc-300 flex items-center justify-center"}>
                    {title}
                </footer>

                <div className="hidden group-hover:block">
                    <div
                        className="group absolute -top-12 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center rounded-sm text-center text-sm text-slate-300 before:-top-2"
                    >
                        <div className="rounded-sm bg-black py-1 px-2">
                            <p className="whitespace-nowrap"></p>
                        </div>
                        <div
                            className="h-0 w-fit border-l-8 border-r-8 border-t-8 border-transparent border-t-black"
                        ></div>
                    </div>
                </div>

            </article>

            <div className="absolute bottom-full mb-2 hidden peer-checked:block z-10">

                <div className="relative bg-white text-black text-sm px-4 py-2 rounded-lg shadow whitespace-wrap">

                    {description}

                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
                </div>

            </div>

        </label>
    );
}