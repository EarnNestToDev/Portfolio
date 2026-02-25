import Card from "@/sections/main/tecnologies/Card";
import Content from "@/sections/main/tecnologies/Data";

import SVGCode from "@/components/icons/code";
import SVGFav from "@/components/icons/star";
import SVGLearning from "@/components/icons/bulb";
import SVGUsed from "@/components/icons/circlecheck";

const SVG = {
    fav: <SVGFav width={32} height={32} fill="#e37600" />,
    learning: <SVGLearning width={32} height={32} fill="#32f317" />,
    used: <SVGUsed width={32} height={32} fill="#6aa6f0" />
};

export default function Tecnologies() {

    const DEFAULT_DECORATE = "w-full gap-2 rounded-4xl p-4 ";

    return (
        <section className="w-full flex flex-col flex-wrap items-center justify-center gap-2 p-2">

            <article className="w-full flex flex-col items-start justify-center gap-2 rounded-lg p-2">
                <div className="text-2xl font-bold w-content rounded-lg p-2 flex flex-row items-center gap-2">
                    <SVGCode width={36} height={36} stroke="#6aa6f0" />
                    <span>
                        Tecnologías
                    </span>
                </div>
                <div className="text-base text-gray-900/50 dark:text-gray-200/50 font-bold rounded-lg px-2">
                    <span>
                        Tecnologías y herramientas abarcadas
                    </span>
                </div>
            </article>

            <article className="md:grid md:grid-cols-[1fr_1fr_1fr] md:grid-rows-1 w-full rounded-lg p-2 flex flex-row flex-wrap items-stretch justify-center gap-4 md:gap-6">

                <div
                    className={DEFAULT_DECORATE + "bg-orange-400/10 border-b border-t-4 border-x border-orange-400"}>
                    {
                        contentTecnology(
                            Content.destacado,
                            SVG.fav,
                            "Mis favoritos",
                            "text-orange-400"
                        )
                    }
                </div>

                <div
                    className={DEFAULT_DECORATE + "bg-lime-500/10 border-b border-t-4 border-x border-lime-400"}>
                    {
                        contentTecnology(
                            Content.learning,
                            SVG.learning,
                            "Estoy aprendiendo",
                            "text-lime-500"
                        )
                    }
                </div>

                <div
                    className={DEFAULT_DECORATE + "bg-sky-600/10 border-b border-t-4 border-x border-sky-400"}>
                    {
                        contentTecnology(
                            Content.regular,
                            SVG.used,
                            "He usado",
                            "text-sky-600"
                        )
                    }
                </div>

            </article>

        </section>
    )
}


type Technology = {
    customDecorate: string;
    title: string;
    icon: React.ReactNode;
    description: string;
};


function contentTecnology(
    ArrayContent: Technology[],
    Icon: React.ReactNode,
    Title: string,
    Color: string
) {

    return (
        <>
            <div className="grid grid-cols-1 grid-rows-[auto_auto]">
                <div className="flex flex-col items-start justify-start py-4 px-2">
                    <div className="p-4 bg-zinc-100/60 dark:bg-zinc-950/30 rounded-2xl">
                        {Icon}
                    </div>
                    <span className={"flex flex-row items-center justify-center text-lg font-bold py-2 uppercase " + Color}>
                        {Title}
                    </span>
                </div>

                <div className="flex flex-col flex-wrap items-start justify-center gap-2">
                    {ArrayContent.map((item, index) => (
                        <Card
                            key={index}
                            customDecorate={item.customDecorate}
                            title={item.title}
                            icon={item.icon}
                            description={item.description}
                            textColor={Color}
                        />
                    ))}
                </div>
            </div >
        </>
    )
}