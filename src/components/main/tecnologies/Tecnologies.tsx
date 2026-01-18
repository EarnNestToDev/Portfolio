import Code from "@/components/icons/code";
import Card from "@/components/main/tecnologies/Card";
import Content from "@/components/main/tecnologies/Content";

export default function Tecnologies() {

    const DEFAULT_DECORATE = "w-full flex flex-col items-center justify-center gap-2 rounded-lg p-2 ";

    return (
        <section className="bg-zinc-900 w-full flex flex-col flex-wrap items-center justify-center gap-2 p-2">

            <article className="w-full flex flex-col items-start justify-center gap-2 rounded-lg p-2">
                <div className="text-2xl font-bold w-content rounded-lg p-2 flex flex-row items-center gap-2">
                    <Code size={36} color="#53ffd4" />
                    <span>
                        Tecnologías
                    </span>
                </div>
                <div className="bg-zinc-950 text-base text-gray-200/80 font-bold rounded-lg pl-2 pr-2">
                    <span>
                        Tecnologías y herramientas abarcadas
                    </span>
                </div>
            </article>

            <article className="md:grid md:grid-cols-[1fr_2fr] md:grid-rows-2 w-full max-h-[fit] rounded-lg p-2 flex flex-row flex-wrap items-stretch justify-center gap-2">

                <div
                    className={DEFAULT_DECORATE + "bg-orange-400/80"}>
                    {
                        contentTecnology(
                            Content.destacado,
                            "Mis favoritos"
                        )
                    }
                </div>

                <div
                    className={DEFAULT_DECORATE + "bg-lime-500/80"}>
                    {
                        contentTecnology(
                            Content.learning,
                            "Estoy aprendiendo actualmente"
                        )
                    }
                </div>

                <div
                    className={DEFAULT_DECORATE + "col-span-2 row-start-2 bg-sky-600/80"}>
                    {
                        contentTecnology(
                            Content.regular,
                            "Los he usado y aplicado comúnmente"
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
    Title: string
) {
    return (
        <>
            <div className="flex-flex-row items-center justify-center py-4 px-2">
                <span className="flex text-center text-sm font-bold bg-zinc-900/50 rounded-lg py-2 px-4">
                    {Title + "..."}
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