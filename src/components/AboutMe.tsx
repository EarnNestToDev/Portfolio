import User from "@/components/icons/user_outline";
const imgElements = {
    TITLE: "Zep zep zep 👽...",
    ALT_NAME: "About_Me",
    IMG_URL: "https://drive.google.com/thumbnail?id=1l91mrhItezrFfsVT4jp6hpkPgQsvhUNa&sz=800",
    CLIP_PATH: "[clip-path:polygon(0_50%,_23%_100%,_100%_86%,_95%_3%,_19%_0)]",
    BOX_SHADOW: "shadow-[inset_0px_30px_50px_-12px_rgba(50,50,93,0.25),inset_0px_18px_26px_-18px_rgba(0,0,0,0.3)]",
    MASK_IMAGE: "[mask-image:linear-gradient(to_bottom,_white_30%,_transparent_95%_95%)]"
}

const AboutMe = () => {
    return (
        <section className="w-full md:w-[600px] flex flex-col items-center justify-center gap-2 rounded-lg p-2" id="aboutMe">

            <article className="md:grid md:grid-cols-[2fr_1fr] md:grid-rows-[auto_100%] w-full flex flex-col items-center justify-center gap-2 rounded-lg p-2">

                <header className="text-2xl font-bold w-content rounded-lg p-2 flex flex-row items-center gap-2">
                    <User size={36} color="#e37600" />
                    <span>
                        Sobre mí...
                    </span>
                </header>

                <img
                    title={imgElements.TITLE}
                    src={imgElements.IMG_URL}
                    alt={imgElements.ALT_NAME}
                    className="row-span-2 min-w-[200px] min-h-[200px] rounded-lg border-2 border-orange-500 rotate-3 md:rotate-6" />

                <footer className="flex flex-col items-start justify-start text-gray-300 text-lg">
                    <span>
                        Lo sé, otro egresado más del montón...
                        Un día noté que mi lógica y análisis eran bastante
                        decentes, así que simplemente decidí aplicarlas
                        en lenguajes de programación y pues aquí estoy, como un
                        egresado de la carrera de Ingeniería en Sistemas
                        Computacionales en busca de chamba.
                    </span>
                    <span>
                        Y sí, realmente me gusta programar, he usado
                        computadoras desde mis 8 años, mi objetivo
                        principal es alcanzar la profesionalidad en
                        dicho rubro para algún día realizar un
                        videojuego como proyecto real. Y claro,
                        subsistir económicamente de esta oportunidad.
                    </span>
                </footer>

            </article>

        </section>
    );
}

export default AboutMe