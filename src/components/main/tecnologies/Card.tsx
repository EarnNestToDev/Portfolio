export default function Card({
    customDecorate,
    title,
    icon,
    description
}: {
    customDecorate?: string;
    title: string;
    icon: React.ReactNode;
    description?: string;
}) {


    return (
        <label className="relative flex items-stretch justify-center cursor-pointer">

            <input type="checkbox" className="sr-only peer" />

            <article className={"min-w-[2fr] min-h-[2fr] flex flex-col items-stretch justify-center rounded-lg p-2 gap-2 relative cursor-pointer " + customDecorate}>

                <header className={"text-xl font-bold flex flex-row items-center justify-center gap-2 bg-zinc-500/5 border-2 border-zinc-200/20 rounded-2xl p-2"}>
                    {icon}
                </header>

                <footer className={"text-lg word-break font-bold text-zinc-300 flex items-center justify-center p-2"}>
                    {title}
                </footer>

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