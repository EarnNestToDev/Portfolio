import Card from "@/sections/main/tecnologies/Card";
import Content from "@/sections/main/tecnologies/Data";

import Code from "@/components/icons/code";

export default function Tecnologies() {

    const DEFAULT_DECORATE = "w-full flex flex-col items-center justify-center gap-2 rounded-4xl p-2 ";

    return (
        <section className="w-full flex flex-col flex-wrap items-center justify-center gap-2 p-2">

            <article className="w-full flex flex-col items-start justify-center gap-2 rounded-lg p-2">
                <div className="text-2xl font-bold w-content rounded-lg p-2 flex flex-row items-center gap-2">
                    <Code width={36} height={36} stroke="#6aa6f0" />
                    <span>
                        Tecnologías
                    </span>
                </div>
                <div className="text-base text-gray-200/50 font-bold rounded-lg pl-2 pr-2">
                    <span>
                        Tecnologías y herramientas abarcadas
                    </span>
                </div>
            </article>

            <article className="md:grid md:grid-cols-[1fr_2fr] md:grid-rows-2 w-full max-h-[fit] rounded-lg p-2 flex flex-row flex-wrap items-stretch justify-center gap-4 md:gap-2">

                <div
                    className={DEFAULT_DECORATE + "bg-orange-400/10 border border-orange-400"}>
                    {
                        contentTecnology(
                            Content.destacado,
                            "Mis favoritos",
                            "text-orange-400"
                        )
                    }
                </div>

                <div
                    className={DEFAULT_DECORATE + "bg-lime-500/10 border border-lime-400"}>
                    {
                        contentTecnology(
                            Content.learning,
                            "Estoy aprendiendo",
                            "text-lime-500"
                        )
                    }
                </div>

                <div
                    className={DEFAULT_DECORATE + "col-span-2 row-start-2 border bg-sky-600/10 border-sky-400"}>
                    {
                        contentTecnology(
                            Content.regular,
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
    Title: string,
    Color: string
) {

    return (
        <>
            <div className="flex-flex-row items-center justify-center py-4 px-2">
                <span className={"flex text-center text-sm font-bold rounded-lg py-2 px-4 uppercase " + Color}>
                    {Title}
                </span>
            </div>

            <div className="flex flex-row flex-wrap items-stretch justify-center gap-2">
                {ArrayContent.map((item, index) => (
                    <Card
                        key={index}
                        customDecorate={item.customDecorate}
                        title={item.title}
                        icon={item.icon}
                        description={item.description}
                    />
                ))}
            </div>
        </>
    )
}