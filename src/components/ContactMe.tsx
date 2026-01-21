import Email from "@/components/icons/email";
import WhatsApp from "@/components/icons/whatsapp";

import Toast from "@/components/ToastDefault";

const EMAIL = "earnnesttodev@gmail.com";
const PHONE = "923_118_0488";

const ContactMe = () => {
    return (
        <article className="w-full rounded-lg flex flex-row items-center justify-center gap-4 p-2">

            <button
                title="Copiar email"
                className="
                flex 
                flex-row 
                items-center justify-center 
                gap-2 rounded-full 
                bg-zinc-800/40 
                hover:bg-red-500 
                font-bold
                cursor-pointer
                px-4 py-2 
                hover:after:content-['Copiar_email'] 
                transition-all duration-600"
                onClick={() => {
                    copiarAlPortapapeles(EMAIL);
                }}
            >
                <Email size={24} color="white" />
            </button>

            <button
                title="Copiar número telefónico"
                className="
                flex 
                flex-row 
                items-center justify-center 
                gap-2 rounded-full 
                bg-zinc-800/40 
                hover:bg-lime-600 
                font-bold
                cursor-pointer
                px-4 py-2 
                hover:after:content-['Copiar_número'] 
                transition-all duration-600"
                onClick={() => {
                    copiarAlPortapapeles(PHONE.replaceAll("_", ""));
                }}
            >
                <WhatsApp size={24} color="white" />
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