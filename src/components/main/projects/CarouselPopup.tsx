import LYTEmbed from "@/components/LiteYTEmbed";

export default function Carousel({
    path_img,
    n_elements,
    url_video,
    killContentPopUp
}: {
    path_img: string,
    n_elements: number,
    url_video?: string,
    killContentPopUp: () => void
}) {
    return (
        <div className={"fixed z-1000 top-0 left-0 w-full h-full flex flex-col items-center justify-center overflow-hidden p-2 rounded-lg backdrop-blur-xs backdrop-grayscale transition-all"} id="popUp">
            <div className="h-full w-full md:h-full md:w-auto md:aspect-9/16 flex flex-row items-center rounded-lg overflow-scroll overflow-y-auto snap-x snap-mandatory gap-2">
                {setContent(path_img, n_elements, url_video)}
            </div>

            <button
                title="Cerrar"
                onClick={() => {
                    killContentPopUp();
                }}

                className="bg-red-600 text-white p-4 rounded-lg absolute bottom-4 md:bottom-8 cursor-pointer border border-zinc-200/50">
                ✕
            </button>
        </div>
    );
}

function setContent(path: string, limit: number, video?: string) {
    let content = [];

    if (video) {
        content.push(
            contentVideo(video)
        );
    }
    for (let index = 0; index < limit; index++) {
        content.push(
            <img
                key={index}
                src={`${path}${index}.webp`}
                alt="img"
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