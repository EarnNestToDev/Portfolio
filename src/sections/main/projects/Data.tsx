import Links from "@/sections/main/projects/Links";

// import SVGJava from "@/components/icons/tecnologies/java";
// import SVGAndroidStudio from "@/components/icons/tecnologies/android_studio";
// import SVGNetbeans from "@/components/icons/tecnologies/netbeans";
// import SVGPHP from "@/components/icons/tecnologies/php";
// import SVGMySQL from "@/components/icons/tecnologies/mysql";
// import SVGJSON from "@/components/icons/tecnologies/json";
// import SVGJavaScript from "@/components/icons/tecnologies/javascript";
// import SVGVSCode from "@/components/icons/tecnologies/vscode";
// import SVGXampp from "@/components/icons/tecnologies/xampp";
// import SVGFirebase from "@/components/icons/tecnologies/firebase";
// import SVGPython from "@/components/icons/tecnologies/python";
// import SVGChatGPT from "@/components/icons/tecnologies/chatgpt";
// import SVGNodeJS from "@/components/icons/tecnologies/nodejs";
// import SVGNextJS from "@/components/icons/tecnologies/nextjs";
// import SVGTailwind from "@/components/icons/tecnologies/tailwind";
// import SVGTypeScript from "@/components/icons/tecnologies/typescript";
// import SVGReact from "@/components/icons/tecnologies/react";

import JSON_IMG_6 from "../../../../public/image/projects/6/img_url.json";
import JSON_IMG_5 from "../../../../public/image/projects/5/img_url.json";
import JSON_IMG_4 from "../../../../public/image/projects/4/img_url.json";
import JSON_IMG_3 from "../../../../public/image/projects/3/img_url.json";
import JSON_IMG_2 from "../../../../public/image/projects/2/img_url.json";
import JSON_IMG_1 from "../../../../public/image/projects/1/img_url.json";
import JSON_IMG_0 from "../../../../public/image/projects/0/img_url.json";
import tecnologies from "../tecnologies/Data";


const size = {
    DEF: 32,
    BIG: 32
};

// const SVG = {
//     java: <SVGJava width={size.DEF} height={size.DEF} />,
//     androidStudio: <SVGAndroidStudio width={size.DEF} height={size.DEF} />,
//     netbeans: <SVGNetbeans width={size.DEF} height={size.DEF} />,
//     vscode: <SVGVSCode width={size.DEF} height={size.DEF} />,
//     php: <SVGPHP width={size.DEF} height={size.DEF} />,
//     mysql: <SVGMySQL width={size.BIG} height={size.BIG} />,
//     json: <SVGJSON width={size.DEF} height={size.DEF} stroke="currentColor" />,
//     javascript: <SVGJavaScript width={size.DEF} height={size.DEF} />,
//     xampp: <SVGXampp width={size.DEF} height={size.DEF} />,
//     firebase: <SVGFirebase width={size.DEF} height={size.DEF} />,
//     python: <SVGPython width={size.DEF} height={size.DEF} />,
//     chatgpt: <SVGChatGPT width={size.DEF} height={size.DEF} />,
//     nodejs: <SVGNodeJS width={size.DEF} height={size.DEF} />,
//     nextjs: <SVGNextJS width={size.DEF} height={size.DEF} stroke="currentColor" />,
//     tailwind: <SVGTailwind width={size.DEF} height={size.DEF} />,
//     typescript: <SVGTypeScript width={size.DEF} height={size.DEF} />,
//     react: <SVGReact width={size.DEF} height={size.DEF} />
// };

const SVG = {
    java: "Java",
    androidStudio: "Android Studio",
    netbeans: "Netbeans",
    vscode: "Vscode",
    php: "PHP",
    mysql: "MySQL",
    json: "JSON",
    javascript: "JavaScript",
    xampp: "Xampp",
    firebase: "Firebase",
    python: "Python",
    chatgpt: "Chatgpt",
    nodejs: "Node.js",
    nextjs: "Next.js",
    tailwind: "TailwindCSS",
    typescript: "TypeScript",
    react: "React",
    http: "HTTP",
    ssh: "SSH",
    dns: "DNS",
    dhcp: "DHCP",
    email: "EMAIL"
}

const rank = {
    actual: "bg-lime-500/10 border-t-2 border-t-lime-500/50",
    destacado: "bg-orange-500/10 border-t-2 border-t-orange-500/50",
    regular: "bg-sky-500/10 border-t-2 border-t-sky-500/50",
    irrelevante: "bg-zinc-900/50 border-t-2 border-t-zinc-500/50"
}

const descInfo = (description: string) => {
    return (
        <p className="text-zinc-200/80 italic flex items-center justify-start before:content-['ⓘ'] before:mr-2">
            {description}
        </p>
    );
}

const link = new Links();

const JSON = {
    project6: JSON_IMG_6,
    project5: JSON_IMG_5,
    project4: JSON_IMG_4,
    project3: JSON_IMG_3,
    project2: JSON_IMG_2,
    project1: JSON_IMG_1,
    project0: JSON_IMG_0,
    noImages: undefined
}

