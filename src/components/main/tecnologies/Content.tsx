import SVGJava from "@/components/icons/tecnologies/java";
import SVGNetBeans from "@/components/icons/tecnologies/netbeans";
import SVGAndroidStudio from "@/components/icons/tecnologies/android_studio";
import SVGPHP from "@/components/icons/tecnologies/php";
import SVGMySQL from "@/components/icons/tecnologies/mysql";
import SVGJSON from "@/components/icons/tecnologies/json";
import SVGJavaScript from "@/components/icons/tecnologies/javascript";
import SVGVSCode from "@/components/icons/tecnologies/vscode";
import SVGXampp from "@/components/icons/tecnologies/xampp";
import SVGFirebase from "@/components/icons/tecnologies/firebase";
import SVGPython from "@/components/icons/tecnologies/python";
import SVGChatGPT from "@/components/icons/tecnologies/chatgpt";
import SVGNodeJS from "@/components/icons/tecnologies/nodejs";
import SVGNextJS from "@/components/icons/tecnologies/nextjs";
import SVGTailwind from "@/components/icons/tecnologies/tailwind";
import SVGTypeScript from "@/components/icons/tecnologies/typescript";
import SVGGithub from "@/components/icons/github";

const size = {
    big: 64,
    mid: 48,
    sml: 32
}

const SVG = {
    java: <SVGJava size={size.big} />,
    netbeans: <SVGNetBeans size={size.big} />,
    androidStudio: <SVGAndroidStudio size={size.mid} />,
    vscode: <SVGVSCode size={size.big} />,
    php: <SVGPHP size={size.mid} />,
    mysql: <SVGMySQL size={size.mid} />,
    json: <SVGJSON size={size.sml} color="white" />,
    javascript: <SVGJavaScript size={size.mid} />,
    xampp: <SVGXampp size={size.mid} />,
    firebase: <SVGFirebase size={size.sml} />,
    python: <SVGPython size={size.sml} />,
    chatgpt: <SVGChatGPT size={size.mid} />,
    nodejs: <SVGNodeJS size={size.mid} />,
    nextjs: <SVGNextJS size={size.mid} color="white" />,
    tailwind: <SVGTailwind size={size.mid} />,
    typescript: <SVGTypeScript size={size.mid} />,
    github: <SVGGithub size={size.mid} color="white" />
};

const customDecorate = {
    learning: "bg-lime-500",
    destacado: "bg-orange-500",
    regular: "bg-sky-800",
    irrelevante: "bg-sky-200",
    scale: " hover:scale-110 transition-all hover:bg-zinc-200/30"
}

const tecnologies =
{
    destacado: [
        {
            customDecorate: customDecorate.scale,
            title: "Java",
            icon: SVG.java,
            description: "Cómo olvidar el primer amor ♥..."
        },
        {
            customDecorate: customDecorate.scale,
            title: "NetBeans",
            icon: SVG.netbeans,
            description: "El primer IDE de mi vida"
        },
        {
            customDecorate: customDecorate.scale,
            title: "VSCode",
            icon: SVG.vscode,
            description: "Rápido, eficaz y efervecente xd"
        }
    ],
    regular: [
        {
            customDecorate: customDecorate.scale,
            title: "PHP",
            icon: SVG.php,
            description: "Me gusta más en backend"
        },
        {
            customDecorate: customDecorate.scale,
            title: "MySQL",
            icon: SVG.mysql,
            description: "'8000 rows affected' 💀"
        },
        {
            customDecorate: customDecorate.scale,
            title: "Git Hub",
            icon: SVG.github,
            description: "'git -push -force' 🗿"
        },
        {
            customDecorate: customDecorate.scale,
            title: "Android Studio",
            icon: SVG.androidStudio,
            description: "Me quitaba toda la Ram :("
        },
        {
            customDecorate: customDecorate.scale,
            title: "JavaScript",
            icon: SVG.javascript,
            description: "Extrañaba escribir lógica en Web"
        }
    ],
    learning: [
        {
            customDecorate: customDecorate.scale,
            title: "NodeJS",
            icon: SVG.nodejs,
            description: "Explorando..."
        },
        {
            customDecorate: customDecorate.scale,
            title: "NextJS",
            icon: SVG.nextjs,
            description: "El primer framework y ya me encanta"
        },
        {
            customDecorate: customDecorate.scale,
            title: "TailwindCSS",
            icon: SVG.tailwind,
            description: "El CSS que CSS debió ser 🗣️"
        },
        {
            customDecorate: customDecorate.scale,
            title: "TypeScript",
            icon: SVG.typescript,
            description: "Me gusta más que JS"
        }
    ]
};


export default tecnologies;