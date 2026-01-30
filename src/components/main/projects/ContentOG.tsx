import Links from "@/components/main/projects/Links";

import SVGJava from "@/components/icons/tecnologies/java";
import SVGAndroidStudio from "@/components/icons/tecnologies/android_studio";
import SVGNetbeans from "@/components/icons/tecnologies/netbeans";
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

const size = {
    DEF: 32,
    BIG: 48
};

const SVG = {
    java: <SVGJava width={size.DEF} height={size.DEF} />,
    androidStudio: <SVGAndroidStudio width={size.DEF} height={size.DEF} />,
    netbeans: <SVGNetbeans width={size.DEF} height={size.DEF} />,
    vscode: <SVGVSCode width={size.DEF} height={size.DEF} />,
    php: <SVGPHP width={size.DEF} height={size.DEF} />,
    mysql: <SVGMySQL width={size.BIG} height={size.BIG} />,
    json: <SVGJSON width={size.DEF} height={size.DEF} fill="currentColor" />,
    javascript: <SVGJavaScript width={size.DEF} height={size.DEF} />,
    xampp: <SVGXampp width={size.DEF} height={size.DEF} />,
    firebase: <SVGFirebase width={size.DEF} height={size.DEF} />,
    python: <SVGPython width={size.DEF} height={size.DEF} />,
    chatgpt: <SVGChatGPT width={size.DEF} height={size.DEF} />,
    nodejs: <SVGNodeJS width={size.DEF} height={size.DEF} />,
    nextjs: <SVGNextJS width={size.DEF} height={size.DEF} fill="currentColor" />,
    tailwind: <SVGTailwind width={size.DEF} height={size.DEF} />,
    typescript: <SVGTypeScript width={size.DEF} height={size.DEF} />,
};

const rank = {
    actual: "bg-lime-500/80",
    destacado: "bg-orange-500/80",
    regular: "bg-sky-500/80",
    irrelevante: "bg-sky-100/80"
}

const descInfo = (description: string) => {
    return (
        <p className="text-zinc-200/80 italic flex items-center justify-start before:content-['ⓘ'] before:mr-2">
            {description}
        </p>
    );
}

const link = new Links();

const url_default_img = (folder: number) => "./image/projects/" + folder + "/";

