import GitHub from "@/components/icons/github";
import Link from "@/components/icons/link";

import RenderPopup from "@/sections/main/projects/RenderPopup";

export default class Links {

    private DEFAULT_DECORATE = "border-2 border-zinc-50/20 bg-zinc-950/60 hover:bg-zinc-950 rounded-full p-2 hover:scale-115 transition-all cursor-pointer ";

    public github(url: string) {

        return (
            <a
                title="Ir al repositorio GitHub"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={this.DEFAULT_DECORATE}
            >
                <GitHub width={36} height={36} fill="white" />
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
                <Link width={36} height={36} stroke="white" />
            </a>
        );
    }

    public viewImages(json_path?: JSON_PATH[], url_video?: string) {

        if (!json_path) {
            json_path = [];
        }

        return (
            <RenderPopup
                json={json_path}
                url_video={url_video}
                defaultDecorate={this.DEFAULT_DECORATE}
            />
        );
    }
}

type JSON_PATH = {
    url: string;
    title: string;
}

