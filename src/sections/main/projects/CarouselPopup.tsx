import LYTEmbed from "@/components/LiteYTEmbed";

export default function Carousel({
    json_url_img,
    url_video
}: {
    json_url_img: JSON_FORMAT[],
    url_video?: string
}) {
    return (
        <div className="h-full w-full md:h-full md:w-auto md:aspect-9/20 flex flex-row items-center rounded-lg overflow-scroll overflow-y-auto snap-x snap-mandatory gap-2 scroll-default">
            {setContent(json_url_img, url_video)}
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
        content = [...content,
        <img
            key={index}
            src={json[index].url}
            alt={json[index].title}
            loading="lazy"
            className="rounded-lg object-cover snap-center min-w-full"
        />
        ]
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