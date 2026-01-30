import LYTEmbed from "@/components/LiteYTEmbed";

import Close from "@/components/icons/x";

export default function Carousel({
    json_url_img,
    url_video,
    killContentPopUp
}: {
    json_url_img: JSON_FORMAT[],
    url_video?: string,
    killContentPopUp: () => void
}) {
    return (
        <div className={"fixed z-1000 top-0 left-0 w-full h-full flex flex-col items-center justify-center overflow-hidden p-2 rounded-lg backdrop-blur-xs backdrop-grayscale transition-all"} id="popUp">
            <div className="h-full w-full md:h-full md:w-auto md:aspect-9/16 flex flex-row items-center rounded-lg overflow-scroll overflow-y-auto snap-x snap-mandatory gap-2 scroll-default">
                {setContent(json_url_img, url_video)}
            </div>

            <button
                title="Cerrar"
                onClick={() => {
                    killContentPopUp();
                }}

                className="bg-red-600 hover:bg-red-400 hover:scale-115 transition-all text-white p-3 rounded-full absolute bottom-4 md:bottom-8 cursor-pointer">
                <Close width={24} height={24} stroke="white" strokeWidth={3} />
            </button>
        </div>
    );
}

function setContent(json: JSON_FORMAT[], video?: string) {
    let content = [];

    if (video) {
        content.push(
            contentVideo(video)
        );
    }
    for (let index = 0; index < json.length; index++) {
        content.push(
            <img
                key={index}
                src={json[index].url}
                alt={json[index].title}
                loading="lazy"
                className="rounded-lg object-cover snap-center min-w-full"
            />
        );
    }
    return content;
}

function contentVideo(video?: string) {
    if (!video) return null;
    return (
        <div className="rounded-lg object-cover snap-center min-w-full h-auto overflow-hidden">
            <LYTEmbed
                id={video}
                aspectHeight={9}
                aspectWidth={16}
            />
        </div>
    );

}

type JSON_FORMAT = {
    title: string;
    url: string;
}