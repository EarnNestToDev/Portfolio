import Toast from "@/components/ToastDefault";
import ButtonLink from "@/components/ui/ButtonLink";

import SVGEmail from "@/components/icons/email";
import SVGLinkedin from "@/components/icons/linkedin";
import SVGGithub from "@/components/icons/github";

const DEFAULT_SIZE = 24;

const CONTACTO = {
    EMAIL: "earnnesttodev@gmail.com"
}

const SVG = {
    email: <SVGEmail width={DEFAULT_SIZE} height={DEFAULT_SIZE} fill="currentColor" />,
    linkedin: <SVGLinkedin width={DEFAULT_SIZE} height={DEFAULT_SIZE} fill="white" />,
    github: <SVGGithub width={DEFAULT_SIZE} height={DEFAULT_SIZE} fill="currentColor" />
}

const ContactMe = () => {
    return (
        <article className="w-full flex flex-col md:grid md:grid-cols-2 md:grid-rows-1 items-center justify-center gap-4">
            <div>
                <button
                    data-text="Copiar email"
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
                    text-white
                    cursor-pointer
                    px-4 py-2 
                    md:after:content-['•'] 
                    after:content-[attr(data-text)] 
                    md:hover:after:content-[attr(data-text)] 
                    transition-all duration-600
                "
                    onClick={() => {
                        copiarAlPortapapeles(CONTACTO.EMAIL);
                    }}
                >
                    {SVG.email}
                </button>
            </div>

            <div
                className="
                    w-full
                    flex
                    flex-row 
                    gap-4 
                    items-center 
                    justify-center 
                    md:justify-end
                "
            >
                <ButtonLink
                    title="LinkedIn"
                    href="https://www.linkedin.com/in/ernesto-dlc-campos-304hellsinger"
                    icon={SVG.linkedin}
                    className="
                        bg-sky-600
                        md:bg-zinc-800/40
                        cursor-pointer
                        p-2
                        rounded-full
                        hover:bg-sky-600
                        transition-all duration-600
                    "
                />
                <ButtonLink
                    title="GitHub"
                    href="https://github.com/EarnNestToDev"
                    icon={SVG.github}
                    className="
                        invert
                        md:invert-0
                        bg-zinc-100
                        dark:bg-zinc-900
                        md:bg-zinc-800/40
                        hover:bg-zinc-800
                        cursor-pointer
                        p-2
                        rounded-full
                        hover:invert
                        transition-all duration-600
                    "
                />
            </div>

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