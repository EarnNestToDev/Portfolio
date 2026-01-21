import GitHub from "@/components/icons/github";
import Link from "@/components/icons/link";
import RenderPopup from "@/components/main/projects/RenderPopup";

export default class Links {

    private defaultDecorate = "border-2 border-zinc-50/20 bg-zinc-950/60 hover:bg-zinc-950 rounded-full p-2 hover:scale-115 transition-all cursor-pointer ";

    public github(url: string) {

        return (
            <a
                title="Ir al repositorio GitHub"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={this.defaultDecorate}
            >
                <GitHub size={36} color="white" />
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
                className={this.defaultDecorate}
            >
                <Link size={36} color="white" />
            </a>
        );
    }

    public viewImages(url: string, n_elements: number, url_video?: string) {

        return (
            <RenderPopup
                url={url}
                n_elements={n_elements}
                defaultDecorate={this.defaultDecorate}
                url_video={url_video}
            />
        );
    }
}
