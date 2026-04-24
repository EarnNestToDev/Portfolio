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
import SVGReact from "@/components/icons/tecnologies/react";
import SVGGithub from "@/components/icons/github";
import SVGLaravel from "@/components/icons/tecnologies/laravel";

const size = {
    big: 32,
    mid: 32,
    sml: 32
}

const SVG = {
    java: <SVGJava width={size.big} height={size.big} />,
    netbeans: <SVGNetBeans width={size.big} height={size.big} />,
    androidStudio: <SVGAndroidStudio width={size.mid} height={size.mid} />,
    vscode: <SVGVSCode width={size.big} height={size.big} />,
    php: <SVGPHP width={size.mid} height={size.mid} />,
    mysql: <SVGMySQL width={size.mid} height={size.mid} />,
    json: <SVGJSON width={size.sml} height={size.sml} fill="currentColor" />,
    javascript: <SVGJavaScript width={size.mid} height={size.mid} />,
    xampp: <SVGXampp width={size.mid} height={size.mid} />,
    firebase: <SVGFirebase width={size.sml} height={size.sml} />,
    python: <SVGPython width={size.sml} height={size.sml} />,
    chatgpt: <SVGChatGPT width={size.mid} height={size.mid} />,
    nodejs: <SVGNodeJS width={size.mid} height={size.mid} />,
    nextjs: <SVGNextJS width={size.mid} height={size.mid} fill="currentColor" />,
    tailwind: <SVGTailwind width={size.mid} height={size.mid} />,
    typescript: <SVGTypeScript width={size.mid} height={size.mid} />,
    github: <SVGGithub width={size.mid} height={size.mid} fill="currentColor" />,
    react: <SVGReact width={size.mid} height={size.mid} />,
    laravel: <SVGLaravel width={size.mid} height={size.mid} />
};

const customDecorate = {
    learning: "bg-lime-500",
    destacado: "bg-orange-500",
    regular: "bg-sky-800",
    irrelevante: "bg-sky-200",
    scale: " transition-all bg-zinc-100/40 dark:bg-zinc-950/15 md:bg-transparent hover:bg-zinc-50/10 px-4 py-2"
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
            title: "PHP",
            icon: SVG.php,
            description: "Como el vino, entre más viejo mejor sabe 🍷🧐"
        },
        {
            customDecorate: customDecorate.scale,
            title: "TypeScript",
            icon: SVG.typescript,
            description: "Mucho mejor que JS"
        },
        {
            customDecorate: customDecorate.scale,
            title: "TailwindCSS",
            icon: SVG.tailwind,
            description: "El CSS que CSS debió ser 🗣️"
        }
    ],
    regular: [
        {
            customDecorate: customDecorate.scale,
            title: "Node.js",
            icon: SVG.nodejs,
            description: "'npm run dev' goes brrrrr 🗿🗿🗿"
        },
        {
            customDecorate: customDecorate.scale,
            title: "Next.js",
            icon: SVG.nextjs,
            description: "Mi primer framework y ya me encanta"
        },
        {
            customDecorate: customDecorate.scale,
            title: "React",
            icon: SVG.react,
            description: "Bastante amigable..."
        },
        {
            customDecorate: customDecorate.scale,
            title: "JavaScript",
            icon: SVG.javascript,
            description: "Ya recordé por qué odiaba esta sintaxis"
        },
        {
            customDecorate: customDecorate.scale,
            title: "MySQL",
            icon: SVG.mysql,
            description: "'8000 rows affected' 💀"
        }
    ],
    learning: [
        {
            customDecorate: customDecorate.scale,
            title: "Laravel",
            icon: SVG.laravel,
            description: "Explorando... por ahora, solo sé decir: 'php artisan serve' goes brrrrr 🗿🗿🗿"
        }
    ]
};


export default tecnologies;