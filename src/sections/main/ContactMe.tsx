import Toast from "@/components/ToastDefault";

import SVGEmail from "@/components/icons/email";
import SVGWhatsApp from "@/components/icons/whatsapp";

const EMAIL = "earnnesttodev@gmail.com";
const PHONE = "923_118_0488";

const ContactMe = () => {
    return (
        <article className="w-full rounded-lg flex flex-col md:flex-row items-center justify-center gap-4 p-2">

            <button
                data-phone={EMAIL}
                title="Copiar email"
                className="
                w-full
                md:w-auto
                flex 
                flex-row 
                items-center justify-center 
                gap-2 rounded-full 
                bg-red-600
                md:bg-zinc-800/40 
                hover:bg-red-500
                font-bold
                cursor-pointer
                px-4 py-2 
                md:after:content-['•'] 
                after:content-[attr(data-phone)] 
                md:hover:after:content-['Copiar_email'] 
                transition-all duration-600
                "
                onClick={() => {
                    copiarAlPortapapeles(EMAIL);
                }}
            >
                <SVGEmail width={24} height={24} stroke="white" />
            </button>

            <button
                data-phone={PHONE.replaceAll("_", " ")}
                title="Copiar número telefónico"
                className="
                w-full
                md:w-auto
                flex 
                flex-row 
                items-center justify-center 
                gap-2 rounded-full 
                bg-lime-600
                md:bg-zinc-800/40 
                hover:bg-lime-600 
                font-bold
                cursor-pointer
                px-4 py-2 
                md:after:content-['•'] 
                after:content-[attr(data-phone)] 
                hover:after:content-['Copiar_número'] 
                transition-all duration-600"
                onClick={() => {
                    copiarAlPortapapeles(PHONE.replaceAll("_", ""));
                }}
            >
                <SVGWhatsApp width={24} height={24} stroke="white" />
            </button>

        </article>
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

export default ContactMe;