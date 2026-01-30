import SocialLinks from "@/components/main/SocialLinks";
import ButtonNavbar from "@/components/ButtonNavbar";

import SVGBriefcase from "@/components/icons/brieftcase";

const Header = () => {
    return (
        <header className="bg-opacity-50 backdrop-blur-sm bg-neutral-primary fixed w-full z-20 top-0 start-0 border-b border-orange-200/20 pt-2 pb-2">
            <nav className="max-w-7xl flex flex-wrap items-center gap-4 justify-between mx-auto pl-2">
                <div className="hidden md:block">
                    <SVGBriefcase width={36} height={36} fill="white" />
                </div>

                <div className="flex items-center justify-center gap-4">
                    <ButtonNavbar name="Home" href="/#" />
                    <ButtonNavbar name="Proyectos" href="/#projects" />
                    <ButtonNavbar name="Sobre mí" href="/#aboutMe" />
                </div>

                <div className="pr-2">
                    <SocialLinks />
                </div>
            </nav>
        </header>
    );
}

export default Header;