const projects = [
    {
        id: 7,
        customDecorate: rank.actual,
        title: "Portafolio",
        year: "2026",
        // url: url_default_img(7),
        description:
            <>
                <p>
                    Lo sé, es irónico e innecesario poner el portafolio...
                </p>
                <p>
                    Pero es un proyecto realizado con tecnologías modernas y no exploradas por mí.
                    En opinión, ha sido una experiencia muy cómoda a diferencia del desarrollo web vanilla.
                </p>
                <p className="font-bold italic">
                    Vivan los frameworks y los componentes.
                </p>
            </>,
        tecnologies: [
            SVG.vscode,
            SVG.nodejs,
            SVG.nextjs,
            SVG.typescript,
            SVG.tailwind
        ],
        link: [
            link.github("https://github.com/EarnNestToDev/Portfolio"),
            // link.viewImages(url_default_img(7), 0, "QdBHLji29yY")
        ]
    },
    {
        id: 6,
        customDecorate: rank.destacado,
        title: "TutorTracking (ITSLV)",
        year: "2025",
        url: url_default_img(6),
        description:
            <>
                <p>
                    TutorTracking es una check-list para los docentes del
                    Instituto Tecnológico Superior de Villa la Venta.
                    Permite:
                </p>
                <ul className="list-disc list-inside">
                    <li>Loggeo de usuario.</li>
                    <li>Tomar lista de forma rapida y sencilla.</li>
                    <li>Consultar check-list anteriores.</li>
                    <li>Crear reportes mensuales en PDF.</li>
                    <li>Automatizar mensajes para notificar falta a alumnos.</li>
                    <li>Gestionar a los docentes del lado del servidor.</li>
                </ul>
                {descInfo("Está disponible exclusivamente para la institución para plataformas Android.")}
                <p className="font-bold flex items-center justify-center">
                    ► Proyecto de titulación ◄
                </p>
            </>
        ,
        tecnologies: [
            SVG.androidStudio,
            SVG.vscode,
            SVG.java,
            SVG.php,
            SVG.mysql,
            SVG.json,
            SVG.chatgpt,
            SVG.javascript,
            SVG.xampp
        ],
        link: [
            // link.viewImages(url_default_img(6), 10, "mnJud2eDZqA")
        ]
    },
    {
        id: 5,
        customDecorate: rank.regular,
        title: "GPSPrototipe",
        year: "2024",
        url: url_default_img(5),
        description:
            <>
                <p>
                    Es un localizador en tiempo real pensado principalmente para personas dependientes
                    y con discapacidades.
                </p>
                <p>
                    La aplicación móvil funciona como el localizador y
                    la página web como un visor.
                </p>
                {descInfo("Proyecto en equipo multi-disciplinario que logró pasar la etapa local del InnovaTecNM 2024.")}
            </>,
        tecnologies: [
            SVG.androidStudio,
            SVG.vscode,
            SVG.java,
            SVG.php,
            SVG.firebase,
            SVG.json,
            SVG.chatgpt,
            SVG.javascript
        ],
        link: [
            link.github("https://github.com/EarnNestToDev/gpsvprototipe.github.io"),
            link.website("https://earnnesttodev.github.io/gpsvprototipe.github.io/")
        ]
    },
    {
        id: 4,
        customDecorate: rank.regular,
        title: "Toxic Plant Identifier Prototipe",
        year: "2024",
        url: url_default_img(4),
        description:
            <>
                <p>
                    Es una aplicación capaz de identificar plantas tóxicas a través de un modelo
                    de Machine Learning preentrenado mediante una fotografía desde el dispositivo
                    móvil Android.
                </p>
                {descInfo("Se entrenó con 2 plantas (Belladona y Hortensia).")}
            </>,
        tecnologies: [
            SVG.androidStudio,
            SVG.vscode,
            SVG.java
        ],
        link: [
            link.github("https://github.com/EarnNestToDev/TPIPServer.git")
        ]
    },
    {
        id: 3,
        customDecorate: rank.regular,
        title: "Práctica Analizador Léxico",
        year: "2024",
        description:
            <>
                <p>
                    Proyecto de un analizador léxico en Java desde cero,
                    sin usar librerías o algún tipo de framework,
                    totalmente vanilla.
                </p>
                {descInfo("Este proyecto me ayudó mucho a desarrollar mi análisis y lógica de programación.")}
            </>,
        tecnologies: [
            SVG.netbeans
        ],
        link: [
            link.github("https://github.com/EarnNestToDev/AnaLex.git")
        ]
    },
    {
        id: 2,
        customDecorate: rank.regular,
        title: "Punto de Venta de Videojuegos",
        year: "2023",
        url: url_default_img(2),
        description:
            <>
                <p>
                    Es un CRUD pensado para videojuegos capaz de ejecutarse en diferentes
                    ordenadores con SO Windows. Posee:
                </p>
                <ul className="list-disc list-inside">
                    <li>Loggin de usuarios.</li>
                    <li>Sistema de control de usuarios.</li>
                    <li>CRUD de DB.</li>
                </ul>
                {descInfo("Solo fue un proyecto final.")}
            </>,
        tecnologies: [
            SVG.netbeans,
            SVG.mysql
        ],
        link: []
    },
    {
        id: 1,
        customDecorate: rank.irrelevante,
        title: "Práctica Windows Server",
        year: "2023",
        url: url_default_img(1),
        description:
            <>
                <p>
                    Práctica para levantar y gestionar servicios en Windows Server
                    además de alojar páginas web desde ahí.
                </p>
                {descInfo("Gestioné servicios como HTTP, PHP, MySQL, EMAIL, etc.")}
            </>,
        link: []
    },
    {
        id: 0,
        customDecorate: rank.irrelevante,
        title: "Prácticas de Cisco",
        year: "2023",
        url: url_default_img(0),
        description:
            <>
                <p>
                    Prácticas en Cisco para gestionar y montar diversos
                    sistemas de redes como la de árbol, punto a punto, etc.
                </p>
            </>,
        link: []
    }
];


export default projects;