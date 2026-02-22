import Content from "@/sections/main/projects/Data";
import Card from "@/sections/main/projects/Card";
import Carrousel from "@/sections/main/projects/CarrouselProjects";

import Briefcase_outline from "@/components/icons/brieftcase_outline";

const items: React.ReactNode[] = Content.map((Content) => (
    <Card
        key={Content.id}
        customDecorate={Content.customDecorate}
        title={Content.title}
        year={Content.year}
        image={Content.url}
        description={Content.description.short}
        tecnologies={Content.tecnologies}
        link={Content.link}
    />
));


export default function Projects() {

    return (
        <section className="w-full flex flex-col items-center justify-center gap-2 rounded-lg p-2" id="projects">

            <article className="w-full flex flex-col items-start justify-center gap-2 rounded-lg p-2">
                <div className="text-2xl font-bold w-content rounded-lg p-2 flex flex-row items-center gap-2">
                    <Briefcase_outline width={36} height={36} stroke="#6ffd59" />
                    <span>
                        Experiencia
                    </span>
                </div>
                <div className="text-base text-gray-200/50 font-bold rounded-lg pl-2 pr-2">
                    <span>
                        Carezco de experiencia profesional,
                        sin embargo he desarrollado diversos
                        proyectos durante mi desarrollo
                        académico
                    </span>
                </div>
            </article>

            <article className="w-full max-h-[80vh] rounded-lg p-2 flex flex-col items-center justify-center">

                <Carrousel content={items} />

            </article>

        </section>
    );
}