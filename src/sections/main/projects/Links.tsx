import GitHub from "@/components/icons/github";
import Link from "@/components/icons/link";
import Watch from "@/components/icons/photo";

import Popup from "@/sections/main/projects/Popup";

const DEFAULT_SIZE = 24;

export default class Links {

    private DEFAULT_DECORATE = "flex flex-row items-center justify-center gap-2 bg-zinc-50 hover:invert-100 rounded-full py-2 px-4 hover:scale-110 transition-all cursor-pointer ";

    public github(url: string) {

        return (
            <a
                title="Ir al repositorio GitHub"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={this.DEFAULT_DECORATE}
            >
                <GitHub
                    width={DEFAULT_SIZE}
                    height={DEFAULT_SIZE}
                    fill="black"
                />

                {titleIcon("Ver GitHub", "Repo")}

            </a>
        );
    }

    public website(url: string) {

        return (
            <a
                title="Ir al sitio web"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={this.DEFAULT_DECORATE}
            >
                <Link
                    width={DEFAULT_SIZE}
                    height={DEFAULT_SIZE}
                    stroke="black"
                />

                {titleIcon("Ver sitio web", "Link")}

            </a>
        );
    }

    public viewImages(json_path?: JSON_PATH[], url_video?: string) {

        if (!json_path) {
            json_path = [];
        }

        return (
            <Popup
                json={json_path}
                url_video={url_video}
                defaultDecorate={this.DEFAULT_DECORATE}
                icon={
                    <Watch
                        width={DEFAULT_SIZE}
                        height={DEFAULT_SIZE}
                        fill="black"
                    />
                }
                name_button={titleIcon("Ver imágenes", "Img")}
            />
        );
    }
}

function titleIcon(title: string, shortTitle: string) {
    return <span
        data-title={title}
        data-shortTitle={shortTitle}
        className="
            text-md text-wrap text-black 
            md:after:content-[attr(data-title)]
            after:content-[attr(data-shortTitle)]
        "
    />
};

type JSON_PATH = {
    url: string;
    title: string;
}

