import SVGNodeJS from "@/components/icons/tecnologies/nodejs";
import SVGNextJS from "@/components/icons/tecnologies/nextjs";
import SVGTailwind from "@/components/icons/tecnologies/tailwind";
import SVGTypeScript from "@/components/icons/tecnologies/typescript";
import SVGReact from "@/components/icons/tecnologies/react";

const DEFAULT_SIZE = 32;

const SVG = {
    nodejs: <SVGNodeJS width={DEFAULT_SIZE} height={DEFAULT_SIZE} />,
    nextjs: <SVGNextJS width={DEFAULT_SIZE} height={DEFAULT_SIZE} />,
    tailwind: <SVGTailwind width={DEFAULT_SIZE} height={DEFAULT_SIZE} />,
    typescript: <SVGTypeScript width={DEFAULT_SIZE} height={DEFAULT_SIZE} />,
    react: <SVGReact width={DEFAULT_SIZE} height={DEFAULT_SIZE} />,
}

const Footer = () => {
    return (
        <footer className="min-h-[10vh] bg-opacity-50 w-full flex flex-col md:flex-row items-center justify-center border-t border-orange-200/20 pt-4 pb-4 mt-24 gap-4">

            <div>
                <span>© {new Date().getFullYear()} Casi todos los derechos reservados</span>
            </div>

            <span className="text-orange-400 hidden md:block">|</span>

            <div className="flex flex-row flex-wrap items-center justify-center gap-2">
                <div><span className="text-zinc-400">Hecho con</span></div>
                <div className="flex flex-row flex-wrap items-center justify-center gap-2">
                    {SVG.nextjs}
                    {SVG.react}
                    {SVG.typescript}
                    {SVG.tailwind}
                </div>
            </div>

        </footer>
    );
}

export default Footer;