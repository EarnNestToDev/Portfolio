import Message from "@/components/icons/message_outline";
import Email from "@/components/icons/email";
import WhatsApp from "@/components/icons/whatsapp";
import Copy from "@/components/icons/copy";

import Toast from "@/components/ToastDefault";

const EMAIL = "earnnesttodev@gmail.com";
const PHONE = "923_118_0488";

const contactMe = () => {
    return (
        <section className="w-full flex items-center justify-center">

            <article
                className="max-w-[90vw] md:max-w-[600px] flex flex-col items-start justify-center gap-2 rounded-lg p-2"
            >

                <article className="flex flex-col items-start justify-center gap-2 rounded-lg p-2" >

                    <div className="text-2xl font-bold w-content rounded-lg p-2 flex flex-row items-center gap-2">
                        <Message size={36} color="white" />
                        <span>
                            Contáctame
                        </span>
                    </div>
                    <div className="flex bg-zinc-900 text-base text-gray-200/80 font-bold rounded-lg pl-2 pr-2">
                        <span>
                            Medios de para comunicarse directamente conmigo :)
                        </span>
                    </div>

                </article>

                <article className="rounded-lg p-2 flex flex-col items-start justify-center gap-2">

                    <div className="flex flex-row flex-wrap items-center justify-center gap-4 rounded-lg p-2">
                        <Email size={36} color="white" />
                        <span
                            data-email={EMAIL}
                            className="text-sm md:text-base text-gray-200/80 before:content-[attr(data-email)]"
                        />
                        <button
                            title="Copiar email"
                            className="rounded-lg hover:bg-zinc-800/40 hover:cursor-pointer hover:scale-115"
                            onClick={() => {
                                copiarAlPortapapeles(EMAIL);
                            }}
                        >
                            <Copy size={24} color="white" />
                        </button>
                    </div>

                    <div className="flex flex-row flex-wrap items-center justify-center gap-4 rounded-lg p-2">
                        <WhatsApp size={36} color="white" />
                        <span
                            data-phone={"(+52) " + PHONE.replaceAll("_", " ")}
                            className="text-sm md:text-base text-gray-200/80 before:content-[attr(data-phone)]"
                        />
                        <button
                            title="Copiar número telefónico"
                            className="rounded-lg hover:bg-zinc-800/40 hover:cursor-pointer hover:scale-115"
                            onClick={() => {
                                copiarAlPortapapeles(PHONE.replaceAll("_", ""));
                            }}
                        >
                            <Copy size={24} color="white" />
                        </button>
                    </div>

                </article>

            </article >

        </section>
    );
}

async function copiarAlPortapapeles(text: string) {
    try {
        await navigator.clipboard.writeText(text);
        Toast("Copiado al portapapeles");
    } catch (err) {
        Toast("Error al copiar");
    }
}

export default contactMe;