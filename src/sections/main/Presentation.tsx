"use client";

import SVGFilecertificate from "@/components/icons/filecertificate";
// import Building from "@/components/icons/building";
import SVGFileDownload from "@/components/icons/filedownload";
import SVGCircleDashedCheck from "@/components/icons/circledashedcheck";

const PDF_CV_URL = "./docs/CV-Ernesto_De_La_Cruz_Campos.pdf";

const imgElements = {
    IMG_PROFILE_URL: "./image/img_profile.webp",
    ALT_NAME: "Ernesto_De_La_Cruz_Campos",
    CLIP_PATH: "[clip-path:polygon(0_50%,_23%_100%,_100%_86%,_95%_3%,_19%_0)]",
    BOX_SHADOW: "shadow-[inset_0px_30px_50px_-12px_rgba(50,50,93,0.25),inset_0px_18px_26px_-18px_rgba(0,0,0,0.3)]",
    MASK_IMAGE: "[mask-image:linear-gradient(to_bottom,_white_30%,_transparent_95%_95%)]"
}

const Presentation = () => {
    return (
        <section className="min-h-screen w-full flex items-center justify-center md:mt-0 mt-24" id="presentation">

            <article className="
                borderOFF
                border-orange-300/50OFF
                max-w-[90vw]
                md:max-w-[600px]
                flex
                flex-col
                items-center
                justify-center
                gap-2
                text-gray-700
                dark:text-gray-200
                rounded-lg
                p-2"
            >
                <div
                    className="flex flex-col md:grid md:grid-cols-[1fr_1fr_1fr] md:grid-rows-[auto_auto_auto] gap-4 items-center justify-center"
                >

                    <div className="md:row-span-2 flex items-center justify-center">
                        <img
                            title="Hola xd"
                            src={imgElements.IMG_PROFILE_URL}
                            alt={imgElements.ALT_NAME}
                            className={"rounded-lg max-w-[150px] max-h-[200px] aspect-2/3 " + imgElements.CLIP_PATH + " " + imgElements.BOX_SHADOW + " " + imgElements.MASK_IMAGE}
                        />
                    </div>

                    <div className="md:col-span-2 md:row-span-2 flex flex-col justify-evenly gap-6">
                        <div className="w-full flex flex-col items-start justify-start gap-2">
                            <p className="text-lg font-bold text-gray-200">
                                Saludos, soy
                            </p>
                            <p className="text-2xl font-bold text-orange-300">
                                Ernesto De La Cruz Campos
                            </p>
                        </div>

                        <div className="grid grid-cols-[16px_auto_auto] grid-rows-1 bg-zinc-900 text-base rounded-2xl">
                            <div className="bg-green-500 rounded-l-2xl"></div>
                            <div className="flex items-center justify-center p-3 md:p-0">
                                <SVGFilecertificate width={24} height={24} stroke="#6ffd59" />
                            </div>
                            <div className="flex flex-col items-start justify-center py-4">
                                <span className="text-zinc-50/90 text-base font-bold">
                                    Ingeniero en Sistemas Computacionales
                                </span>
                                <span className="text-zinc-50/50 text-sm">
                                    Instituto Tecnológico Superior de Villa la Venta
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-3 row-start-3 h-content gap-4 flex flex-col mt-4">
                        <div>
                            <p className="text-lg text-zinc-50/80 line-height-1.3">

                                Poseo más de
                                <span className="font-bold text-green-500 pl-2 pr-2">
                                    2 años
                                </span>
                                de experiencia en el desarrollo web,
                                software de escritorio, móvil,
                                además de gestión en base de datos
                                relacionales con un fuerte enfoque en Back-end
                                especialmente con
                                <span className="font-bold text-orange-400 px-2">
                                    Java
                                </span>
                                y
                                <span className="font-bold text-blue-400 pl-2">
                                    PHP
                                </span>
                                .
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row gap-4 md:gap-2 md:justify-between items-stretch md:items-center">
                            <article
                                title="Auxilio, necesito chamba xd"
                                className="
                                bg-lime-600
                                text-white
                                px-4
                                py-2
                                rounded-lg
                                flex
                                flex-row
                                items-center
                                justify-center
                                gap-2"
                            >
                                <div className="
                                        font-bold
                                        before:content-['Abierto_a_oferta_laboral']
                                        hover:before:content-['Ocupo_chamba_pa']"
                                />
                                <SVGCircleDashedCheck width={24} height={24} stroke="currentColor" />
                            </article>
                            <a
                                href={PDF_CV_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                bg-orange-500
                                hover:saturate-200
                                hover:scale-110
                                transition-all
                                cursor-pointer
                                text-white
                                px-4
                                py-2
                                rounded-lg
                                flex
                                flex-row
                                items-center
                                justify-center
                                gap-2"
                            >
                                <div
                                    className="
                                    font-bold 
                                    before:content-['Descargar_CV'] 
                                    md:before:content-['Vizualizar_CV']"
                                />
                                <SVGFileDownload width={24} height={24} fill="currentColor" />
                            </a>
                        </div>
                    </div>

                </div>
            </article>

        </section>
    );
}

export default Presentation;