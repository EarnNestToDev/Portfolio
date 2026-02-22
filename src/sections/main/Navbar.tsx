import ButtonNavbar from "@/components/ui/ButtonNavbar";

import SVGBriefcase from "@/components/icons/brieftcase";
import SVGLinkedIn from "@/components/icons/linkedin";
import SVGGithub from "@/components/icons/github";

const SVG = {
    linkedin: <SVGLinkedIn width={36} height={36} fill="white" />,
    github: <SVGGithub width={36} height={36} fill="white" />
};

const Header = () => {
    return (
        <header className="bg-opacity-50 backdrop-blur-sm fixed w-full z-100 top-0 start-0 border-b border-orange-200/20 py-2">
            <nav className="w-full flex flex-wrap items-center gap-4 justify-between mx-auto pl-2 md:pl-8">
                <div className="hidden md:block">
                    <SVGBriefcase width={36} height={36} fill="white" />
                </div>

                <div className="flex items-center justify-center gap-4">
                    <ButtonNavbar name="Home" href="/#" />
                    <ButtonNavbar name="Experiencia" href="/#projects" />
                    <ButtonNavbar name="Sobre mí" href="/#aboutMe" />
                </div>

                <div className="pr-2 md:pr-8">
                    <div className="flex flex-row flex-wrap items-center gap-4">
                        <a
                            title="Ir a LinkedIn"
                            href="https://www.linkedin.com/in/ernesto-dlc-campos-304hellsinger/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-115 transition-all"
                        >
                            {SVG.linkedin}
                        </a>
                        <a
                            title="Ir a GitHub"
                            href="https://github.com/EarnNestToDev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-115 transition-all"
                        >
                            {SVG.github}
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;