const Projects = [
    {
        id: 7,
        customDecorate: rank.actual,
        title: "Portfolio Web",
        year: "2026",
        // url: url_default_img(7),
        description:
        {
            short:
                <>
                    <p>
                        Primer acercamiento a la creación
                        de páginas web con tecnologías modernas.
                    </p>
                </>,
            long:
                <>
                    <p>
                        Si bien es cierto que es innecesario y poco prudente
                        colocar el portafolio en esta sección,
                        el objetivo principal es destacar el uso de tecnologías
                        modernas y con poco o nulo uso de mi parte.
                    </p>
                    <p>
                        Por otro lado, el desarrollo y el tiempo para adaptarse
                        a las nuevas herramientas fue más rápido de lo estimado
                        resultando en un proyecto tal vez no de acuerdo referente
                        a las buenas prácticas, pero funcional.
                    </p>
                    <p>
                        Por último, me encantaría destacar lo cómodo y satisfactorio
                        que fue el empleo de estas herramientas para el desarrollo
                        de este proyecto.
                    </p>
                </>
        }
        ,
        tecnologies: [
            SVG.nodejs,
            SVG.nextjs,
            SVG.react,
            SVG.typescript,
            SVG.tailwind
        ],
        link: [
            link.github("https://github.com/EarnNestToDev/Portfolio"),
            link.viewImages(JSON.noImages, "QdBHLji29yY")
        ]
    },
    {
        id: 6,
        customDecorate: rank.destacado,
        title: "TutorTracking",
        year: "2025",
        url: JSON.project6[0].url,
        description:
        {
            short:
                <>
                    <p>
                        Sistema de registro de asistencias
                        y generación de reportes PDF
                        para el Instituto Tecnológico Superior
                        de Villa la Venta.
                    </p>
                </>,
            long:
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
        },
        tecnologies: [
            SVG.androidStudio,
            SVG.java,
            SVG.php,
            SVG.mysql,
            SVG.xampp
        ],
        link: [
            link.viewImages(JSON.project6, "mnJud2eDZqA")
        ]
    },
    {
        id: 5,
        customDecorate: rank.regular,
        title: "GPSPrototipe",
        year: "2024",
        url: JSON.project5[0].url,
        description:
        {
            short:
                <>
                    <p>
                        Sistema de localización en tiempo real
                        orientado para personas dependientes y con discapacidades.
                    </p>
                </>,
            long:
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
                </>
        }
        ,
        tecnologies: [
            SVG.androidStudio,
            SVG.java,
            SVG.php,
            SVG.firebase,
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
        title: "Toxic Plant Identifier",
        year: "2024",
        url: JSON.project4[0].url,
        description:
        {
            short:
                <>
                    <p>
                        Sistema identificador de dos tipos de
                        plantas tóxicas mediante una fotografía
                        desde un dispositivo móvil.
                    </p>
                </>,
            long:
                <>
                    <p>
                        Es una aplicación capaz de identificar dos tipos de
                        plantas tóxicas a través de un modelo
                        de Machine Learning preentrenado mediante una fotografía desde el dispositivo
                        móvil Android.
                    </p>
                    {descInfo("Se entrenó con 2 plantas (Belladona y Hortensia).")}
                </>
        }
        ,
        tecnologies: [
            SVG.androidStudio,
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
        url: JSON.project3[0].url,
        description:
        {
            short:
                <>
                    <p>
                        Analizador léxico como proyecto de universidad
                        para reforzar la lógica hecho en Java vanilla.
                    </p>
                </>,
            long:
                <>
                    <p>
                        Proyecto de un analizador léxico en Java desde cero,
                        sin usar librerías o algún tipo de framework,
                        totalmente vanilla.
                    </p>
                    {descInfo("Este proyecto me ayudó mucho a desarrollar mi análisis y lógica de programación.")}
                </>
        }
        ,
        tecnologies: [
            SVG.netbeans,
            SVG.java
        ],
        link: [
            link.github("https://github.com/EarnNestToDev/AnaLex.git"),
            link.viewImages(JSON.project3)
        ]
    },
    {
        id: 2,
        customDecorate: rank.regular,
        title: "Videgame Center",
        year: "2023",
        url: JSON.project2[0].url,
        description:
        {
            short:
                <>
                    <p>
                        Software Ecommerce para la gestión
                        de venta de videojuegos.
                    </p>
                </>,
            long:
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
                </>
        }
        ,
        tecnologies: [
            SVG.netbeans,
            SVG.java,
            SVG.mysql
        ],
        link: [
            link.viewImages(JSON.project2)
        ]
    },
    {
        id: 1,
        customDecorate: rank.irrelevante,
        title: "Práctica Windows Server",
        year: "2023",
        url: JSON.project1[0].url,
        description:
        {
            short:
                <>
                    <p>
                        Práctica para levantar y gestionar un
                        servidor en Windows Server
                        además de alojar y administrar páginas web.
                    </p>
                </>,
            long:
                <>
                    <p>
                        Práctica para levantar y gestionar servicios en Windows Server
                        además de alojar páginas web desde ahí.
                    </p>
                    {descInfo("Gestioné servicios como HTTP, PHP, MySQL, EMAIL, etc.")}
                </>
        },
        tecnologies: [
            SVG.http,
            SVG.php,
            SVG.mysql,
            SVG.email,
            SVG.dns,
            SVG.dhcp,
            SVG.ssh
        ],
        link: []
    },
    {
        id: 0,
        customDecorate: rank.irrelevante,
        title: "Prácticas de Cisco",
        year: "2023",
        url: JSON.project0[0].url,
        description:
        {
            short:
                <>
                    <p>
                        Prácticas en Cisco para la
                        gestión y administración de redes.
                    </p>
                </>,
            long:
                <>
                    <p>
                        Prácticas en Cisco para gestionar y montar diversos
                        sistemas de redes como la de árbol, punto a punto, etc.
                    </p>
                </>
        },
        tecnologies: [
            SVG.dns,
            SVG.dhcp,
            SVG.ssh
        ],
        link: []
    }
];


export default Projects;