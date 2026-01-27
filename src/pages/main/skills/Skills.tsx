import Content from "@/pages/main/skills/Content";
import Card from "@/pages/main/skills/Card";

import Bulb from "@/components/icons/bulb_outline";


export default function Skills() {

    return (
        <section className="w-full flex flex-col items-center justify-center gap-2 p-2">

            <article className="w-full flex flex-col items-start justify-center gap-2 rounded-lg p-2">

                <div className="text-2xl font-bold w-content rounded-lg p-2 flex flex-row items-center gap-2">
                    <Bulb size={36} color="#ffc11a" />
                    <span>
                        Habilidades
                    </span>
                </div>

                <div className="text-base text-gray-200/50 font-bold rounded-lg pl-2 pr-2">
                    <span>
                        Habilidades destacables a consideración propia
                    </span>
                </div>

            </article>

            <article className="w-full rounded-lg p-2 flex flex-row flex-wrap items-stretch justify-start md:justify-center gap-4">

                {Content.map((Content, index) => (
                    <Card
                        key={index}
                        customDecorate={Content.customDecorate}
                        title={Content.title}
                        color={Content.color}
                        border={Content.border}
                    />
                ))}

            </article>

        </section>
    );
}