import SVGLinkedIn from "@/components/icons/linkedin";
import SVGGithub from "@/components/icons/github";

const SocialLinks = () => {

    const SVG = {
        linkedin: <SVGLinkedIn width={36} height={36} fill="white" />,
        github: <SVGGithub width={36} height={36} fill="white" />
    };

    return (
        <>
            <div className="flex flex-row flex-wrap items-center gap-4">
                <a
                    title="Ir a LinkedIn del perfil"
                    href="https://www.linkedin.com/in/ernesto-dlc-campos-304hellsinger/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-115 transition-all"
                >
                    {SVG.linkedin}
                </a>
                <a
                    title="Ir a GitHub del perfil"
                    href="https://github.com/EarnNestToDev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-115 transition-all"
                >
                    {SVG.github}
                </a>
            </div>
        </>
    );
}

export default SocialLinks;