"use client";

import Filecertificate from "@/components/icons/filecertificate";
import Building from "@/components/icons/building";
import FileDownload from "@/components/icons/filedownload";
import CircleDashedCheck from "@/components/icons/circledashedcheck";

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
        <section className="w-full flex items-center justify-center" id="presentation">

            <article className="borderOFF border-orange-300/50OFF max-w-[90vw] md:max-w-[600px] flex flex-col items-center justify-center gap-2 text-gray-700 dark:text-gray-200 rounded-lg p-2">
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

                        <div className="bg-zinc-900 text-base flex flex-col gap-2 rounded-lg p-2">
                            <div className="flex items-center gap-2">
                                <Filecertificate size={24} color="currentColor" />
                                <span className="text-zinc-50">
                                    Ingeniero en Sistemas Computacionales
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <Building size={24} color="currentColor" />
                                <span className="text-green-400">
                                    Instituto Tecnológico Superior de Villa la Venta
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-3 row-start-3 h-content gap-4 flex flex-col mt-4">
                        <div>
                            <span className="text-lg text-gray-200 text-balance line-height-1.3">
                                Soy un
                                <span className="font-bold text-green-500 pl-2 pr-2">
                                    recién egresado
                                </span>
                                de la carrera en busca
                                de oportunidad laboral en el área.
                                Mis principales habilidades se basan en la
                                resolución de problemas mediante análisis lógico
                                y la curiosidad de explorar los límites
                                técnicos de las herramientas.
                            </span>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 md:gap-2 justify-between items-center">
                            <article
                                title="Auxilio, necesito chamba xd"
                                className="bg-lime-600 text-white px-4 py-2 rounded-lg flex flex-row items-center gap-2">
                                <div className="
                                        font-bold
                                        before:content-['Abierto_a_oferta_laboral']
                                        hover:before:content-['Ocupo_chamba_pa']"
                                />
                                <CircleDashedCheck size={24} color="currentColor" />
                            </article>
                            <a
                                href={PDF_CV_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-orange-500 hover:bg-orange-600 hover:scale-110 transition-all cursor-pointer text-white px-4 py-2 rounded-lg flex flex-row items-center gap-2">
                                <div
                                    className="
                                    font-bold 
                                    before:content-['Descargar_CV'] 
                                    md:before:content-['Vizualizar_CV']"
                                />
                                <FileDownload size={24} color="currentColor" />
                            </a>
                        </div>
                    </div>

                </div>
            </article>

        </section>
    );
}

export default Presentation;