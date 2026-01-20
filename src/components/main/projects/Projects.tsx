import Content from "@/components/main/projects/Content";
import Card from "@/components/main/projects/Card";

import Briefcase_outline from "@/components/icons/brieftcase_outline";


export default function Projects() {

    return (
        <section className="w-full flex flex-col items-center justify-center gap-2 rounded-lg p-2" id="projects">

            <article className="w-full flex flex-col items-start justify-center gap-2 rounded-lg p-2">
                <div className="text-2xl font-bold w-content rounded-lg p-2 flex flex-row items-center gap-2">
                    <Briefcase_outline size={36} color="#6ffd59" />
                    <span>
                        Proyectos
                    </span>
                </div>
                <div className="text-base text-gray-200/50 font-bold rounded-lg pl-2 pr-2">
                    <span>
                        Conocimiento y experiencia aplicados en desarrollo de proyectos
                    </span>
                </div>
            </article>

            <article className="w-full max-h-[80vh] rounded-lg p-2 flex flex-row items-stretch justify-start gap-6 overflow-scroll overflow-y-auto snap-x snap-mandatory">

                {Content.map((Content) => (
                    <Card
                        key={Content.id}
                        customDecorate={Content.customDecorate}
                        title={Content.title}
                        year={Content.year}
                        image={Content.url}
                        description={Content.description}
                        tecnologies={Content.tecnologies}
                        link={Content.link}
                    />
                ))}

            </article>

        </section>
    );
}