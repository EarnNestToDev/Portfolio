import Code from "@/components/icons/code";
import Card from "@/components/main/tecnologies/Card";
import Content from "@/components/main/tecnologies/Content";

export default function Tecnologies() {
    return (
        <section className="w-full flex flex-col items-center justify-center gap-2 rounded-lg p-2">

            <article className="w-full flex flex-col items-start justify-center gap-2 rounded-lg p-2" id="projects">
                <div className="bg-zinc-900 text-2xl font-bold w-content rounded-lg p-2 flex flex-row items-center gap-2">
                    <Code size={36} color="white" />
                    <span>
                        Tecnologías
                    </span>
                </div>
                <div className="bg-zinc-900 text-base text-gray-200/80 font-bold rounded-lg pl-2 pr-2">
                    <span>
                        Tecnologías más utilizadas y con más experiencia
                    </span>
                </div>
            </article>

            <article className="w-full max-h-[fit] rounded-lg p-2 flex flex-row flex-wrap items-stretch justify-evenly gap-6">

                {Content.map((Content, index) => (
                    <Card
                        key={index}
                        customDecorate={Content.customDecorate}
                        title={Content.title}
                        icon={Content.icon}
                        description={Content.description}
                    />
                ))}

            </article>

        </section>
    )
}